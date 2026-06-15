import { Link } from "react-router-dom";
import { PageHeader, SectionLabel } from "../components/Layout.jsx";
import { DEMO_MODE } from "../config.js";

const SIGNALS = [
  ["Regulatory changes", "Circulars, directives, and instruments — flagged to the compliance deadline, not the publication date."],
  ["Court signals", "Cause-list movements and hearing schedules that surface contested matters early."],
  ["Procurement notices", "Tenders, re-tenders, and awards, including re-tender patterns that signal delivery risk."],
  ["Land notices", "Allocation, revocation, acquisition, and compensation notices with short response windows."],
  ["Policy updates", "Ministry announcements and programme changes that precede formal instruments."],
  ["Political-risk events", "Electoral-process, delimitation, and governance signals that shape the operating environment."],
];

const HOW = [
  ["Scoped", "You define the jurisdictions, categories, and thresholds that matter to you."],
  ["Classified", "Each signal is source-mapped, jurisdiction-mapped, and risk-labelled before it reaches you."],
  ["Delivered", "Alerts arrive keyed to deadlines, with a running watch-list of developing records."],
];

export default function Alerts() {
  return (
    <div>
      <PageHeader
        eyebrow="Alerts & Monitoring"
        title="Monitoring that reaches you before a record becomes a surprise"
        intro="Alerts & Monitoring tracks the records that matter to your jurisdictions and sectors, and notifies you when something changes — keyed to deadlines rather than publication dates."
        meta={["Deadline-keyed", "Source-mapped", "Risk-labelled"]}
      />

      {DEMO_MODE && (
        <section className="border-b border-rule/15 bg-paper">
          <div className="desk-container py-8">
            <div className="flex flex-col gap-3 border border-gold/30 bg-gold/[0.05] p-5 sm:flex-row sm:items-center sm:gap-6">
              <span className="font-mono text-[10px] uppercase tracking-wider2 text-gold">
                ✦ Status
              </span>
              <p className="text-[13.5px] leading-relaxed text-charcoal/80">
                Alerts are described here as a monitoring framework. Live delivery is not yet
                switched on — <span className="font-medium">data sources are to be connected</span>.
                Register interest and we will scope coverage to your jurisdictions.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* What we monitor */}
      <section className="bg-parchment">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="01">What we monitor</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-display-l font-semibold text-ink">
            Six classes of institutional signal
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 sm:grid-cols-2 lg:grid-cols-3">
            {SIGNALS.map(([t, d], i) => (
              <div key={t} className="bg-paper p-6 lg:p-7">
                <span className="font-mono text-[11px] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2.5 font-serif text-lg font-semibold text-ink">{t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-rule/15 bg-paper">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="02">How monitoring works</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 md:grid-cols-3">
            {HOW.map(([t, d], i) => (
              <div key={t} className="bg-paper p-7 lg:p-8">
                <span className="font-mono text-[11px] uppercase tracking-wider2 text-gold">§ 0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink">{t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-parchment">
        <div className="desk-container py-16 text-center lg:py-20">
          <p className="eyebrow">Scope monitoring to your mandate</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-display-l font-semibold leading-tight">
            Tell us the jurisdictions and signals you cannot afford to miss.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact?request=Intelligence%20briefing"
              className="inline-flex items-center border border-gold bg-gold px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-ink transition-colors hover:bg-goldhi"
            >
              Register monitoring interest →
            </Link>
            <Link
              to="/access-model"
              className="inline-flex items-center border border-parchment/35 px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-parchment transition-colors hover:border-gold hover:text-gold"
            >
              See the access model
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
