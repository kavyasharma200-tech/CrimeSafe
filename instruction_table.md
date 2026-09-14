# 📊 Zoho Catalyst Data Store — Table Creation Instructions

This document provides the exact list of tables, column names, data types, and constraints required to set up your database in the **Zoho Catalyst Console** under **Cloud Scale → Data Store**.

> [!IMPORTANT]
> **Automatic Columns:** Catalyst automatically creates `ROWID`, `CREATEDTIME`, and `MODIFIEDTIME` columns for every table. Do NOT create these manually in the console.

---

## 1. Table: `Account`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `account_number` | `var-char` | 255 | No | No |
| `bank_name` | `var-char` | 255 | No | No |
| `owner_offender_id` | `bigint` | - | No | No |

---

## 2. Table: `Accused`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `AccusedMasterID` | `bigint` | - | Yes | Yes |
| `CaseMasterID` | `bigint` | - | No | No |
| `AccusedName` | `var-char` | 255 | No | No |
| `AgeYear` | `bigint` | - | No | No |
| `GenderID` | `bigint` | - | No | No |
| `PersonID` | `var-char` | 255 | No | No |
| `address` | `var-char` | 255 | No | No |
| `num_prior_offenses` | `bigint` | - | No | No |
| `risk_score` | `double` | - | No | No |

---

## 3. Table: `Act`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `ActCode` | `var-char` | 255 | No | No |
| `ActDescription` | `var-char` | 255 | No | No |
| `ShortName` | `var-char` | 255 | No | No |
| `Active` | `boolean` | - | No | No |

---

## 4. Table: `ActSectionAssociation`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `CaseMasterID` | `bigint` | - | No | No |
| `ActID` | `var-char` | 255 | No | No |
| `SectionID` | `var-char` | 255 | No | No |
| `ActOrderID` | `bigint` | - | No | No |
| `SectionOrderID` | `bigint` | - | No | No |

---

## 5. Table: `ArrestSurrender`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `ArrestSurrenderID` | `bigint` | - | Yes | Yes |
| `CaseMasterID` | `bigint` | - | No | No |
| `ArrestSurrenderTypeID` | `bigint` | - | No | No |
| `ArrestSurrenderDate` | `date` | - | No | No |
| `ArrestSurrenderStateId` | `bigint` | - | No | No |
| `ArrestSurrenderDistrictId` | `bigint` | - | No | No |
| `PoliceStationID` | `bigint` | - | No | No |
| `IOID` | `bigint` | - | No | No |
| `CourtID` | `bigint` | - | No | No |
| `AccusedMasterID` | `bigint` | - | No | No |
| `IsAccused` | `boolean` | - | No | No |
| `IsComplainantAccused` | `boolean` | - | No | No |

---

## 6. Table: `AuditLog`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `timestamp` | `datetime` | - | No | No |
| `username` | `var-char` | 255 | No | No |
| `role` | `var-char` | 255 | No | No |
| `action` | `var-char` | 255 | No | No |
| `details` | `var-char` | 5000 | No | No |
| `ip_address` | `var-char` | 255 | No | No |

---

## 7. Table: `Call`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `caller_phone` | `var-char` | 255 | No | No |
| `receiver_phone` | `var-char` | 255 | No | No |
| `timestamp` | `datetime` | - | No | No |
| `duration_seconds` | `bigint` | - | No | No |

---

## 8. Table: `CaseCategory`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `CaseCategoryID` | `bigint` | - | Yes | Yes |
| `LookupValue` | `var-char` | 255 | No | No |

---

## 9. Table: `CaseMaster`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `CaseMasterID` | `bigint` | - | Yes | Yes |
| `CrimeNo` | `var-char` | 255 | No | No |
| `CaseNo` | `var-char` | 255 | No | No |
| `CrimeRegisteredDate` | `date` | - | No | No |
| `PolicePersonID` | `bigint` | - | No | No |
| `PoliceStationID` | `bigint` | - | No | No |
| `CaseCategoryID` | `bigint` | - | No | No |
| `GravityOffenceID` | `bigint` | - | No | No |
| `CrimeMajorHeadID` | `bigint` | - | No | No |
| `CrimeMinorHeadID` | `bigint` | - | No | No |
| `CaseStatusID` | `bigint` | - | No | No |
| `CourtID` | `bigint` | - | No | No |
| `IncidentFromDate` | `datetime` | - | No | No |
| `IncidentToDate` | `datetime` | - | No | No |
| `InfoReceivedPSDate` | `datetime` | - | No | No |
| `latitude` | `double` | - | No | No |
| `longitude` | `double` | - | No | No |
| `BriefFacts` | `var-char` | 255 | No | No |
| `priority` | `var-char` | 255 | No | No |
| `sla_deadline` | `datetime` | - | No | No |
| `summary` | `var-char` | 255 | No | No |
| `leads` | `var-char` | 5000 | No | No |
| `evidence_correlations` | `var-char` | 5000 | No | No |
| `timeline` | `var-char` | 5000 | No | No |

---

## 10. Table: `CaseStatusMaster`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `CaseStatusID` | `bigint` | - | Yes | Yes |
| `CaseStatusName` | `var-char` | 255 | No | No |

---

## 11. Table: `CasteMaster`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `caste_master_id` | `bigint` | - | No | No |
| `caste_master_name` | `var-char` | 255 | No | No |

---

## 12. Table: `ChargesheetDetails`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `CSID` | `bigint` | - | Yes | Yes |
| `CaseMasterID` | `bigint` | - | No | No |
| `csdate` | `datetime` | - | No | No |
| `cstype` | `var-char` | 255 | No | No |
| `PolicePersonID` | `bigint` | - | No | No |

---

## 13. Table: `ComplainantDetails`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `ComplainantID` | `bigint` | - | Yes | Yes |
| `CaseMasterID` | `bigint` | - | No | No |
| `ComplainantName` | `var-char` | 255 | No | No |
| `AgeYear` | `bigint` | - | No | No |
| `OccupationID` | `bigint` | - | No | No |
| `ReligionID` | `bigint` | - | No | No |
| `CasteID` | `bigint` | - | No | No |
| `GenderID` | `bigint` | - | No | No |

---

## 14. Table: `Court`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `CourtID` | `bigint` | - | Yes | Yes |
| `CourtName` | `var-char` | 255 | No | No |
| `DistrictID` | `bigint` | - | No | No |
| `StateID` | `bigint` | - | No | No |
| `Active` | `boolean` | - | No | No |

---

## 15. Table: `CrimeHead`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `CrimeHeadID` | `bigint` | - | Yes | Yes |
| `CrimeGroupName` | `var-char` | 255 | No | No |
| `Active` | `boolean` | - | No | No |

---

## 16. Table: `CrimeHeadActSection`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `CrimeHeadID` | `bigint` | - | No | No |
| `ActCode` | `var-char` | 255 | No | No |
| `SectionCode` | `var-char` | 255 | No | No |

---

## 17. Table: `CrimeSubHead`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `CrimeSubHeadID` | `bigint` | - | Yes | Yes |
| `CrimeHeadID` | `bigint` | - | No | No |
| `CrimeHeadName` | `var-char` | 255 | No | No |
| `SeqID` | `bigint` | - | No | No |

---

## 18. Table: `CurrencySeizure`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `var-char` | 255 | Yes | Yes |
| `lat` | `double` | - | No | No |
| `lng` | `double` | - | No | No |
| `denomination` | `var-char` | 255 | No | No |
| `verdict` | `var-char` | 255 | No | No |
| `authenticity_score` | `double` | - | No | No |
| `notes_count` | `bigint` | - | No | No |
| `logged_by` | `var-char` | 255 | No | No |
| `location_name` | `var-char` | 255 | No | No |
| `logged_at` | `datetime` | - | No | No |

---

## 19. Table: `Designation`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `DesignationID` | `bigint` | - | Yes | Yes |
| `DesignationName` | `var-char` | 255 | No | No |
| `Active` | `boolean` | - | No | No |
| `SortOrder` | `bigint` | - | No | No |

---

## 20. Table: `District`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `DistrictID` | `bigint` | - | Yes | Yes |
| `DistrictName` | `var-char` | 255 | No | No |
| `StateID` | `bigint` | - | No | No |
| `Active` | `boolean` | - | No | No |
| `population` | `bigint` | - | No | No |
| `area_sqkm` | `double` | - | No | No |
| `literacy_rate` | `double` | - | No | No |
| `unemployment_rate` | `double` | - | No | No |
| `avg_income` | `double` | - | No | No |
| `urbanization_pct` | `double` | - | No | No |

---

## 21. Table: `Employee`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `EmployeeID` | `bigint` | - | Yes | Yes |
| `DistrictID` | `bigint` | - | No | No |
| `UnitID` | `bigint` | - | No | No |
| `RankID` | `bigint` | - | No | No |
| `DesignationID` | `bigint` | - | No | No |
| `KGID` | `var-char` | 255 | No | No |
| `FirstName` | `var-char` | 255 | No | No |
| `EmployeeDOB` | `date` | - | No | No |
| `GenderID` | `bigint` | - | No | No |
| `BloodGroupID` | `bigint` | - | No | No |
| `PhysicallyChallenged` | `boolean` | - | No | No |
| `AppointmentDate` | `date` | - | No | No |
| `username` | `var-char` | 255 | No | No |
| `hashed_password` | `var-char` | 255 | No | No |
| `role` | `var-char` | 255 | No | No |
| `mfa_secret` | `var-char` | 255 | No | No |
| `mfa_enabled` | `boolean` | - | No | No |

---

## 22. Table: `Gang`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `var-char` | 255 | Yes | Yes |
| `name` | `var-char` | 255 | No | No |
| `description` | `var-char` | 255 | No | No |

---

## 23. Table: `GravityOffence`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `GravityOffenceID` | `bigint` | - | Yes | Yes |
| `LookupValue` | `var-char` | 255 | No | No |

---

## 24. Table: `IPSighting`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `ip` | `var-char` | 255 | No | No |
| `lookup_count` | `bigint` | - | No | No |
| `first_seen` | `datetime` | - | No | No |
| `last_seen` | `datetime` | - | No | No |

---

## 25. Table: `IPWatchlistEntry`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `ip` | `var-char` | 255 | No | No |
| `list_type` | `var-char` | 255 | No | No |
| `note` | `var-char` | 255 | No | No |
| `added_by` | `var-char` | 255 | No | No |
| `created_at` | `datetime` | - | No | No |

---

## 26. Table: `Location`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `var-char` | 255 | Yes | Yes |
| `name` | `var-char` | 255 | No | No |
| `lat` | `double` | - | No | No |
| `lng` | `double` | - | No | No |

---

## 27. Table: `MissingPerson`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `var-char` | 255 | Yes | Yes |
| `name` | `var-char` | 255 | No | No |
| `age` | `bigint` | - | No | No |
| `gender` | `var-char` | 255 | No | No |
| `last_seen_date` | `datetime` | - | No | No |
| `last_seen_location` | `var-char` | 255 | No | No |
| `photo_url` | `var-char` | 255 | No | No |
| `status` | `var-char` | 255 | No | No |

---

## 28. Table: `NayakLawChunk`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `var-char` | 255 | Yes | Yes |
| `act` | `var-char` | 255 | No | No |
| `section` | `var-char` | 255 | No | No |
| `title` | `var-char` | 255 | No | No |
| `official_text` | `var-char` | 255 | No | No |
| `citizen_scenario` | `var-char` | 255 | No | No |
| `citizen_explanation` | `var-char` | 255 | No | No |
| `recommended_action` | `var-char` | 255 | No | No |
| `penalty_summary` | `var-char` | 255 | No | No |
| `source_url` | `var-char` | 255 | No | No |
| `last_verified` | `var-char` | 255 | No | No |
| `tags` | `var-char` | 5000 | No | No |
| `embedding` | `var-char` | 5000 | No | No |

---

## 29. Table: `NayakMessage`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `session_id` | `var-char` | 255 | No | No |
| `role` | `var-char` | 255 | No | No |
| `content` | `var-char` | 255 | No | No |
| `tool_name` | `var-char` | 255 | No | No |
| `tool_result` | `var-char` | 5000 | No | No |
| `created_at` | `datetime` | - | No | No |

---

## 30. Table: `NayakSession`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `var-char` | 255 | Yes | Yes |
| `user_id` | `var-char` | 255 | No | No |
| `started_at` | `datetime` | - | No | No |
| `last_active_at` | `datetime` | - | No | No |
| `title` | `var-char` | 255 | No | No |

---

## 31. Table: `NayakUserUpload`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `var-char` | 255 | Yes | Yes |
| `user_id` | `var-char` | 255 | No | No |
| `session_id` | `var-char` | 255 | No | No |
| `media_url` | `var-char` | 255 | No | No |
| `media_type` | `var-char` | 255 | No | No |
| `classifier_verdict` | `var-char` | 5000 | No | No |
| `linked_report_id` | `var-char` | 255 | No | No |
| `created_at` | `datetime` | - | No | No |

---

## 32. Table: `OccupationMaster`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `OccupationID` | `bigint` | - | Yes | Yes |
| `OccupationName` | `var-char` | 255 | No | No |

---

## 33. Table: `Phone`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `phone_number` | `var-char` | 255 | No | No |
| `owner_offender_id` | `bigint` | - | No | No |

---

## 34. Table: `RBIFraudRegistry`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `account_number` | `var-char` | 255 | No | No |
| `bank_name` | `var-char` | 255 | No | No |
| `flagged_date` | `datetime` | - | No | No |
| `fraud_type` | `var-char` | 255 | No | No |
| `reported_amount` | `double` | - | No | No |
| `status` | `var-char` | 255 | No | No |

---

## 35. Table: `Rank`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `RankID` | `bigint` | - | Yes | Yes |
| `RankName` | `var-char` | 255 | No | No |
| `Hierarchy` | `bigint` | - | No | No |
| `Active` | `boolean` | - | No | No |

---

## 36. Table: `ReligionMaster`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `ReligionID` | `bigint` | - | Yes | Yes |
| `ReligionName` | `var-char` | 255 | No | No |

---

## 37. Table: `Section`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `ActCode` | `var-char` | 255 | No | No |
| `SectionCode` | `var-char` | 255 | No | No |
| `SectionDescription` | `var-char` | 255 | No | No |
| `Active` | `boolean` | - | No | No |

---

## 38. Table: `SocioEconomicIndicator`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `district_id` | `bigint` | - | No | No |
| `year` | `bigint` | - | No | No |
| `gdp_per_capita` | `double` | - | No | No |
| `poverty_rate` | `double` | - | No | No |
| `school_density` | `double` | - | No | No |
| `hospital_density` | `double` | - | No | No |
| `police_per_capita` | `double` | - | No | No |

---

## 39. Table: `State`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `StateID` | `bigint` | - | Yes | Yes |
| `StateName` | `var-char` | 255 | No | No |
| `NationalityID` | `bigint` | - | No | No |
| `Active` | `boolean` | - | No | No |

---

## 40. Table: `TelecomCDR`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `phone_number` | `var-char` | 255 | No | No |
| `imsi` | `var-char` | 255 | No | No |
| `imei` | `var-char` | 255 | No | No |
| `cell_tower_id` | `var-char` | 255 | No | No |
| `call_type` | `var-char` | 255 | No | No |
| `associated_number` | `var-char` | 255 | No | No |
| `duration_seconds` | `bigint` | - | No | No |
| `timestamp` | `datetime` | - | No | No |

---

## 41. Table: `UnidentifiedBody`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `var-char` | 255 | Yes | Yes |
| `estimated_age` | `bigint` | - | No | No |
| `gender` | `var-char` | 255 | No | No |
| `found_date` | `datetime` | - | No | No |
| `found_location` | `var-char` | 255 | No | No |
| `distinguishing_features` | `var-char` | 255 | No | No |
| `status` | `var-char` | 255 | No | No |

---

## 42. Table: `Unit`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `UnitID` | `bigint` | - | Yes | Yes |
| `UnitName` | `var-char` | 255 | No | No |
| `TypeID` | `bigint` | - | No | No |
| `ParentUnit` | `bigint` | - | No | No |
| `NationalityID` | `bigint` | - | No | No |
| `StateID` | `bigint` | - | No | No |
| `DistrictID` | `bigint` | - | No | No |
| `Active` | `boolean` | - | No | No |
| `lat` | `double` | - | No | No |
| `lng` | `double` | - | No | No |
| `jurisdiction_area_sqkm` | `double` | - | No | No |
| `officer_count` | `bigint` | - | No | No |

---

## 43. Table: `UnitType`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `UnitTypeID` | `bigint` | - | Yes | Yes |
| `UnitTypeName` | `var-char` | 255 | No | No |
| `CityDistState` | `var-char` | 255 | No | No |
| `Hierarchy` | `bigint` | - | No | No |
| `Active` | `boolean` | - | No | No |

---

## 44. Table: `Vehicle`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `plate_number` | `var-char` | 255 | No | No |
| `make` | `var-char` | 255 | No | No |
| `model` | `var-char` | 255 | No | No |
| `owner_offender_id` | `bigint` | - | No | No |

---

## 45. Table: `Victim`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `VictimMasterID` | `bigint` | - | Yes | Yes |
| `CaseMasterID` | `bigint` | - | No | No |
| `VictimName` | `var-char` | 255 | No | No |
| `AgeYear` | `bigint` | - | No | No |
| `GenderID` | `bigint` | - | No | No |
| `VictimPolice` | `var-char` | 255 | No | No |

---

## 46. Table: `Visit`

| Column Name | Data Type | Max Length | Mandatory? | Unique? |
| :--- | :--- | :---: | :---: | :---: |
| `id` | `bigint` | - | Yes | Yes |
| `offender_id` | `bigint` | - | No | No |
| `location_id` | `var-char` | 255 | No | No |
| `timestamp` | `datetime` | - | No | No |

---
