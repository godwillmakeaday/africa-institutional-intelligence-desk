# Africa Record Desk

**A source-mapped institutional signals platform.**

Africa Record Desk organizes public-facing records, notices, gazettes, regulatory
updates, procurement signals, land notices, court-adjacent information, and policy
movements into structured briefs. Nigeria-first, with the continent on the roadmap.

> **We do not claim ownership over public information.** Public documents, official
> notices, gazettes, court lists, regulations, and government publications remain the
> property of their original public authorities or lawful publishers. The platform's
> value is classification, source mapping, jurisdiction mapping, risk labelling,
> summaries, alerts, and professional briefings.

> **Demonstration build.** All records shown are sample / demonstration records, driven
> by the `DEMO_MODE` flag in `src/config.js`. Set `DEMO_MODE = false` to remove all
> demonstration labelling in one place at launch.

---

## Stack

- **Vite** + **React 18** with **React Router**
- **Tailwind CSS**
- Local data in `src/data/intelligenceItems.js`
- **Build-time prerendering** for indexability (see below)

## Run & build

```bash
npm install
npm run dev          # dev server
npm run build        # client build + SSR build + prerender (full, indexable output)
npm run build:client # client-only build (no prerender), if needed
npm run preview      # preview the built site
```

## Indexability (server-rendered pages, JSON-LD, sitemap)

`npm run build` runs three steps: a client build, an SSR build (`src/entry-server.jsx`),
and `scripts/prerender.mjs`. The prerender renders **every route — and every
`/brief/<ref>` record — to its own static HTML file** under `dist/`, each with a
route-specific `<title>`, description, canonical, and OpenGraph/Twitter tags. Brief pages
also carry **JSON-LD (`Report` schema)** built from the record fields (jurisdiction,
source type, ref, filed date, sectors, risk, status, verification). A **`sitemap.xml`** is
generated for all routes.

- The desk/list shell is server-rendered too (cards are present in the static HTML).
- The client **hydrates** the prerendered markup.
- Set your production domain in `SITE_URL` (`src/config.js`) so canonical URLs, OG, and the
  sitemap are correct. `public/robots.txt` points at the sitemap.

Deploy to **Vercel**: framework preset **Vite**, build `npm run build`, output `dist`.
`vercel.json` serves the prerendered static files first and falls back to the SPA for any
unmatched path.

## Brand & config

All brand strings and flags live in `src/config.js` (`BRAND`, `DEMO_MODE`, `DEMO_NOTICE`,
`SITE_URL`, `COVERAGE`). The monogram is `ARD` (tight fallback `RD`), rendered as a stamp
via `src/components/Seal.jsx`. Record references use the `ARD-` prefix.

## Records & vocabularies

Each record supports: sector(s), risk level, jurisdiction, source type, reference number,
filed date, why it matters, affected sectors, **status**, **verification status**, and an
open-brief link. The two status fields use fixed, distinct vocabularies:

- **Status** (event lifecycle): `Developing` / `Active` / `Closed`
- **Verification** (trust in the record): `Verified` / `Source-confirmed` / `Unverified`

On mobile, cards show primary fields (category, risk, title, brief, why it matters) and
collapse the rest ("Record details"); jurisdiction always wraps and is never truncated.

## Pages

Home, Records desk (`/dashboard`), Nigeria Desk (`/nigeria`), Free Open Library
(`/library`), Methodology (`/methodology`), Briefings (`/briefing-desk`), Alerts
(`/alerts`), Access & business model (`/access-model`), Brief detail (`/brief/:ref`),
About, Contact.
