/**
 * Zoho Catalyst Stratus Storage Integration
 * Bucket: kawachmedia
 * Domain: https://kawachmedia-development.zohostratus.in
 */

export const STRATUS_CONFIG = {
  bucketName: 'kawachmedia',
  domain: 'https://kawachmedia-development.zohostratus.in',
};

/**
 * Gets the public URL for an object stored in Stratus
 * @param {string} objectName - Name or path of the object in the bucket
 * @returns {string} Public URL
 */
export function getStratusUrl(objectName) {
  const cleanPath = objectName.startsWith('/') ? objectName.slice(1) : objectName;
  return `${STRATUS_CONFIG.domain}/${cleanPath}`;
}

/**
 * Uploads a file to Zoho Catalyst Stratus bucket.
 * Uses Catalyst Web SDK if initialized, or falls back to direct API upload.
 *
 * @param {File|Blob} file - The file object to upload
 * @param {string} [customName] - Optional custom name/path for the file in the bucket
 * @returns {Promise<{ url: string, name: string, success: boolean }>}
 */
export async function uploadToStratus(file, customName) {
  const objectName = customName || `${Date.now()}_${file.name || 'upload.jpg'}`;

  // 1. Try via Catalyst Web SDK if present on window
  if (typeof window !== 'undefined' && window.catalyst && typeof window.catalyst.stratus === 'function') {
    try {
      const stratus = window.catalyst.stratus();
      const bucket = stratus.bucket(STRATUS_CONFIG.bucketName);
      const res = await bucket.putObject(objectName, file);
      return {
        url: res?.url || getStratusUrl(objectName),
        name: objectName,
        success: true,
        method: 'sdk',
      };
    } catch (err) {
      console.warn('[Stratus SDK] Upload via SDK failed, trying direct endpoint:', err);
    }
  }

  // 2. Direct HTTP upload to Stratus endpoint
  const targetUrl = getStratusUrl(objectName);
  const response = await fetch(targetUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type || 'application/octet-stream',
    },
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      console.warn(`[Stratus] HTTP ${response.status}: Upload requires active Catalyst session or updated bucket permissions.`);
    }
    throw new Error(`Stratus upload failed (${response.status}): ${response.statusText}`);
  }

  return {
    url: targetUrl,
    name: objectName,
    success: true,
    method: 'http',
  };
}
