# KAWACH — Claude Handoff Document
> Created: 2026-07-25 | Resume from this point when switching models

---

## 🎯 What we were doing

Deploying the **latest police backend to Zoho Catalyst AppSail via CLI**.

The previous deployment lived in a different (possibly Keshav Aggarwal's) repo. Ishaan's Zoho account is connected to **his own GitHub repo**. We are deploying fresh from the CLI with `npx zcatalyst-cli deploy --only appsail` from the workspace root.

---

## ✅ What's DONE (this session)

### 1. Pip dependencies bundled into backend folder
```
py -3.10 -m pip install -r police/backend/requirements.txt -t police/backend/ --upgrade
```
All packages are now installed **locally inside** `police/backend/` so AppSail can find them.

### 2. `predeploy.js` created (cross-platform Node wrapper)
**File**: `police/backend/predeploy.js`
- Uses `py -3.10` on Windows, `python3` on Linux (AppSail's runtime)
- Runs `pip install -r ./requirements.txt -t ./ --upgrade` inside the backend directory
- This avoids the `python3: not found` error that crashed the old `app-config.json` scripts on Windows

### 3. `app-config.json` updated
**File**: `police/backend/app-config.json`
- `scripts.preserve` → `node predeploy.js`
- `scripts.predeploy` → `node predeploy.js`
- Stack: `python_3_10`
- Memory: `512`
- `command`: `python3 run.py`

### 4. Last deploy attempt (status UNKNOWN — check console)
The second deploy attempt was still running when the user ran out of credits. The `predeploy.js` ran successfully (deps installed with Python 3.10), but there was a **psycopg2-binary build error** on the first attempt because `py -3` defaulted to Python 3.13 which lacks pg_config. Fixed by switching to `py -3.10`. The second attempt may have succeeded — **CHECK THE CATALYST CONSOLE** first before re-deploying.

---

## ⚠️ IMMEDIATE NEXT STEPS

### Step 1 — Check if the last deploy succeeded
Go to: https://catalyst.zoho.com → Your Project → AppSail → `police` service
- If **Running** → great, move to Step 2.
- If **Failed** → check error logs in console, then re-run:
```powershell
cd "c:\Ishaan GPT\APPS\Kawach"
npx zcatalyst-cli deploy --only appsail
```

### Step 2 — Verify the deployed backend is live
The AppSail URL will be in the Catalyst console. Hit these endpoints:
```
GET /                  → should return { "status": "Kawach Police API running" }
GET /api/auth/login    → should return 422 (means the route is live)
```

### Step 3 — Seed the demo users
**WARNING**: `app/scripts/generate_data.py`'s `seed_database()` calls `Base.metadata.drop_all()` which **WIPES ALL DATA**. Don't run the full seed.

Do a targeted user insert only — run `create_demo_users()` in isolation or insert directly:
```sql
INSERT INTO users (name, badge_number, role, district, password_hash)
VALUES
  ('DGP Sharma', 'DGP001', 'dgp', 'State', '<bcrypt hash of dgp123>'),
  ('SP Kumar',   'SP001',  'sp',  'Bengaluru Urban', '<bcrypt hash of sp123>');
```
Login credentials used in `police/frontend/src/views/LoginView.jsx`: `dgp`/`dgp123`, `sp`/`sp123`, `inspector`/`ins123`.

### Step 4 — Hook up Zoho Stratus (Object Storage) for media
Ishaan created a Stratus bucket at: `https://kawachmedia-development.zohostratus.in`
Goal: Cloudinary-uploaded media → also stored in Stratus (for Zoho PS judge demo).

**IMPORTANT**: Stratus ≠ FileStore. Stratus is Zoho Catalyst Object Store. The `zcatalyst-sdk` is already installed. Check Catalyst docs for Object Store API.

---

## 🏗️ Project Architecture (quick ref)

| Service | Path | Hosting | Status |
|---|---|---|---|
| Citizen PWA | `user/` | Vercel `kawach-two.vercel.app` | ✅ Live |
| AI Classifier | `Classifier/` | HF Space `Hikity/kawach-classifier` | ✅ Live |
| Police backend | `police/backend` | **Zoho AppSail** (was Render) | 🔄 Deploying |
| Police console | `police/frontend` | Static in `user/public/police/` via Vercel | ✅ Live |
| Dept dashboard | `departments/` | Static / Vercel | ✅ Live |

---

## 📁 Key Files

| File | Purpose |
|---|---|
| `CLAUDE.md` | Full project bible — real vs mocked features, architecture |
| `police/backend/app-config.json` | AppSail deployment config |
| `police/backend/predeploy.js` | Cross-platform pip installer (NEW this session) |
| `police/backend/requirements.txt` | Python deps |
| `police/backend/app/main.py` | FastAPI entry point |
| `police/backend/run.py` | Uvicorn runner (AppSail calls this) |
| `user/.env` | Committed env vars (Supabase anon, Cloudinary, API URLs) |
| `.catalystrc` | Catalyst project binding (project ID, environment) |

---

## 🔑 Credentials / Config

In `police/backend/app-config.json` env_variables:
- `DATABASE_URL` → Supabase Postgres connection pooler (ap-south-1)
- `GEMINI_API_KEY` → **empty string** — must be set in Catalyst console env vars
- `CLASSIFIER_URL` → `https://hikity-kawach-classifier.hf.space`

---

## 🐛 Known Gotchas

1. **Node.js on AppSail**: The `python_3_10` stack may not have Node available. If predeploy fails with "node: not found", change `app-config.json` scripts back to:
   ```
   "preserve": "pip install -r ./requirements.txt -t ./ --upgrade",
   "predeploy": "pip install -r ./requirements.txt -t ./ --upgrade"
   ```
   Linux AppSail has `pip` directly — no wrapper needed.

2. **psycopg2-binary**: On Linux/AppSail this installs from a pre-built wheel (no pg_config needed). The pg_config error only happens on Windows with Python 3.13.

3. **Supabase users table is empty** — demo login returns 401 until users are seeded.

4. **Police frontend rebuild**: Editing `police/frontend/src/` has no live effect until you rebuild:
   ```
   cd police/frontend && npm install && npx vite build --base=./
   ```
   Output lands in `user/public/police/` — commit + push to Vercel.

5. **ML models not trained**: `app/ml/` exists but pkl files aren't present. Routes degrade gracefully to statistical formulas. This is expected and documented.

---

## 📝 Zoho Stratus — Context

Ishaan wants media to appear in Zoho Stratus for the Zoho PS judge demo.
- Bucket: `kawachmedia-development.zohostratus.in`
- SDK: `zcatalyst-sdk` already installed
- We tested uploading an Unsplash image to Stratus manually — it worked
- Next: integrate backend routes to mirror uploads to Stratus
- API credentials are in the Catalyst console (not in any .env file)
