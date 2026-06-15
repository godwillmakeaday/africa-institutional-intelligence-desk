import { SourceLibraryCard } from "../components/DeskComponents.jsx";
import { PageHeader, SectionLabel } from "../components/Layout.jsx";
import { libraryCards } from "../data/intelligenceItems.js";

export default function Library() {
  return (
    <div>
      <PageHeader
        eyebrow="Open Intelligence Library"
        title="The public information layer should be open, traceable, and verifiable"
        intro="The raw record belongs to the public. The premium value lies in classification, interpretation, alerts, risk analysis, and professional decision support — not in restricting access to documents that were public to begin with."
        meta={[`${libraryCards.length} source types`, "Public & lawful sources", "Availability tracked"]}
      />

      <section className="bg-parchment">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="01">Public source inventory</SectionLabel>
          <p className="mt-6 max-w-prose2 text-[16px] leading-relaxed text-charcoal/80">
            These are the public and lawfully available source types the desk organises.
            Availability reflects how reachable each source currently is — open, restricted,
            or tracked manually — not a judgement on its importance.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {libraryCards.map((card) => (
              <SourceLibraryCard key={card.name} card={card} />
            ))}
          </div>

          <div className="mt-12 border border-rule/15 bg-paper p-6">
            <p className="eyebrow">Availability key</p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {[
                ["Open", "bg-emerald-700"],
                ["Restricted", "bg-riskhigh"],
                ["Manual tracking", "bg-riskmed"],
                ["Coming soon", "bg-slate-400"],
              ].map(([label, dot]) => (
                <span key={label} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider2">
                  <span className={`h-2 w-2 rounded-full ${dot}`} />
                  <span className="text-charcoal/70">{label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
