# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single static marketing site: the **Veralogix Smart Mining Hub** landing page, built with Vite + React (no backend, database, automated tests, or linter configured). Scripts live in `package.json` (`dev`, `build`, `preview`).

- **Run (development):** `npm run dev -- --host`. Vite serves under the configured `base` path, so the app is at `http://localhost:5173/Veralogix-Smart-Mining-Hub-Landing-Page-open-pit-Kpi-Targets-/` — the bare `http://localhost:5173/` returns 404. The `base` is set in `vite.config.js`.
- **Build:** `npm run build` (outputs to `dist/`). **Preview built output:** `npm run preview`.
- **Lint/Test:** none are configured in this repo. Do not assume `npm test`/`npm run lint` exist.
- The GitHub Pages workflow (`.github/workflows/pages.yml`) uploads the repo root (`path: .`), not the Vite `dist/` build, so the deployed site differs from the local production build; keep this in mind when reasoning about deploys.
