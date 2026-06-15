// -----------------------------------------------------------------------------
// Single source of truth for brand + launch flags.
// Flip DEMO_MODE to false at launch to remove all demonstration labelling.
// -----------------------------------------------------------------------------

export const DEMO_MODE = true;

export const DEMO_NOTICE = "Demonstration build. Sample records only.";

export const BRAND = {
  name: "Africa Record Desk",
  short: "Record Desk",
  monogram: "ARD",
  monogramTight: "RD",
  tagline: "A source-mapped institutional signals platform.",
  refPrefix: "ARD",
};

// Used for canonical URLs, OpenGraph, sitemap. Update to your production domain.
export const SITE_URL = "https://africa-record-desk.vercel.app";

export const COVERAGE = "Coverage — Nigeria, live · the continent, on the roadmap.";
