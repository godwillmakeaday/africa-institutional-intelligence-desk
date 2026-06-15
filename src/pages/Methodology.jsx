import { MethodologyStep } from "../components/DeskComponents.jsx";
import { PageHeader, SectionLabel } from "../components/Layout.jsx";
import { methodologySteps } from "../data/intelligenceItems.js";
import { BRAND } from "../config.js";

const ARE = [
  "An organizing and source-mapping layer over public information",
  "A consistent classification for comparing institutional records",
  "A source-transparent account of where each record came from",
  "A professional-awareness tool for decision-makers",
];
const ARE_NOT = [
  "An owner of public information — the record stays with its publisher",
  "A replacement for official government sources",
  "A guarantee that public records are complete",
  "A provider of legal, financial, investment, or political advice",
];

export default function Methodology() {
  return (
    <div>
      <PageHeader
        eyebrow="Methodology"
        title="How a public record becomes a brief"
        intro="Not a feature list — a process. Each public record moves through the same disciplined path before it is published as a structured brief, with source transparency at every step."
        meta={["Source-mapped", "Risk-labelled", "Human-reviewed"]}
      />

      {/* What we are / are not */}
      <section className="border-b border-rule/15 bg-paper">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="00">Standing position</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 md:grid-cols-2">
            <div className="bg-paper p-7 lg:p-9">
              <p className="eyebrow">What the desk is</p>
              <ul className="mt-5 space-y-3.5">
                {ARE.map((a) => (
                  <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-charcoal/85">
                    <span className="mt-[9px] h-1 w-1 shrink-0 bg-gold" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-parchment/40 p-7 lg:p-9">
              <p className="eyebrow-muted">What the desk is not</p>
              <ul className="mt-5 space-y-3.5">
                {ARE_NOT.map((a) => (
                  <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-charcoal/70">
                    <span className="mt-[7px] shrink-0 font-mono text-charcoal/40">✕</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="desk-container py-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <SectionLabel index="01">From record to brief, step by step</SectionLabel>
              <div className="mt-6">
                {methodologySteps.map((step) => (
                  <MethodologyStep key={step.n} step={step} />
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-28">
                <div className="border border-rule/15 bg-parchment/40 p-6">
                  <p className="eyebrow">Risk labels</p>
                  <ul className="mt-4 space-y-3 text-sm text-charcoal/80">
                    <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-risklow" /><span><span className="font-medium">Low</span> — limited institutional consequence.</span></li>
                    <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-riskmed" /><span><span className="font-medium">Medium</span> — material to affected parties; worth review.</span></li>
                    <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-riskhigh" /><span><span className="font-medium">High</span> — significant exposure or short windows.</span></li>
                    <li className="flex gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-riskstrat" /><span><span className="font-medium">Strategic</span> — could reset a market or relationship.</span></li>
                  </ul>
                </div>

                <div className="border border-rule/15 bg-parchment/40 p-6">
                  <p className="eyebrow">Status — event lifecycle</p>
                  <ul className="mt-4 space-y-2.5 text-sm text-charcoal/80">
                    <li><span className="font-medium">Developing</span> — active and not yet settled.</li>
                    <li><span className="font-medium">Active</span> — in effect or in motion.</li>
                    <li><span className="font-medium">Closed</span> — concluded; retained for reference.</li>
                  </ul>
                </div>

                <div className="border border-rule/15 bg-parchment/40 p-6">
                  <p className="eyebrow">Verification — trust in the record</p>
                  <ul className="mt-4 space-y-2.5 text-sm text-charcoal/80">
                    <li><span className="font-medium">Verified</span> — checked against the source.</li>
                    <li><span className="font-medium">Source-confirmed</span> — traced to a named source, review ongoing.</li>
                    <li><span className="font-medium">Unverified</span> — observed but not yet confirmed.</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-14 border border-gold/30 bg-gold/[0.05] p-7 lg:p-9">
            <p className="eyebrow">Limits &amp; disclaimers</p>
            <p className="mt-4 max-w-prose2 text-[15px] leading-relaxed text-charcoal/80">
              {BRAND.name} does not claim ownership over public information and does not
              replace official sources. Public records may be incomplete, lagging, or
              contradictory; classification reflects available information at a point in time.
              Nothing here is legal, financial, investment, or political advice. Consult
              qualified professionals before acting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
