import { Link } from "react-router-dom";
import { PackageCard } from "../components/DeskComponents.jsx";
import { PageHeader, SectionLabel } from "../components/Layout.jsx";
import { packages } from "../data/intelligenceItems.js";

const ENGAGEMENT = [
  ["01", "Scope", "We agree the jurisdictions, categories, and cadence that match the decisions you need to protect."],
  ["02", "Source", "We confirm the public and lawful sources the brief will draw on, with transparency on each."],
  ["03", "Deliver", "Briefs arrive in a fixed, scannable format — risk-ranked, status-labelled, and keyed to deadlines."],
];

export default function BriefingDesk() {
  return (
    <div>
      <PageHeader
        eyebrow="Premium Briefing Desk"
        title="Professional services for institutions that act on institutional signals"
        intro="The desk is free to read. These packages add scheduled delivery, deadline-keyed alerts, single-jurisdiction focus, and commissioned research for teams that need intelligence on a cadence they can plan around."
        meta={["Law firms", "Investors", "NGOs", "Public-sector observers"]}
      />

      {/* How engagement works */}
      <section className="border-b border-rule/15 bg-paper">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="01">How an engagement works</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 md:grid-cols-3">
            {ENGAGEMENT.map(([n, t, d]) => (
              <div key={n} className="bg-paper p-7 lg:p-8">
                <span className="font-mono text-[11px] uppercase tracking-wider2 text-gold">§ {n}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink">{t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">{d}</p>
              </div>
            ))}
          </div>
          <Link
            to="/access-model"
            className="mt-8 inline-flex items-center font-mono text-[11px] uppercase tracking-wider2 text-gold hover:text-navy"
          >
            See how free and paid access fit together in the Access Model →
          </Link>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="02">Briefing packages</SectionLabel>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.code} pkg={pkg} />
            ))}
          </div>

          <div className="mt-16 border border-rule/15 bg-ink p-8 text-parchment lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="eyebrow">Not sure which desk fits?</p>
                <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                  Tell us your jurisdictions and the decisions you are trying to protect.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-parchment/70">
                  We will recommend a package — or scope a custom intelligence report —
                  around the specific institutional questions your team is carrying.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/contact?request=Intelligence%20briefing"
                  className="inline-flex items-center border border-gold bg-gold px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-ink transition-colors hover:bg-goldhi"
                >
                  Request a briefing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
