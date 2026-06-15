import { Link } from "react-router-dom";

export function PackageCard({ pkg }) {
  return (
    <article className="flex h-full flex-col border border-rule/15 bg-paper shadow-card transition-shadow hover:shadow-lift">
      <div className="flex items-center justify-between border-b border-rule/15 px-6 py-4">
        <span className="font-mono text-[11px] uppercase tracking-wider2 text-charcoal/50">
          Package {pkg.code}
        </span>
        <span className="grid h-8 w-8 place-items-center border border-gold/50 font-serif text-base text-gold">
          {pkg.code}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold leading-tight text-ink">
          {pkg.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{pkg.covers}</p>

        <div className="mt-5">
          <p className="eyebrow">Who it is for</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal/70">{pkg.for}</p>
        </div>

        <div className="mt-5">
          <p className="eyebrow">Deliverables</p>
          <ul className="mt-2.5 space-y-2">
            {pkg.deliverables.map((d) => (
              <li key={d} className="flex gap-2.5 text-[13px] leading-relaxed text-charcoal/80">
                <span className="mt-[7px] h-1 w-1 shrink-0 bg-gold" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 border-l-2 border-gold/40 bg-parchment/50 px-4 py-3">
          <p className="eyebrow-muted">Example output</p>
          <p className="mt-1.5 text-[13px] italic leading-relaxed text-charcoal/75">
            {pkg.exampleOutput}
          </p>
        </div>

        <Link
          to={`/contact?request=Intelligence%20briefing&package=${encodeURIComponent(pkg.name)}`}
          className="mt-7 inline-flex w-full items-center justify-center border border-navy bg-navy px-4 py-3 font-mono text-[11px] uppercase tracking-wider2 text-parchment transition-colors hover:bg-gold hover:text-ink"
        >
          Request briefing →
        </Link>
      </div>
    </article>
  );
}

export function MethodologyStep({ step }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2 border-t border-rule/15 py-8">
      <span className="font-mono text-[11px] uppercase tracking-wider2 text-gold">
        § {step.n}
      </span>
      <div>
        <h3 className="font-serif text-xl font-semibold text-ink">{step.title}</h3>
        <p className="mt-2.5 max-w-prose2 text-[15px] leading-relaxed text-charcoal/80">
          {step.body}
        </p>
      </div>
    </div>
  );
}

const AVAIL = {
  Open: "text-emerald-700/90 border-emerald-700/30",
  Restricted: "text-riskhigh border-riskhigh/30",
  "Manual tracking": "text-riskmed border-riskmed/30",
  "Coming soon": "text-slate-400 border-slate-300",
};

export function SourceLibraryCard({ card }) {
  const style = AVAIL[card.availability] || AVAIL["Coming soon"];
  return (
    <article className="flex h-full flex-col border border-rule/15 bg-paper p-6 shadow-card transition-shadow hover:shadow-lift">
      <div className="flex items-start justify-between gap-3 border-b border-rule/15 pb-4">
        <h3 className="font-serif text-xl font-semibold text-ink">{card.name}</h3>
        <span
          className={`shrink-0 border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider2 ${style}`}
        >
          {card.availability}
        </span>
      </div>

      <div className="mt-4 space-y-3.5 text-sm leading-relaxed">
        <div>
          <p className="eyebrow">Contains</p>
          <p className="mt-1 text-charcoal/80">{card.contains}</p>
        </div>
        <div>
          <p className="eyebrow">Why it matters</p>
          <p className="mt-1 text-charcoal/80">{card.whyItMatters}</p>
        </div>
        <div>
          <p className="eyebrow">Who uses it</p>
          <p className="mt-1 text-charcoal/65">{card.usedBy}</p>
        </div>
      </div>
    </article>
  );
}
