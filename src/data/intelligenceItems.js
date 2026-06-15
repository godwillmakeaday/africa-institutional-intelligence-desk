// =============================================================================
// Africa Institutional Intelligence Desk — Sample Data Layer
//
// EVERY record below is SAMPLE / DEMONSTRATION DATA.
// It is illustrative only. It is NOT real, current, or verified intelligence,
// and must not be relied upon for any legal, financial, or commercial decision.
// Replace this file with a verified data source before production use.
// =============================================================================

export const CATEGORIES = [
  "Law & Regulation",
  "Courts & Litigation",
  "Public Procurement",
  "Land & Property",
  "Tax & Revenue",
  "Trade & Customs",
  "Energy & Infrastructure",
  "Elections & Political Risk",
  "Corporate & CAC Signals",
  "Security & Governance",
  "Agriculture & Commodities",
  "Public Finance",
];

export const RISK_LEVELS = ["Low", "Medium", "High", "Strategic"];

export const STATUSES = ["Verified", "Monitoring", "Developing", "Archived"];

export const SOURCE_TYPES = [
  "Official Gazette",
  "Regulatory Circular",
  "Court List",
  "Procurement Portal",
  "Ministry Announcement",
  "Company Registry",
  "Budget Document",
  "Election Notice",
  "Trade Bulletin",
  "Field Monitoring",
];

export const COUNTRIES = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "Côte d'Ivoire",
  "Rwanda",
];

export const SECTORS = [
  "Banking & Finance",
  "Construction & Contracting",
  "Agriculture",
  "Energy & Power",
  "Telecoms",
  "Real Estate",
  "Logistics & Trade",
  "Extractives",
  "Public Sector",
  "Civil Society",
  "Manufacturing",
  "Legal Services",
];

// -----------------------------------------------------------------------------
// Nigeria-first layer. The platform is Nigeria-first and Africa-ready: the
// taxonomy, framework, and methodology are built to extend across African
// markets. The structures below define a MONITORING FRAMEWORK. They are a
// sample intelligence structure — live data sources are NOT yet connected.
// -----------------------------------------------------------------------------

// Nigerian states currently carried as sample structure (Africa-ready beyond).
export const NIGERIA_STATES = [
  "Lagos",
  "Abuja (FCT)",
  "Nasarawa",
  "Kano",
  "Rivers",
  "Kaduna",
  "Plateau",
  "Ogun",
];

// The ten Nigeria Desk intelligence areas. Each maps to a dashboard category.
// Coverage is a monitoring framework; data sources are to be connected.
export const nigeriaDeskAreas = [
  {
    name: "Federal Regulation Watch",
    category: "Law & Regulation",
    blurb:
      "Tracks circulars, directives, and instruments from federal regulators and central authorities — keyed to the compliance deadline rather than the publication date.",
  },
  {
    name: "State Government Tracker",
    category: "Public Finance",
    blurb:
      "Follows budgets, appropriations, executive orders, and programme launches across Nigerian states, where much consequential activity is decided sub-nationally.",
  },
  {
    name: "Court & Litigation Signals",
    category: "Courts & Litigation",
    blurb:
      "Reads cause lists and hearing schedules as early indicators of contested, consequential matters before any judgment is reported.",
  },
  {
    name: "CAC & Corporate Registry Signals",
    category: "Corporate & CAC Signals",
    blurb:
      "Surfaces incorporations, director and shareholding changes, and clustering patterns that support counterparty due diligence.",
  },
  {
    name: "Procurement & Public Finance Watch",
    category: "Public Procurement",
    blurb:
      "Tracks tenders, re-tenders, awards, and budget movements, with attention to delivery-risk signals such as repeated re-tendering.",
  },
  {
    name: "Land & Property Notice Desk",
    category: "Land & Property",
    blurb:
      "Monitors allocation, revocation, acquisition, and compensation notices that can create, cloud, or extinguish rights within short statutory windows.",
  },
  {
    name: "Tax & Revenue Monitor",
    category: "Tax & Revenue",
    blurb:
      "Follows tax-administration changes — filing, references, rates, and procedures — at federal and state levels, distinguishing deadlines from announcements.",
  },
  {
    name: "Customs & Trade Corridor Watch",
    category: "Trade & Customs",
    blurb:
      "Watches tariff and classification changes alongside corridor and border conditions that move landed cost and transit risk.",
  },
  {
    name: "Election & Political Risk Monitor",
    category: "Elections & Political Risk",
    blurb:
      "Structures monitoring of electoral process, delimitation, and political-risk signals that shape the operating environment.",
  },
  {
    name: "Security & Governance Signals",
    category: "Security & Governance",
    blurb:
      "Tracks advisories and governance signals affecting movement, scheduling, and institutional continuity across corridors and jurisdictions.",
  },
];

export const intelligenceItems = [
  {
    id: "AIID-2026-0142",
    title:
      "Nasarawa State gazettes revised Land Use Charge schedule for commercial corridors",
    slug: "nasarawa-land-use-charge-revision",
    category: "Land & Property",
    country: "Nigeria",
    region: "Nasarawa State",
    jurisdiction: "Nasarawa State (sub-national)",
    sourceType: "Official Gazette",
    date: "2026-06-09",
    riskLevel: "Medium",
    status: "Verified",
    summary:
      "A revised Land Use Charge schedule reclassifies several commercial corridors in Lafia and Karu into higher valuation bands, with phased commencement over two assessment cycles.",
    whyItMatters:
      "Reclassification changes the carrying cost of commercial property and alters the after-tax economics of holding or developing along the affected corridors. Occupiers on multi-year leases may face pass-through clauses.",
    affectedSectors: ["Real Estate", "Construction & Contracting", "Banking & Finance"],
    recommendedAction:
      "Review lease pass-through and tax-gross-up clauses on affected corridors. Confirm the gazetted commencement date and band assignment against the official schedule before re-pricing.",
    sourceNote:
      "Reconstructed from a sub-national gazette pattern for demonstration. Verify against the official Nasarawa State Gazette before reliance.",
    confidenceLevel: "Moderate",
    tags: ["land use charge", "valuation", "sub-national tax", "lafia"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0138",
    title:
      "Central bank circular tightens documentation for non-resident naira accounts",
    slug: "cbn-non-resident-naira-documentation",
    category: "Law & Regulation",
    country: "Nigeria",
    region: "Federal",
    jurisdiction: "Federal Republic of Nigeria",
    sourceType: "Regulatory Circular",
    date: "2026-06-07",
    riskLevel: "High",
    status: "Monitoring",
    summary:
      "A regulatory circular introduces enhanced source-of-funds and beneficial-ownership documentation for non-resident naira accounts, with a compliance window before enforcement.",
    whyItMatters:
      "Tighter documentation raises the onboarding burden for diaspora and offshore counterparties and can stall settlement on cross-border transactions during the transition window.",
    affectedSectors: ["Banking & Finance", "Logistics & Trade", "Legal Services"],
    recommendedAction:
      "Map affected account relationships, brief compliance teams on the documentation delta, and confirm the enforcement date. Treat the compliance window as the binding deadline, not the publication date.",
    sourceNote:
      "Illustrative of a central-bank circular pattern. Not a real circular. Confirm against the issuing authority's official bulletin.",
    confidenceLevel: "Moderate",
    tags: ["central bank", "kyc", "beneficial ownership", "cross-border"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0131",
    title:
      "Appellate panel reserves judgment in disputed state revenue-sharing suit",
    slug: "appellate-revenue-sharing-judgment-reserved",
    category: "Courts & Litigation",
    country: "Nigeria",
    region: "Federal",
    jurisdiction: "Court of Appeal (illustrative)",
    sourceType: "Court List",
    date: "2026-06-05",
    riskLevel: "Strategic",
    status: "Developing",
    summary:
      "An appellate panel has reserved judgment in a dispute over the formula for sharing a category of internally generated revenue between a state and its local governments.",
    whyItMatters:
      "The eventual ruling could reset the fiscal relationship between sub-national tiers and influence how similar revenue streams are claimed elsewhere. The reserved-judgment posture signals a contested, consequential outcome.",
    affectedSectors: ["Public Sector", "Banking & Finance", "Civil Society"],
    recommendedAction:
      "Flag the suit for outcome-watch. Prepare contingency analysis for both directions of the ruling. Do not treat any single commentary as the holding until the certified judgment is delivered.",
    sourceNote:
      "Composite court-list scenario for demonstration. No real parties or judgment are referenced. Track the official cause list for the actual position.",
    confidenceLevel: "Indicative",
    tags: ["revenue sharing", "appellate", "fiscal federalism", "reserved judgment"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0127",
    title:
      "Federal ministry republishes a stalled road contract for re-tender",
    slug: "ministry-road-contract-retender",
    category: "Public Procurement",
    country: "Nigeria",
    region: "Federal",
    jurisdiction: "Federal Republic of Nigeria",
    sourceType: "Procurement Portal",
    date: "2026-06-04",
    riskLevel: "Medium",
    status: "Verified",
    summary:
      "A previously awarded road rehabilitation contract has been republished for re-tender after the original engagement lapsed, with a revised scope and shortened bid window.",
    whyItMatters:
      "Re-tenders signal delivery risk on the original award and open a procurement window for new bidders, but the shortened timeline favours firms with pre-positioned documentation and bonding capacity.",
    affectedSectors: ["Construction & Contracting", "Logistics & Trade", "Public Sector"],
    recommendedAction:
      "Confirm the revised scope, bid-security requirement, and submission deadline directly from the procurement portal. Assess whether the shortened window is achievable before committing bid costs.",
    sourceNote:
      "Representative procurement-notice pattern for demonstration. Verify the live notice on the official procurement portal.",
    confidenceLevel: "Moderate",
    tags: ["re-tender", "infrastructure", "bid window", "public works"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0119",
    title:
      "Revenue authority signals shift to digital filing for a category of excise returns",
    slug: "revenue-authority-digital-excise-filing",
    category: "Tax & Revenue",
    country: "Ghana",
    region: "National",
    jurisdiction: "Republic of Ghana",
    sourceType: "Ministry Announcement",
    date: "2026-05-30",
    riskLevel: "Medium",
    status: "Monitoring",
    summary:
      "A revenue authority announcement indicates that a category of excise returns will move to mandatory digital filing, with a parallel-run period before paper filing is retired.",
    whyItMatters:
      "Mandatory digital filing changes compliance workflows and creates penalty exposure for firms that miss the cut-over. The parallel-run period is the practical migration window.",
    affectedSectors: ["Manufacturing", "Logistics & Trade", "Legal Services"],
    recommendedAction:
      "Confirm which return categories are in scope and the cut-over date. Test the digital filing path during the parallel run rather than at the deadline.",
    sourceNote:
      "Illustrative tax-administration scenario. Not an actual notice. Confirm scope and dates with the relevant revenue authority.",
    confidenceLevel: "Moderate",
    tags: ["excise", "digital filing", "tax administration", "compliance"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0114",
    title:
      "Customs bulletin revises classification for a band of imported components",
    slug: "customs-classification-revision-components",
    category: "Trade & Customs",
    country: "Kenya",
    region: "National",
    jurisdiction: "Republic of Kenya",
    sourceType: "Trade Bulletin",
    date: "2026-05-28",
    riskLevel: "High",
    status: "Developing",
    summary:
      "A customs bulletin reclassifies a band of imported industrial components under a different tariff heading, changing the applicable duty rate and documentation requirements.",
    whyItMatters:
      "Tariff reclassification directly changes landed cost and can trigger retrospective assessment disputes on goods already in transit or in bonded storage.",
    affectedSectors: ["Manufacturing", "Logistics & Trade", "Extractives"],
    recommendedAction:
      "Re-run landed-cost models on affected headings, review in-transit exposure, and obtain a binding classification ruling where the heading is ambiguous.",
    sourceNote:
      "Composite customs scenario for demonstration. Verify the heading and effective date against the official customs bulletin.",
    confidenceLevel: "Indicative",
    tags: ["tariff", "classification", "landed cost", "customs"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0108",
    title:
      "Regulator opens consultation on grid-connection rules for embedded generation",
    slug: "grid-connection-embedded-generation-consultation",
    category: "Energy & Infrastructure",
    country: "Nigeria",
    region: "Federal",
    jurisdiction: "Federal Republic of Nigeria",
    sourceType: "Regulatory Circular",
    date: "2026-05-24",
    riskLevel: "Medium",
    status: "Monitoring",
    summary:
      "An energy regulator has opened a public consultation on revised grid-connection rules for embedded and captive generation, with a defined window for written submissions.",
    whyItMatters:
      "The consultation outcome will shape connection economics for industrial and commercial self-generation. Early submissions can influence the final rule; the window is the only formal point of input.",
    affectedSectors: ["Energy & Power", "Manufacturing", "Real Estate"],
    recommendedAction:
      "Decide whether to make a written submission, and prepare it before the window closes. Model both the current and proposed connection regimes for affected sites.",
    sourceNote:
      "Representative consultation pattern for demonstration. Confirm the live consultation and submission deadline with the regulator.",
    confidenceLevel: "Moderate",
    tags: ["embedded generation", "grid connection", "consultation", "power"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0103",
    title:
      "Electoral body publishes revised constituency delimitation timetable",
    slug: "electoral-delimitation-timetable",
    category: "Elections & Political Risk",
    country: "Nigeria",
    region: "Federal",
    jurisdiction: "Federal Republic of Nigeria",
    sourceType: "Election Notice",
    date: "2026-05-20",
    riskLevel: "Strategic",
    status: "Developing",
    summary:
      "An electoral body has published a revised timetable for a constituency delimitation exercise, with stakeholder engagement phases ahead of any boundary changes.",
    whyItMatters:
      "Delimitation can reshape political representation and the operating environment for organisations whose work is geographically organised. The engagement phases set the windows for formal stakeholder input.",
    affectedSectors: ["Public Sector", "Civil Society", "Legal Services"],
    recommendedAction:
      "Map the engagement phases against your areas of operation and decide where formal participation is warranted. Treat the published timetable as provisional until confirmed.",
    sourceNote:
      "Illustrative electoral-administration scenario. Not a real timetable. Confirm against the official electoral notice.",
    confidenceLevel: "Indicative",
    tags: ["delimitation", "electoral process", "representation", "stakeholder"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0098",
    title:
      "Registry flags a wave of director changes across dormant special-purpose entities",
    slug: "registry-director-changes-spv-wave",
    category: "Corporate & CAC Signals",
    country: "Nigeria",
    region: "Federal",
    jurisdiction: "Corporate registry (illustrative)",
    sourceType: "Company Registry",
    date: "2026-05-18",
    riskLevel: "Medium",
    status: "Monitoring",
    summary:
      "A pattern of director and shareholding changes has been observed across a cluster of previously dormant special-purpose entities filed within a short window.",
    whyItMatters:
      "Clustered reactivation of dormant entities can precede bidding activity, asset transfers, or related-party arrangements. The pattern is a counterparty due-diligence signal rather than a conclusion.",
    affectedSectors: ["Banking & Finance", "Legal Services", "Construction & Contracting"],
    recommendedAction:
      "Run counterparty checks where any reactivated entity appears in a transaction. Treat clustering as a prompt for diligence, not as evidence of wrongdoing.",
    sourceNote:
      "Synthetic registry-pattern example for demonstration. Verify any specific entity through the official company registry.",
    confidenceLevel: "Indicative",
    tags: ["registry", "spv", "due diligence", "beneficial ownership"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0091",
    title:
      "State security advisory updates movement guidance on a trade-route segment",
    slug: "security-advisory-trade-route-segment",
    category: "Security & Governance",
    country: "Nigeria",
    region: "North Central",
    jurisdiction: "Sub-national advisory (illustrative)",
    sourceType: "Field Monitoring",
    date: "2026-05-15",
    riskLevel: "High",
    status: "Developing",
    summary:
      "An updated advisory revises movement and convoy guidance on a segment of a regional trade route, citing changed conditions along the corridor.",
    whyItMatters:
      "Movement guidance changes affect haulage scheduling, insurance terms, and delivery commitments for goods moving along the corridor. Advisories can change quickly and should be re-checked before dispatch.",
    affectedSectors: ["Logistics & Trade", "Agriculture", "Construction & Contracting"],
    recommendedAction:
      "Re-check the advisory immediately before dispatch, review insurance and force-majeure terms, and build schedule contingency for the affected segment.",
    sourceNote:
      "Illustrative advisory pattern for demonstration. Not a real advisory. Confirm current guidance through official channels before acting.",
    confidenceLevel: "Indicative",
    tags: ["corridor", "movement guidance", "haulage", "advisory"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0085",
    title:
      "Commodity board signals revised grading standard for a major export crop",
    slug: "commodity-board-grading-standard-revision",
    category: "Agriculture & Commodities",
    country: "Côte d'Ivoire",
    region: "National",
    jurisdiction: "République de Côte d'Ivoire",
    sourceType: "Ministry Announcement",
    date: "2026-05-12",
    riskLevel: "Medium",
    status: "Monitoring",
    summary:
      "A commodity board has signalled a revised grading standard for a major export crop, with an adjustment period before the new standard governs procurement.",
    whyItMatters:
      "Grading changes affect farm-gate pricing, aggregator margins, and export documentation. The adjustment period is the practical window to align procurement and quality-control processes.",
    affectedSectors: ["Agriculture", "Logistics & Trade", "Manufacturing"],
    recommendedAction:
      "Confirm the new grading thresholds and adjustment period, and align procurement and QC protocols before the standard becomes binding.",
    sourceNote:
      "Representative commodity-administration scenario. Verify grading details with the relevant board before reliance.",
    confidenceLevel: "Moderate",
    tags: ["grading", "export crop", "procurement", "quality control"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0079",
    title:
      "Sub-national budget reallocates capital lines toward a water-infrastructure programme",
    slug: "subnational-budget-water-infrastructure-reallocation",
    category: "Public Finance",
    country: "Nigeria",
    region: "Nasarawa State",
    jurisdiction: "Nasarawa State (sub-national)",
    sourceType: "Budget Document",
    date: "2026-05-08",
    riskLevel: "Low",
    status: "Verified",
    summary:
      "A supplementary appropriation reallocates capital lines toward a water-infrastructure programme, shifting the near-term project pipeline within the state.",
    whyItMatters:
      "Budget reallocations are early indicators of where public capital and procurement activity will concentrate. They precede the formal tenders that follow appropriation.",
    affectedSectors: ["Construction & Contracting", "Public Sector", "Real Estate"],
    recommendedAction:
      "Track the reallocated lines into the procurement pipeline and position documentation early. Confirm the appropriation against the official budget document.",
    sourceNote:
      "Illustrative appropriation pattern for demonstration. Verify figures against the official budget document.",
    confidenceLevel: "Moderate",
    tags: ["appropriation", "capital budget", "water", "pipeline"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0072",
    title:
      "Competition authority opens market inquiry into a logistics segment",
    slug: "competition-authority-logistics-market-inquiry",
    category: "Law & Regulation",
    country: "South Africa",
    region: "National",
    jurisdiction: "Republic of South Africa",
    sourceType: "Regulatory Circular",
    date: "2026-05-04",
    riskLevel: "High",
    status: "Developing",
    summary:
      "A competition authority has opened a market inquiry into pricing and access conditions within a logistics segment, inviting submissions from affected participants.",
    whyItMatters:
      "Market inquiries can lead to behavioural or structural remedies that reshape a segment. Participation in the inquiry is the formal channel to put a position on the record.",
    affectedSectors: ["Logistics & Trade", "Manufacturing", "Legal Services"],
    recommendedAction:
      "Assess exposure to the inquiry's terms of reference and decide whether to make a submission. Preserve relevant records in anticipation of information requests.",
    sourceNote:
      "Composite competition-inquiry scenario for demonstration. Confirm the live inquiry and its terms with the authority.",
    confidenceLevel: "Indicative",
    tags: ["competition", "market inquiry", "remedies", "logistics"],
    isSampleData: true,
  },
  {
    id: "AIID-2026-0066",
    title:
      "Lands bureau publishes a notice of revocation over a disputed allocation block",
    slug: "lands-bureau-revocation-disputed-block",
    category: "Land & Property",
    country: "Rwanda",
    region: "National",
    jurisdiction: "Republic of Rwanda",
    sourceType: "Official Gazette",
    date: "2026-04-29",
    riskLevel: "Strategic",
    status: "Monitoring",
    summary:
      "A lands bureau has published a notice of revocation affecting a block of allocations described as disputed, with a stated period for affected parties to respond.",
    whyItMatters:
      "Revocation notices can extinguish or cloud title and trigger compensation and litigation processes. The response period is the window within which affected parties can formally object.",
    affectedSectors: ["Real Estate", "Banking & Finance", "Legal Services"],
    recommendedAction:
      "Determine whether any holding falls within the affected block, preserve title documents, and observe the response period if an objection is warranted.",
    sourceNote:
      "Illustrative revocation-notice pattern for demonstration. Verify against the official gazette before any reliance.",
    confidenceLevel: "Indicative",
    tags: ["revocation", "title", "allocation", "land dispute"],
    isSampleData: true,
  },

  // ---- Nigeria Desk · state-level demonstration briefs ----------------------
  // Sample intelligence structure. Demonstration briefs only.
  // Data source to be connected.
  {
    id: "AIID-NG-2026-0048",
    title:
      "Lagos signals phased rollout of a unified digital tax-payment reference",
    slug: "lagos-unified-tax-payment-reference",
    category: "Tax & Revenue",
    country: "Nigeria",
    region: "Lagos State",
    state: "Lagos",
    jurisdiction: "Lagos State (sub-national)",
    sourceType: "Ministry Announcement",
    date: "2026-06-11",
    riskLevel: "Medium",
    status: "Monitoring",
    desk: "Nigeria",
    summary:
      "Demonstration brief: Lagos State signals a phased rollout of a unified digital tax-payment reference across selected revenue lines, with a transition period before manual references are retired.",
    whyItMatters:
      "A single payment reference changes reconciliation and compliance workflows for businesses operating across multiple Lagos revenue lines. The transition period is the practical migration window.",
    affectedSectors: ["Banking & Finance", "Real Estate", "Manufacturing"],
    recommendedAction:
      "Confirm which revenue lines are in scope and the transition window. Test the unified reference path before manual references are retired.",
    sourceNote:
      "Sample intelligence structure for the Lagos desk. Demonstration brief only — data source to be connected.",
    confidenceLevel: "Indicative",
    tags: ["lagos", "tax reference", "revenue", "digital filing"],
    isSampleData: true,
  },
  {
    id: "AIID-NG-2026-0046",
    title:
      "FCT land administration signals revised documentation for title regularization",
    slug: "fct-title-regularization-documentation",
    category: "Land & Property",
    country: "Nigeria",
    region: "Abuja (FCT)",
    state: "Abuja (FCT)",
    jurisdiction: "Federal Capital Territory (sub-national)",
    sourceType: "Official Gazette",
    date: "2026-06-10",
    riskLevel: "High",
    status: "Developing",
    desk: "Nigeria",
    summary:
      "Demonstration brief: FCT land administration signals revised documentation requirements for a title-regularization exercise, with a stated window for affected holders to respond.",
    whyItMatters:
      "Documentation changes affect the security and bankability of FCT titles. The response window is the formal period within which affected holders can act.",
    affectedSectors: ["Real Estate", "Banking & Finance", "Legal Services"],
    recommendedAction:
      "Determine whether any holding falls within scope, preserve title documents, and observe the response window if action is warranted.",
    sourceNote:
      "Sample intelligence structure for the Abuja (FCT) desk. Demonstration brief only — data source to be connected.",
    confidenceLevel: "Indicative",
    tags: ["fct", "title regularization", "land", "certificate of occupancy"],
    isSampleData: true,
  },
  {
    id: "AIID-NG-2026-0043",
    title:
      "Nasarawa publishes a demonstration tender batch for rural feeder roads",
    slug: "nasarawa-feeder-roads-tender-batch",
    category: "Public Procurement",
    country: "Nigeria",
    region: "Nasarawa State",
    state: "Nasarawa",
    jurisdiction: "Nasarawa State (sub-national)",
    sourceType: "Procurement Portal",
    date: "2026-06-08",
    riskLevel: "Medium",
    status: "Monitoring",
    desk: "Nigeria",
    summary:
      "Demonstration brief: a batch of rural feeder-road tenders is published with a defined bid window, illustrating how the Nasarawa procurement stream would be tracked.",
    whyItMatters:
      "Feeder-road tenders concentrate contractor activity. The bid window favours firms with pre-positioned documentation and bonding capacity.",
    affectedSectors: ["Construction & Contracting", "Logistics & Trade", "Public Sector"],
    recommendedAction:
      "Confirm the scope, bid-security requirement, and submission deadline directly from the procurement portal before committing bid costs.",
    sourceNote:
      "Sample intelligence structure for the Nasarawa desk. Demonstration brief only — data source to be connected.",
    confidenceLevel: "Indicative",
    tags: ["nasarawa", "feeder roads", "tender", "procurement"],
    isSampleData: true,
  },
  {
    id: "AIID-NG-2026-0041",
    title:
      "Kano trade-corridor brief illustrates monitoring of a major commodity route",
    slug: "kano-trade-corridor-monitoring",
    category: "Trade & Customs",
    country: "Nigeria",
    region: "Kano State",
    state: "Kano",
    jurisdiction: "Kano State (sub-national)",
    sourceType: "Trade Bulletin",
    date: "2026-06-06",
    riskLevel: "Medium",
    status: "Monitoring",
    desk: "Nigeria",
    summary:
      "Demonstration brief: a sample structure for tracking movement, levies, and conditions along a major commodity corridor running through the Kano trade hub.",
    whyItMatters:
      "Corridor conditions affect haulage cost and scheduling for goods moving through Kano. Conditions can change quickly and should be re-checked before dispatch.",
    affectedSectors: ["Logistics & Trade", "Agriculture", "Manufacturing"],
    recommendedAction:
      "Re-check corridor conditions before dispatch and review haulage and insurance terms for the affected route.",
    sourceNote:
      "Sample intelligence structure for the Kano desk. Demonstration brief only — data source to be connected.",
    confidenceLevel: "Indicative",
    tags: ["kano", "trade corridor", "haulage", "commodities"],
    isSampleData: true,
  },
  {
    id: "AIID-NG-2026-0039",
    title:
      "Rivers infrastructure brief tracks a power and access programme around Port Harcourt",
    slug: "rivers-power-access-programme",
    category: "Energy & Infrastructure",
    country: "Nigeria",
    region: "Rivers State",
    state: "Rivers",
    jurisdiction: "Rivers State (sub-national)",
    sourceType: "Budget Document",
    date: "2026-06-03",
    riskLevel: "Medium",
    status: "Monitoring",
    desk: "Nigeria",
    summary:
      "Demonstration brief: a sample structure for tracking capital allocations to power and access infrastructure around Port Harcourt across an appropriation cycle.",
    whyItMatters:
      "Capital allocations are leading indicators of the procurement and project activity that follows appropriation.",
    affectedSectors: ["Energy & Power", "Construction & Contracting", "Logistics & Trade"],
    recommendedAction:
      "Track allocated lines into the procurement pipeline and position documentation early. Confirm figures against the official budget document.",
    sourceNote:
      "Sample intelligence structure for the Rivers desk. Demonstration brief only — data source to be connected.",
    confidenceLevel: "Indicative",
    tags: ["rivers", "port harcourt", "power", "infrastructure"],
    isSampleData: true,
  },
  {
    id: "AIID-NG-2026-0037",
    title:
      "Kaduna governance brief illustrates structured monitoring of movement advisories",
    slug: "kaduna-movement-advisory-monitoring",
    category: "Security & Governance",
    country: "Nigeria",
    region: "Kaduna State",
    state: "Kaduna",
    jurisdiction: "Kaduna State (sub-national)",
    sourceType: "Field Monitoring",
    date: "2026-06-01",
    riskLevel: "High",
    status: "Developing",
    desk: "Nigeria",
    summary:
      "Demonstration brief: a sample structure for tracking movement advisories and governance signals across selected Kaduna corridors.",
    whyItMatters:
      "Advisory changes affect haulage scheduling, insurance terms, and delivery commitments along affected corridors. Advisories can change quickly and should be re-checked before dispatch.",
    affectedSectors: ["Logistics & Trade", "Agriculture", "Public Sector"],
    recommendedAction:
      "Re-check advisories immediately before dispatch, and review insurance and force-majeure terms for the affected corridor.",
    sourceNote:
      "Sample intelligence structure for the Kaduna desk. Demonstration brief only — data source to be connected.",
    confidenceLevel: "Indicative",
    tags: ["kaduna", "advisory", "movement", "governance"],
    isSampleData: true,
  },
  {
    id: "AIID-NG-2026-0034",
    title:
      "Plateau commodities brief tracks a highland grading and aggregation pilot",
    slug: "plateau-grading-aggregation-pilot",
    category: "Agriculture & Commodities",
    country: "Nigeria",
    region: "Plateau State",
    state: "Plateau",
    jurisdiction: "Plateau State (sub-national)",
    sourceType: "Ministry Announcement",
    date: "2026-05-27",
    riskLevel: "Low",
    status: "Monitoring",
    desk: "Nigeria",
    summary:
      "Demonstration brief: a sample structure for tracking a grading and aggregation pilot for highland produce in Plateau, with an adjustment period before standards govern procurement.",
    whyItMatters:
      "Grading and aggregation changes affect farm-gate pricing and aggregator margins. The adjustment period is the practical window to align procurement and quality control.",
    affectedSectors: ["Agriculture", "Logistics & Trade", "Manufacturing"],
    recommendedAction:
      "Confirm the grading thresholds and pilot scope, and align procurement and quality-control protocols before standards become binding.",
    sourceNote:
      "Sample intelligence structure for the Plateau desk. Demonstration brief only — data source to be connected.",
    confidenceLevel: "Indicative",
    tags: ["plateau", "grading", "aggregation", "produce"],
    isSampleData: true,
  },
  {
    id: "AIID-NG-2026-0031",
    title:
      "Ogun corporate brief illustrates registry-signal tracking across industrial estates",
    slug: "ogun-registry-signal-tracking",
    category: "Corporate & CAC Signals",
    country: "Nigeria",
    region: "Ogun State",
    state: "Ogun",
    jurisdiction: "Ogun State (sub-national)",
    sourceType: "Company Registry",
    date: "2026-05-23",
    riskLevel: "Medium",
    status: "Monitoring",
    desk: "Nigeria",
    summary:
      "Demonstration brief: a sample structure for tracking incorporations and director changes across Ogun's industrial estates as a counterparty due-diligence signal.",
    whyItMatters:
      "Registry movements support counterparty diligence and surface clustering patterns in industrial activity. Clustering is a prompt for diligence, not a conclusion.",
    affectedSectors: ["Manufacturing", "Banking & Finance", "Legal Services"],
    recommendedAction:
      "Run counterparty checks where any reactivated or newly registered entity appears in a transaction. Treat clustering as a prompt, not as evidence of wrongdoing.",
    sourceNote:
      "Sample intelligence structure for the Ogun desk. Demonstration brief only — data source to be connected.",
    confidenceLevel: "Indicative",
    tags: ["ogun", "industrial estates", "registry", "due diligence"],
    isSampleData: true,
  },
];

// ------- Open Intelligence Library (public-data inventory) --------------------
export const libraryCards = [
  {
    name: "Gazettes",
    contains:
      "Officially published government notices: appointments, instruments, revocations, commencement dates, and statutory orders.",
    whyItMatters:
      "The gazette is the authoritative record of when many official acts take legal effect. Commencement dates often differ from announcement dates.",
    usedBy: "Lawyers, compliance teams, researchers, journalists.",
    availability: "Manual tracking",
  },
  {
    name: "Court Lists",
    contains:
      "Cause lists and hearing schedules indicating which matters are listed, before which court, and on what date.",
    whyItMatters:
      "Cause lists are an early signal of contested or consequential litigation before any judgment is reported.",
    usedBy: "Litigators, risk analysts, financial counterparties.",
    availability: "Manual tracking",
  },
  {
    name: "Regulatory Circulars",
    contains:
      "Directives, guidelines, and circulars issued by sector regulators and central authorities.",
    whyItMatters:
      "Circulars frequently carry the operative compliance deadline, which is distinct from the publication date.",
    usedBy: "Banks, regulated firms, legal advisers.",
    availability: "Open",
  },
  {
    name: "Procurement Notices",
    contains:
      "Tender invitations, re-tenders, award notices, and contract publications across public bodies.",
    whyItMatters:
      "Procurement notices reveal where public capital is moving and where delivery risk is surfacing through re-tenders.",
    usedBy: "Contractors, NGOs, investigators, analysts.",
    availability: "Open",
  },
  {
    name: "State Budgets",
    contains:
      "Appropriation acts, supplementary budgets, and capital-line allocations at national and sub-national levels.",
    whyItMatters:
      "Budgets are leading indicators of the procurement and project pipeline that follows appropriation.",
    usedBy: "Contractors, civic groups, researchers.",
    availability: "Open",
  },
  {
    name: "Election Notices",
    contains:
      "Timetables, delimitation notices, accreditation rules, and procedural publications from electoral bodies.",
    whyItMatters:
      "Electoral process changes shape political risk and the operating environment for geographically organised institutions.",
    usedBy: "Political consultants, civic organisations, researchers.",
    availability: "Open",
  },
  {
    name: "Land Notices",
    contains:
      "Allocation, revocation, acquisition, and compensation notices published by lands authorities.",
    whyItMatters:
      "Land notices can create, cloud, or extinguish rights, often within short statutory response windows.",
    usedBy: "Developers, lenders, lawyers, communities.",
    availability: "Manual tracking",
  },
  {
    name: "Company Registry Changes",
    contains:
      "Incorporations, director and shareholding changes, charges, and status updates on registered entities.",
    whyItMatters:
      "Registry movements support counterparty diligence and surface patterns such as clustered reactivation of dormant entities.",
    usedBy: "Lenders, lawyers, investigators, compliance teams.",
    availability: "Restricted",
  },
  {
    name: "Ministry Announcements",
    contains:
      "Policy statements, programme launches, standard revisions, and consultations from line ministries.",
    whyItMatters:
      "Ministry announcements often precede the formal instruments that follow, giving early notice of direction.",
    usedBy: "Investors, sector firms, civil society.",
    availability: "Open",
  },
  {
    name: "Trade Rules",
    contains:
      "Tariff schedules, classification bulletins, customs procedures, and corridor and border updates.",
    whyItMatters:
      "Trade-rule changes move landed cost and create transit and reclassification exposure for goods in motion.",
    usedBy: "Importers, manufacturers, logistics operators.",
    availability: "Restricted",
  },
];

// ------- Premium Briefing Desk packages --------------------------------------
export const packages = [
  {
    code: "A",
    name: "Weekly Institutional Brief",
    for: "Law firms, consultants, NGOs, journalists, and businesses.",
    covers:
      "A curated weekly synthesis of the most consequential institutional signals across your selected jurisdictions and categories.",
    deliverables: [
      "Weekly brief in a fixed, scannable format",
      "Risk-ranked signal list with why-it-matters notes",
      "Watch-list of developing items carried week to week",
    ],
    exampleOutput:
      "A five-page weekly brief covering twelve ranked signals, each with jurisdiction, risk level, and a recommended professional action.",
  },
  {
    code: "B",
    name: "Regulatory Risk Monitor",
    for: "Companies, investors, compliance teams, and chambers of commerce.",
    covers:
      "Continuous monitoring of regulatory and policy change in your sector, with alerts keyed to compliance deadlines rather than publication dates.",
    deliverables: [
      "Deadline-keyed regulatory alerts",
      "Quarterly regulatory-change digest",
      "Compliance-window calendar for tracked instruments",
    ],
    exampleOutput:
      "An alert distinguishing a circular's publication date from its enforcement date, with the binding compliance window flagged.",
  },
  {
    code: "C",
    name: "State Intelligence Desk",
    for: "Institutions monitoring one Nigerian state or African region.",
    covers:
      "A single-jurisdiction desk tracking gazettes, budgets, procurement, land notices, and political signals for one state or region.",
    deliverables: [
      "Jurisdiction-specific monitoring stream",
      "Monthly state intelligence digest",
      "Pipeline view linking budget lines to emerging tenders",
    ],
    exampleOutput:
      "A monthly digest tracing a supplementary appropriation through to the procurement notices that follow it.",
  },
  {
    code: "D",
    name: "Procurement & Public Finance Watch",
    for: "Contractors, NGOs, investigators, media, and analysts.",
    covers:
      "Tracking of tenders, re-tenders, awards, and budget movements, with attention to delivery-risk signals such as repeated re-tendering.",
    deliverables: [
      "Procurement-notice feed for selected bodies",
      "Re-tender and award pattern analysis",
      "Budget-to-tender pipeline mapping",
    ],
    exampleOutput:
      "A note flagging a republished contract as a re-tender, with the original award context and the revised bid window.",
  },
  {
    code: "E",
    name: "Political & Election Risk Monitor",
    for: "Political consultants, civic organisations, researchers, and institutional actors.",
    covers:
      "Structured monitoring of electoral process, delimitation, governance, and political-risk signals across selected jurisdictions.",
    deliverables: [
      "Electoral-process and political-risk alerts",
      "Scenario notes ahead of key dates",
      "Stakeholder-window calendar for formal input points",
    ],
    exampleOutput:
      "A scenario note mapping the engagement phases of a delimitation timetable against a client's areas of operation.",
  },
  {
    code: "F",
    name: "Custom Intelligence Report",
    for: "Clients needing deeper, bespoke research.",
    covers:
      "A commissioned report on a defined institutional question, built from public and lawfully available information with full source transparency.",
    deliverables: [
      "Scoped research question and methodology note",
      "Evidenced findings with source transparency",
      "Implications and recommended next steps",
    ],
    exampleOutput:
      "A report tracing the institutional history of a single policy change and its commercial implications for a defined sector.",
  },
];

// ------- Methodology steps ---------------------------------------------------
export const methodologySteps = [
  {
    n: "01",
    title: "Source Collection",
    body: "We gather public and lawfully available information: gazettes, court lists, regulatory circulars, procurement notices, budgets, registries, and ministry publications. We record where each item came from.",
  },
  {
    n: "02",
    title: "Verification",
    body: "Each item is checked against its originating source before classification. Where an item cannot be verified, it is labelled as developing or monitoring rather than presented as settled.",
  },
  {
    n: "03",
    title: "Classification",
    body: "Items are assigned a category, jurisdiction, and source type using a consistent taxonomy, so that comparable signals are organised in comparable ways.",
  },
  {
    n: "04",
    title: "Risk Labelling",
    body: "We assign a risk level — Low, Medium, High, or Strategic — reflecting potential institutional impact and consequence, not sentiment. The label is a prompt for attention, not a prediction.",
  },
  {
    n: "05",
    title: "Jurisdiction Mapping",
    body: "Each item is mapped to its country, region, and the level of authority involved, distinguishing federal, sub-national, and sectoral jurisdictions.",
  },
  {
    n: "06",
    title: "Professional Interpretation",
    body: "We summarise what happened, why it matters, who is affected, and what a professional might reasonably consider next — without substituting our judgement for qualified advice.",
  },
  {
    n: "07",
    title: "Update Frequency",
    body: "Developing items are revisited as their status changes. Verified items are dated, and archived items are retained for reference with their original status preserved.",
  },
  {
    n: "08",
    title: "Limitations",
    body: "Public information is incomplete, lagging, and sometimes contradictory. Our classification reflects available information at a point in time and may change as more becomes known.",
  },
  {
    n: "09",
    title: "Ethical Use",
    body: "We do not replace official government sources. We organise, classify, summarise, and interpret public information for professional awareness, with source transparency throughout.",
  },
];

// ------- Hero modules / category surfaces ------------------------------------
export const heroModules = [
  { label: "Regulation Watch", category: "Law & Regulation" },
  { label: "Court & Legal Signals", category: "Courts & Litigation" },
  { label: "Procurement & Public Finance", category: "Public Procurement" },
  { label: "Trade Corridor Intelligence", category: "Trade & Customs" },
  { label: "Political & Institutional Risk", category: "Elections & Political Risk" },
  { label: "Land & Property Notices", category: "Land & Property" },
];

// Helper to fetch a single item by slug
export function getItemBySlug(slug) {
  return intelligenceItems.find((it) => it.slug === slug);
}

// Helper to fetch related items (same category, excluding self)
export function getRelatedItems(item, limit = 3) {
  if (!item) return [];
  return intelligenceItems
    .filter((it) => it.slug !== item.slug && it.category === item.category)
    .slice(0, limit);
}

// True if an item belongs to the given Nigerian state. Tolerates items that
// carry the state in `state` or only encode it in `region` (e.g. "Lagos State").
export function matchesNigerianState(item, state) {
  if (!state) return true;
  return (
    item.state === state ||
    item.region === state ||
    item.region === `${state} State`
  );
}

// All Nigeria-desk demonstration briefs.
export const nigeriaDeskItems = intelligenceItems.filter(
  (it) => it.desk === "Nigeria"
);

// Count of demonstration briefs available per Nigerian state.
export const nigeriaStateCounts = NIGERIA_STATES.reduce((acc, st) => {
  acc[st] = intelligenceItems.filter((it) => matchesNigerianState(it, st)).length;
  return acc;
}, {});
