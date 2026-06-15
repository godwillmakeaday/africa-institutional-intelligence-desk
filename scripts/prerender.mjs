// Build-time prerender. Renders every route (and every /brief/:slug) to its own
// static HTML file with route-specific <title>, meta, OpenGraph, and — on brief
// pages — JSON-LD (Report schema). Also writes sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const { render, records, SITE_URL, BRAND } = await import(
  path.join(root, "dist-server", "entry-server.js")
);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const OG_IMAGE = `${SITE_URL}/og-image.svg`;

const PAGE_META = {
  "/": {
    title: `${BRAND.name} — source-mapped institutional signals`,
    desc: `${BRAND.name} organizes public-facing records, notices, gazettes, regulatory updates, procurement signals, land notices, court-adjacent information, and policy movements into structured briefs.`,
  },
  "/dashboard": {
    title: `The records desk — ${BRAND.name}`,
    desc: "Source-mapped, jurisdiction-mapped, risk-labelled and verification-labelled institutional records. Filter by jurisdiction, sector, risk, and status.",
  },
  "/nigeria": {
    title: `Nigeria Desk — ${BRAND.name}`,
    desc: "A Nigeria-first monitoring framework across ten intelligence areas and the states where consequential decisions are made.",
  },
  "/library": {
    title: `Free Open Library — ${BRAND.name}`,
    desc: "Public links, source maps, and explainers. The public record kept open — we do not claim ownership over public information.",
  },
  "/methodology": {
    title: `Methodology — how a public record becomes a brief — ${BRAND.name}`,
    desc: "The disciplined process from source identification through classification, jurisdiction mapping, risk labelling, verification, and human review.",
  },
  "/briefing-desk": {
    title: `Professional Briefings — ${BRAND.name}`,
    desc: "Weekly and monthly institutional briefings for lawyers, NGOs, investors, companies, journalists, and consultants.",
  },
  "/alerts": {
    title: `Alerts & Monitoring — ${BRAND.name}`,
    desc: "Monitoring of regulatory changes, court signals, procurement notices, land notices, policy updates, and political-risk events — keyed to deadlines.",
  },
  "/access-model": {
    title: `Access & business model — ${BRAND.name}`,
    desc: "How the platform operates: what stays free, and what requires professional work. We do not claim ownership over public information.",
  },
  "/about": {
    title: `About — ${BRAND.name}`,
    desc: "A source-mapped institutional signals platform for the under-indexed institutional realities of the Global South. Nigeria-first, Africa-ready.",
  },
  "/contact": {
    title: `Contact — ${BRAND.name}`,
    desc: "Bring a question, a jurisdiction, or a brief to the desk.",
  },
};

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function headFor(route, record) {
  const meta = record
    ? { title: `${record.title} — ${BRAND.name}`, desc: record.summary }
    : PAGE_META[route] || PAGE_META["/"];
  const url = `${SITE_URL}${route === "/" ? "" : route}`;
  const ogType = record ? "article" : "website";

  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.desc)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="${esc(BRAND.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.desc)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(OG_IMAGE)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.desc)}" />`,
    `<meta name="twitter:image" content="${esc(OG_IMAGE)}" />`,
  ];

  if (record) {
    const ld = {
      "@context": "https://schema.org",
      "@type": "Report",
      headline: record.title,
      abstract: record.summary,
      identifier: record.id,
      datePublished: record.date,
      dateModified: record.date,
      url,
      inLanguage: "en",
      isAccessibleForFree: true,
      publisher: { "@type": "Organization", name: BRAND.name, url: SITE_URL },
      spatialCoverage: record.jurisdiction,
      about: record.affectedSectors,
      keywords: [
        ...record.tags,
        record.category,
        record.sourceType,
        `risk:${record.riskLevel}`,
        `status:${record.status}`,
        `verification:${record.verification}`,
      ].join(", "),
    };
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(ld)}</script>`
    );
  } else if (route === "/") {
    const ld = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: BRAND.name,
      url: SITE_URL,
      description: meta.desc,
    };
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(ld)}</script>`
    );
  }
  return tags.join("\n    ");
}

function pageHtml(route, record) {
  const appHtml = render(route);
  let html = template;
  // Strip default title + description so they are not duplicated.
  html = html.replace(/<title>[\s\S]*?<\/title>\s*/, "");
  html = html.replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, "");
  // Inject route head before </head> and the app markup into #root.
  html = html.replace("</head>", `    ${headFor(route, record)}\n  </head>`);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  return html;
}

function writeRoute(route, record) {
  const html = pageHtml(route, record);
  const outPath =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route, "index.html");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  return route;
}

const staticRoutes = Object.keys(PAGE_META);
const briefRoutes = records.map((r) => `/brief/${r.slug}`);

const written = [];
for (const route of staticRoutes) written.push(writeRoute(route, null));
for (const r of records) written.push(writeRoute(`/brief/${r.slug}`, r));

// Sitemap
const today = new Date().toISOString().slice(0, 10);
const urls = [
  ...staticRoutes.map((r) => ({ loc: r, lastmod: today })),
  ...records.map((r) => ({ loc: `/brief/${r.slug}`, lastmod: r.date })),
];
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) =>
        `  <url><loc>${SITE_URL}${u.loc === "/" ? "" : u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`
    )
    .join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);

console.log(
  `Prerendered ${written.length} pages (${staticRoutes.length} static + ${briefRoutes.length} briefs) + sitemap.xml`
);
