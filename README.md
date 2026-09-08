# FacilityPro v4

A single-file, schema-driven CMMS / facilities management dashboard. Built for Crystal FM.

## What it does

- **Work Orders, Assets, Planned Maintenance, Compliance, Inventory, Contractors, People** — each a full register with search, choice filters, click-to-sort, multi-select and bulk delete.
- **Everything is editable.** The field designer on each module lets you rename, reorder, retype or delete any field and edit its choice options. Forms and tables rebuild from that definition.
- **Add your own modules.** Settings → Modules creates a new register that immediately gets its own table, form, import and export.
- **Excel export.** Any module exports the current filtered view to `.xlsx`. Reports produces a full workbook: summary sheet, one sheet per module, plus an assignee breakdown.
- **Excel import.** Reads the header row, auto-maps columns to existing fields, and lets you remap, skip, or create new fields. Choose append or replace before anything changes.
- **Drill-down dashboard.** Every KPI, category bar and alert row opens the exact records behind the number. Every ID opens the full record.
- **Branding.** Organisation name, accent colour and table density are all configurable.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

Set repo **Settings → Pages → Source → GitHub Actions**. The included workflow
(`.github/workflows/deploy.yml`) then builds and publishes on every push to `main`.
It passes the repo name as Vite's `base` automatically, so there is nothing to configure.

## Note on data

There is no backend. Changes autosave to the browser's own storage, so they survive refreshes and closing the tab, but they are per-browser and per-device — two people using the deployed link keep separate copies.

To move data between machines or hand it to a colleague, use **Settings → Data & backups → Download backup**, then **Restore backup** on the other machine. Excel export covers the same ground in a spreadsheet-friendly form.

Swap the `SEED` object in `src/FacilityPro.jsx` to change the starting data for everyone. If you need genuinely shared, multi-user data, the storage layer at the top of that file is the single place to swap in an API or database.
