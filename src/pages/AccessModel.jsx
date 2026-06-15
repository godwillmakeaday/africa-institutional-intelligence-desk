import { Link } from "react-router-dom";
import { PageHeader, SectionLabel } from "../components/Layout.jsx";

const TIERS = {
  Open: "text-emerald-700/90 border-emerald-700/30 bg-emerald-700/[0.04]",
  Paid: "text-gold border-gold/40 bg-gold/[0.06]",
  Future: "text-slate-500 border-slate-300 bg-slate-400/[0.05]",
};

function TierBadge({ tier, label }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-wider2 ${TIERS[tier]}`}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {label}
    </span>
  );
}

const VALUE = [
  "Organizing scattered public information",
  "Mapping sources",
  "Classifying institutional signals",
  "Summarizing developments",
  "Adding jurisdiction and sector context",
  "Creating alerts and monitoring systems",
  "Producing professional briefings",
  "Building private dashboards",
  "Training professionals to interpret public records responsibly",
];

const LAYERS = [
  {
    n: "01",
    name: "Free Open Library",
    tier: "Open",
    tierLabel: "Free · Open access",
    summary:
      "Public links, source maps, explainers, and basic institutional literacy — kept free because the public record is not ours to sell.",
    forWhom: "Anyone seeking to locate or understand public institutional sources.",
    includes: [
      "Source maps to gazettes, court lists, registries, and portals",
      "Explainers on how to read each source type",
      "Open by commitment — we do not own public information",
    ],
    to: "/library",
    cta: "Open the library",
  },
  {
    n: "02",
    name: "Professional Briefings",
    tier: "Paid",
    tierLabel: "Professional service · Paid",
    summary:
      "Weekly or monthly reports synthesising the most consequential institutional signals across selected jurisdictions and categories.",
    forWhom: "Lawyers, NGOs, investors, companies, journalists, and consultants.",
    includes: [
      "A fixed, scannable briefing format",
      "Risk-ranked signals with why-it-matters notes",
      "A watch-list carried period to period",
    ],
    to: "/briefing-desk",
    cta: "See briefing packages",
  },
  {
    n: "03",
    name: "Custom Intelligence Reports",
    tier: "Paid",
    tierLabel: "Commissioned · Paid",
    summary:
      "Deep research on a sector, state, regulation, procurement environment, legal issue, or institutional risk, built from public and lawful sources.",
    forWhom: "Clients carrying a defined institutional question.",
    includes: [
      "A scoped research question and methodology note",
      "Evidenced findings with source transparency",
      "Implications and recommended next steps",
    ],
    to: "/contact?request=Custom%20report",
    cta: "Commission a report",
  },
  {
    n: "04",
    name: "Alerts and Monitoring",
    tier: "Paid",
    tierLabel: "Professional service · Paid",
    summary:
      "Monitoring of regulatory changes, court signals, procurement notices, land notices, policy updates, and political-risk events, keyed to deadlines rather than publication dates.",
    forWhom: "Compliance teams, investors, contractors, and institutional actors.",
    includes: [
      "Deadline-keyed alerts on tracked instruments",
      "A compliance-window calendar",
      "Developing-item monitoring across periods",
    ],
    to: "/contact?request=Intelligence%20briefing",
    cta: "Discuss monitoring",
  },
  {
    n: "05",
    name: "Institutional Dashboards",
    tier: "Paid",
    tierLabel: "Private engagement · Paid",
    summary:
      "Private dashboards for organizations monitoring specific jurisdictions or sectors, configured to the signals that matter to them.",
    forWhom: "Organizations with sustained, jurisdiction-specific monitoring needs.",
    includes: [
      "A configured view of selected jurisdictions and sectors",
      "Structured, classified signals in one place",
      "Engagement scoped to the organization's mandate",
    ],
    to: "/contact?request=Partnership",
    cta: "Scope a dashboard",
  },
  {
    n: "06",
    name: "API / Data Access",
    tier: "Future",
    tierLabel: "Planned · Future access",
    summary:
      "Structured access for developers, researchers, media houses, and professional firms — planned, and subject to lawful data-use rules and source restrictions.",
    forWhom: "Developers, researchers, media houses, and professional firms.",
    includes: [
      "Structured access to classified institutional signals",
      "Governed by lawful data-use rules and source restrictions",
      "Not yet available — registered interest only",
    ],
    to: "/contact?request=Partnership",
    cta: "Register interest",
  },
  {
    n: "07",
    name: "Training and Advisory",
    tier: "Paid",
    tierLabel: "Advisory · Paid",
    summary:
      "Training professionals to read public documents — gazettes, regulatory notices, procurement notices, court signals, and institutional changes — responsibly and confidently.",
    forWhom: "Firms, teams, and institutions building in-house institutional literacy.",
    includes: [
      "Structured training on reading public records",
      "Practical interpretation of notices and signals",
      "Advisory on building a monitoring discipline",
    ],
    to: "/contact?request=Other",
    cta: "Arrange training",
  },
];

const DO_NOT_SELL = [
  "We do not sell ownership of public information.",
  "We do not replace official sources.",
  "We do not guarantee that public records are complete.",
  "We do not provide legal, financial, investment, or political advice through the platform.",
];

export default function AccessModel() {
  return (
    <div>
      <PageHeader
        eyebrow="Access Model"
        title="How the platform operates — what stays free, and what requires professional work"
        intro="The public record belongs to the public. The platform earns its place by organizing, classifying, and interpreting that record — and by the professional services built on top of it. This page sets out, plainly, where the line between free and paid sits."
        meta={["Open layer kept free", "Professional services paid", "Source-transparent"]}
      />

      {/* Ownership */}
      <section className="border-b border-rule/15 bg-paper">
        <div className="desk-container py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel index="01">Ownership of public information</SectionLabel>
              <h2 className="mt-6 font-serif text-display-l font-semibold leading-tight text-ink">
                We do not claim ownership over public information.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-relaxed text-charcoal/80 lg:col-span-7">
              <p className="dropcap">
                Public documents, official notices, gazettes, court lists, regulations, and
                government publications remain the property of their original public
                authorities or lawful publishers. We do not acquire, claim, or resell the
                underlying record.
              </p>
              <p>
                What we organize is already public. The platform adds a layer of order and
                interpretation on top of that record — it does not stand between the public
                and the source. Where an official source exists, it remains the authority;
                our work points toward it, not away from it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where the value lies */}
      <section className="bg-parchment">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="02">Where the value lies</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-serif text-display-l font-semibold text-ink">
            The value is not the record. It is the work of making it usable.
          </h2>
          <p className="mt-5 max-w-prose2 text-[16px] leading-relaxed text-charcoal/80">
            The public record is free and will stay free. What professionals pay for is the
            discipline that turns scattered documents into structured decision support.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE.map((v, i) => (
              <div key={v} className="bg-paper p-6 lg:p-7">
                <span className="font-mono text-[11px] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2.5 font-serif text-[17px] leading-snug text-ink">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access layers */}
      <section className="border-y border-rule/15 bg-paper">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="03">The access layers</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-serif text-display-l font-semibold text-ink">
            Seven layers, from open access to professional engagement
          </h2>
          <p className="mt-5 max-w-prose2 text-[16px] leading-relaxed text-charcoal/80">
            The first layer is open to everyone. The rest are professional services priced
            to the work involved. Each is labelled honestly, including what is planned but
            not yet available.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LAYERS.map((layer) => (
              <article
                key={layer.n}
                className="flex h-full flex-col border border-rule/15 bg-paper shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="flex items-center justify-between border-b border-rule/15 px-6 py-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider2 text-charcoal/50">
                    Layer {layer.n}
                  </span>
                  <TierBadge tier={layer.tier} label={layer.tierLabel} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-semibold leading-tight text-ink">
                    {layer.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                    {layer.summary}
                  </p>
                  <div className="mt-4">
                    <p className="eyebrow">Who it is for</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal/70">
                      {layer.forWhom}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="eyebrow">Includes</p>
                    <ul className="mt-2.5 space-y-2">
                      {layer.includes.map((d) => (
                        <li key={d} className="flex gap-2.5 text-[13px] leading-relaxed text-charcoal/80">
                          <span className="mt-[7px] h-1 w-1 shrink-0 bg-gold" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={layer.to}
                    className="mt-6 inline-flex items-center font-mono text-[11px] uppercase tracking-wider2 text-gold transition-colors hover:text-navy"
                  >
                    {layer.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we do not sell */}
      <section className="bg-ink text-parchment">
        <div className="desk-container py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel index="04">What we do not sell</SectionLabel>
              <h2 className="mt-6 font-serif text-display-l font-semibold leading-tight text-parchment">
                The boundaries are part of the product.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-parchment/65">
                A serious intelligence service is defined as much by what it refuses to
                claim as by what it offers.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-rule/30 border-y border-rule/30">
                {DO_NOT_SELL.map((d) => (
                  <li key={d} className="flex gap-4 py-4">
                    <span className="mt-0.5 shrink-0 font-mono text-sm text-gold">✕</span>
                    <span className="text-[15.5px] leading-relaxed text-parchment/85">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border border-gold/40 bg-gold/[0.06] p-6">
                <p className="eyebrow">What we do provide</p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-parchment/85">
                  Structured intelligence, source maps, interpretation, monitoring, and
                  professional context — built on public or lawfully available information,
                  with source transparency throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why this model matters */}
      <section className="bg-parchment">
        <div className="desk-container py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel index="05">Why this model matters</SectionLabel>
              <h2 className="mt-6 font-serif text-display-l font-semibold leading-tight text-ink">
                The problem is rarely that information does not exist.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-relaxed text-charcoal/80 lg:col-span-7">
              <p>
                In many African markets, the difficulty is not absence but disorder.
                Important information is scattered across institutions, difficult to
                monitor, poorly classified, and rarely translated into professional
                decision support.
              </p>
              <p>
                A free-for-all of public documents is not the same as usable intelligence.
                The record has to be located, organized, classified, interpreted, and
                placed in jurisdiction and sector context before it can inform a decision.
                That translation is the work — and it is where the platform creates value.
              </p>
              <p className="border-l-2 border-gold pl-5 font-serif text-xl italic text-ink">
                The platform creates value by turning institutional signals into usable
                intelligence — without ever claiming the public record as its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule/40 bg-navy text-parchment">
        <div className="desk-container py-16 text-center lg:py-20">
          <p className="eyebrow">Start with the open layer, engage when you need depth</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-display-l font-semibold leading-tight">
            The record stays open. The professional work is where we earn our place.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/library"
              className="inline-flex items-center border border-parchment/35 px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-parchment transition-colors hover:border-gold hover:text-gold"
            >
              Open the free library
            </Link>
            <Link
              to="/briefing-desk"
              className="inline-flex items-center border border-gold bg-gold px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-ink transition-colors hover:bg-goldhi"
            >
              See professional services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
