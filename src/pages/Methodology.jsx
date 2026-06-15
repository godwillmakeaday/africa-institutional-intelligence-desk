import { MethodologyStep } from "../components/DeskComponents.jsx";
import { PageHeader, SectionLabel } from "../components/Layout.jsx";
import { methodologySteps } from "../data/intelligenceItems.js";

const ARE = [
  "An organizing and interpretation layer over public information",
  "A consistent taxonomy for comparing institutional signals",
  "A source-transparent record of where information came from",
  "A professional-awareness tool for decision-makers",
];
const ARE_NOT = [
  "A replacement for official government sources",
  "A provider of legal, financial, or political advice",
  "A guarantee of completeness or real-time coverage",
  "A predictor of outcomes — risk labels are prompts, not forecasts",
];

export default function Methodology() {
  return (
    <div>
      <PageHeader
        eyebrow="Methodology"
        title="A disciplined path from public record to professional brief"
        intro="We do not replace official government sources. We organize, classify, summarize, and interpret public information for professional awareness — with source transparency throughout."
        meta={["Source-transparent", "Status-labelled", "Jurisdiction-mapped"]}
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
              <SectionLabel index="01">The discipline, step by step</SectionLabel>
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
                  <p className="mt-4 border-t border-rule/15 pt-3 font-mono text-[10.5px] leading-relaxed text-charcoal/55">
                    Risk is a prompt for attention, not a prediction of outcome.
                  </p>
                </div>

                <div className="border border-rule/15 bg-parchment/40 p-6">
                  <p className="eyebrow">Status labels</p>
                  <ul className="mt-4 space-y-2.5 text-sm text-charcoal/80">
                    <li><span className="font-medium">Verified</span> — checked against its source.</li>
                    <li><span className="font-medium">Monitoring</span> — tracked; position may evolve.</li>
                    <li><span className="font-medium">Developing</span> — active and not yet settled.</li>
                    <li><span className="font-medium">Archived</span> — retained for reference.</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-14 border border-gold/30 bg-gold/[0.05] p-7 lg:p-9">
            <p className="eyebrow">Disclaimer &amp; ethical use</p>
            <p className="mt-4 max-w-prose2 text-[15px] leading-relaxed text-charcoal/80">
              This platform does not provide legal, financial, investment, or political
              advice. It provides structured institutional intelligence based on public or
              lawfully available information. Users should consult qualified professionals
              before acting. We work only with public or lawfully available sources, retain
              source transparency, and do not present interpretation as official record.
              All intelligence in this build is sample / demonstration data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
