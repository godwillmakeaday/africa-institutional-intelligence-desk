import { Link } from "react-router-dom";
import { SectionLabel } from "./Layout.jsx";
import { nigeriaDeskAreas, NIGERIA_STATES } from "../data/intelligenceItems.js";

export default function NigeriaPreview() {
  return (
    <section className="bg-parchment">
      <div className="desk-container py-20 lg:py-24">
        <SectionLabel index="02">Nigeria Desk · Nigeria-first, Africa-ready</SectionLabel>
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h2 className="font-serif text-display-l font-semibold text-ink lg:col-span-7">
            The first jurisdiction, read in depth
          </h2>
          <p className="text-[15px] leading-relaxed text-charcoal/75 lg:col-span-5">
            A Nigeria-first monitoring framework across ten intelligence areas and the
            states where consequential decisions are actually made. This is a sample
            intelligence structure — data sources are to be connected.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 lg:grid-cols-12">
          {/* Ten areas */}
          <div className="bg-paper p-7 lg:col-span-8 lg:p-9">
            <p className="eyebrow">Ten intelligence areas</p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {nigeriaDeskAreas.map((a, i) => (
                <li key={a.name} className="flex items-baseline gap-3 border-b border-rule/10 pb-2.5">
                  <span className="font-mono text-[10px] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[15px] text-ink">{a.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* States + CTA */}
          <div className="flex flex-col bg-navy p-7 text-parchment lg:col-span-4 lg:p-9">
            <p className="eyebrow">State coverage</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {NIGERIA_STATES.map((st) => (
                <Link
                  key={st}
                  to={`/dashboard?state=${encodeURIComponent(st)}`}
                  className="border border-parchment/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider2 text-parchment/75 transition-colors hover:border-gold hover:text-gold"
                >
                  {st}
                </Link>
              ))}
            </div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-wider2 text-parchment/45">
              Monitoring framework · data sources to be connected
            </p>
            <Link
              to="/nigeria"
              className="mt-auto inline-flex w-full items-center justify-center border border-gold bg-gold px-4 py-3 font-mono text-[11px] uppercase tracking-wider2 text-ink transition-colors hover:bg-goldhi"
            >
              Enter the Nigeria Desk →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
