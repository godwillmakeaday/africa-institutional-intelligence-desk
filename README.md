# Africa Institutional Intelligence Desk

**Where African public information becomes professional intelligence.**

An institutional intelligence platform that organizes scattered public information —
laws, gazettes, regulations, court signals, procurement notices, policy shifts, land
notices, trade corridors, and public-sector decisions — into structured intelligence
for lawyers, investors, journalists, NGOs, businesses, researchers, and policy actors.

Nigeria-first, Africa-ready. Built for the under-indexed institutional realities of the
Global South.

> **Demonstration build.** All intelligence in this version is clearly labelled
> **Sample / Demonstration Data**. It is illustrative only — not real, current, or
> verified information — and must not be relied upon. Replace `src/data/intelligenceItems.js`
> with a verified data source before production use.

---

## Stack

- **Vite** + **React 18** (SPA, no backend required for v1)
- **React Router** for page routing
- **Tailwind CSS** for styling
- Local mock data in `src/data/intelligenceItems.js`

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Deploy to Vercel

This is a static SPA and deploys to Vercel with no configuration:

1. Push the project to a Git repository.
2. Import it in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.

`vercel.json` already includes the SPA rewrite so client-side routes (e.g. `/brief/...`)
resolve correctly on refresh and deep links.

## Project structure

```
src/
  data/intelligenceItems.js   # mock data + taxonomies (single source of truth)
  components/                 # Header, Footer, Hero, IntelligenceCard, RiskBadge,
                              # CategoryBadge, FilterPanel, PackageCard, MethodologyStep,
                              # SourceLibraryCard, ContactForm, ClassificationStrip, ...
  pages/                      # Home, Dashboard, NigeriaDesk, AccessModel, Library,
                              # Methodology, BriefingDesk, BriefDetail, About, Contact,
                              # NotFound
```

## Nigeria-first, Africa-ready

The platform leads with a **Nigeria Desk** (`/nigeria`) — a *monitoring framework* of ten
intelligence areas (Federal Regulation Watch, State Government Tracker, Court & Litigation
Signals, CAC & Corporate Registry Signals, Procurement & Public Finance Watch, Land &
Property Notice Desk, Tax & Revenue Monitor, Customs & Trade Corridor Watch, Election &
Political Risk Monitor, Security & Governance Signals) with a **Nigerian-state filter** and
state-level demonstration briefs for Lagos, Abuja (FCT), Nasarawa, Kano, Rivers, Kaduna,
Plateau, and Ogun.

These are a **sample intelligence structure**: the framework is defined and the briefs are
**demonstration briefs**, clearly labelled sample data. The desk does not claim live data —
each area's **data source is to be connected**. The taxonomy and methodology are built to
extend across African markets without redesign. Nigerian states are defined in
`NIGERIA_STATES` and the areas in `nigeriaDeskAreas` in `src/data/intelligenceItems.js`.

## Design system

- **Palette** — deep navy `#0B1A2A`, navy `#12283D`, off-white parchment `#F2EEE4`,
  muted gold `#B38B45`. Risk colours are reserved exclusively for the risk system.
- **Type** — Spectral (display serif), IBM Plex Sans (body/UI), IBM Plex Mono (data
  labels and the classification strip).
- **Signature** — the monospace *classification strip* (`Jurisdiction · Source · Ref ·
  Filed`) that appears on every card and brief header, encoding real metadata like a
  classified dossier.

## Replacing the sample data

Each intelligence item follows this shape:

```js
{
  id, title, slug, category, country, region, jurisdiction, sourceType,
  date, riskLevel, status, summary, whyItMatters, affectedSectors,
  recommendedAction, sourceNote, confidenceLevel, tags, isSampleData
}
```

Keep `slug` unique — it is the route key for `/brief/:slug`. Set `isSampleData: false`
only for verified, real records, and remove the demonstration ribbon/labels accordingly.
