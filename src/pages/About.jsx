import { Link } from "react-router-dom";
import { PageHeader, SectionLabel } from "../components/Layout.jsx";

function Section({ label, title, children }) {
  return (
    <section className="border-t border-rule/15 py-10">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-4 font-serif text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
      <div className="mt-4 max-w-prose2 space-y-4 text-base leading-relaxed text-charcoal/80">
        {children}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About the Desk"
        title="A new category: organized institutional visibility for African markets"
        intro="Africa does not lack activity. It lacks organized visibility. Many serious decisions are hidden in scattered documents, notices, meetings, registries, gazettes, and local institutional signals. This desk exists to convert that scattered reality into structured professional intelligence."
      />

      <div className="bg-paper">
        <div className="desk-container py-12 lg:py-16">
          <Section label="Why this exists" title="The signal is public. The reading is missing.">
            <p>
              Most consequential institutional change is announced in public — but it is
              announced in fragments, across registries, gazettes, cause lists, budgets,
              and ministry notices that no one reads as a single system. The information
              is available and lawful; what is absent is the organising layer that turns
              it into intelligence a professional can act on.
            </p>
          </Section>

          <Section label="The African data gap" title="Under-indexed, not under-active">
            <p>
              The gap is not a shortage of events. It is a shortage of structure: scattered
              sources, inconsistent formats, lagging publication, and no shared taxonomy
              for comparing one signal against another. The result is that institutions
              learn about changes late, partially, or only after they have already been
              affected.
            </p>
          </Section>

          <Section label="Global South intelligence problem" title="Africa is part of the Global South">
            <p>
              Global North data platforms were built for markets that are already
              formalized and indexed. Africa is part of a Global South whose institutional
              realities those platforms were never designed to see. The opportunity is not
              to copy them, but to build intelligence native to under-indexed realities —
              where the public record is rich, but unorganized.
            </p>
          </Section>

          <Section label="Nigeria-first, Africa-ready" title="Depth first, then breadth">
            <p>
              We begin in Nigeria — at federal and sub-national levels, including state
              desks — because depth in one complex jurisdiction is worth more than thin
              coverage across many. The taxonomy, methodology, and classification system
              are built to extend across African markets as coverage grows.
            </p>
          </Section>

          <Section label="Who the platform serves" title="Decision-makers who carry institutional risk">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Lawyers and chambers",
                "Investors and analysts",
                "Journalists and investigators",
                "NGOs and civil society",
                "Businesses and contractors",
                "Researchers and policy actors",
                "Compliance and risk teams",
                "Government-facing institutions",
              ].map((a) => (
                <div key={a} className="flex items-center gap-2 border border-rule/15 bg-parchment/50 px-4 py-3">
                  <span className="text-gold">▮</span>
                  <span className="text-sm text-charcoal/80">{a}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section label="Future vision" title="From a desk to a standard">
            <p>
              The long-term aim is a recognised standard for reading African institutional
              reality: a consistent taxonomy, a verifiable source layer, and a professional
              interpretation discipline that institutions can rely on across jurisdictions —
              with the raw public record kept open, and the value concentrated in the reading.
            </p>
            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center border border-navy px-5 py-3 font-mono text-[11px] uppercase tracking-wider2 text-navy transition-colors hover:bg-navy hover:text-parchment"
              >
                Work with the desk →
              </Link>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
