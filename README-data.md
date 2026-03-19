# How to Update PRISM Dashboard Data

This guide explains how to add a new study or change existing study data (ROI, Message Map) **without writing code**. All study data lives in CSV and JSON files that you can edit in Excel, Google Sheets, or any text editor.

---

## Where the data lives

- **Study data (ROI + Message Map):**  
  `src/data/studies/`  
  - **ESI study:** `src/data/studies/esi/`  
  - **MA study:** `src/data/studies/ma/`  

- **Segment list (names, party, population):**  
  `src/data/static/segments.js`  
  This list is shared by all studies and **rarely changes**. Only developers should edit it.

---

## Updating an existing study (ESI or MA)

Each study folder contains:

| File | What it is | How to edit |
|------|------------|-------------|
| **roiData.csv** | One row per segment: ROI score, persuasion %, coalition %, activation %, influence %, tier | Open in Excel or Google Sheets. Edit numbers; save as CSV (UTF-8). |
| **messageMap.csv** | One row per message; columns are segments. Values are “Share of Preference” (SoP) scores. | Same as above. Do not remove or rename column headers. |
| **config.json** | Study name and short description. | Edit with a text editor. Keep valid JSON (quotes, commas). |
| **prePost.json** | Pre/post survey metrics and per-segment pre/post numbers. | Usually only developers edit this. |

### ROI data (roiData.csv)

- **First row must be the header row** (exactly as shown).
- **One data row per segment.** Segment codes (TSP, CEC, TC, …) must match the segment list.
- Columns:
  - `segmentId` — segment code (e.g. TSP, CEC).
  - `roiScore` — ROI value (e.g. 1.02).
  - `persuasionPct` — % high ROI (e.g. 36).
  - `persuasionHighLeverage`, `persuasionLowLeverage`, `persuasionNotConvertible`, `persuasionNotPersuadable`, `persuasionNegMovement` — five persuasion buckets (percentages; should sum to 100 per row).
  - `coalitionPct` — supporters %.
  - `activationPct` — activation %.
  - `influencePct` — influence %.
  - `tier` — 1, 2, or 3.

Save as **CSV**. If you use Excel, choose “CSV UTF-8” so special characters and symbols stay correct.

### Message Map (messageMap.csv)

- **First row must be the header row.**  
  Columns: `messageId`, `messageLabel`, `theme`, `Total`, then each segment code (TSP, CEC, …), then `PolicyElites`.
- **One data row per message.**  
  - `messageId` — number (1, 2, 3, …).  
  - `messageLabel` — short message name (use quotes if it contains commas).  
  - `theme` — theme name (e.g. Financial, Coverage, Innovation).  
  - `Total` — SoP for “Total” column.  
  - Remaining columns — SoP score for that segment or Policy Elites (numbers, e.g. 15.2).

Do not remove or rename columns; the app expects these exact names.

### config.json

Example:

```json
{
  "studyId": "esi",
  "studyLabel": "ESI Study",
  "description": "Employer-Sponsored Insurance study"
}
```

- Change `studyLabel` and `description` to match your study.  
- Keep `studyId` as lowercase (esi, ma, or the same id you use in the folder name).

---

## Adding a new study

1. **Create a new folder** under `src/data/studies/`, e.g. `src/data/studies/newstudy/`.

2. **Copy an existing study folder** (e.g. `esi`) and rename the copy to `newstudy`. Then:
   - Edit **config.json**: set `studyId` to `newstudy`, and set `studyLabel` and `description`.
   - Replace the contents of **roiData.csv** and **messageMap.csv** with your new study’s data (same column layout as ESI/MA).
   - Adjust **prePost.json** if you have pre/post metrics (or leave as-is and ask a developer to wire it).

3. **Register the study in the app.**  
   A developer must add the new study to the data loader and to the study switcher (e.g. “ESI STUDY” / “MA STUDY” / “New Study” tabs). This is done in code (e.g. in `src/data/loader.js` and the page that shows the study dropdown).

So: you can add the folder and CSV/JSON files yourself; the one step that requires a developer is “hooking up” the new study in the loader and UI.

---

## Rules to avoid broken data

- **Do not remove or rename column headers** in the CSVs.
- **Segment codes** in ROI and Message Map must match the segment list in `src/data/static/segments.js` (e.g. TSP, CEC, TC, …).
- **Save CSVs as UTF-8** (e.g. “CSV UTF-8” in Excel) so characters display correctly.
- **Keep JSON valid** in config.json and prePost.json (matching quotes and commas).

If something doesn’t show up after you change files, refresh the app or run a new build; if it still fails, check the browser console for errors and that file names and column names match this guide.
