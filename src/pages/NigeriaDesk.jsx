import { Link } from "react-router-dom";
import { PageHeader, SectionLabel } from "../components/Layout.jsx";
import IntelligenceCard from "../components/IntelligenceCard.jsx";
import {
  nigeriaDeskAreas,
  NIGERIA_STATES,
  nigeriaDeskItems,
  nigeriaStateCounts,
} from "../data/intelligenceItems.js";

export default function NigeriaDesk() {
  return (
    <div>
      <PageHeader
        eyebrow="Nigeria Desk · Nigeria-first, Africa-ready"
        title="A Nigeria-first monitoring framework"
        intro="The Nigeria Desk organizes Nigerian federal and state institutional signals into a single monitoring framework. This is a sample intelligence structure — the framework is defined and the briefs below are demonstrations. Live data sources are not yet connected."
        meta={["Monitoring framework", "Sample intelligence structure", "Data sources to be connected"]}
      />

      {/* Careful-language notice */}
      <section className="border-b border-rule/15 bg-paper">
        <div className="desk-container py-8">
          <div className="flex flex-col gap-4 border border-gold/30 bg-gold/[0.05] p-5 sm:flex-row sm:items-center sm:gap-6">
            <span className="font-mono text-[10px] uppercase tracking-wider2 text-gold">
              ✦ Framework status
            </span>
            <p className="text-[13.5px] leading-relaxed text-charcoal/80">
              The Nigeria Desk is a <span className="font-medium">monitoring framework</span>{" "}
              and a <span className="font-medium">sample intelligence structure</span>. Every
              brief shown is a <span className="font-medium">demonstration brief</span>, clearly
              labelled sample data. The desk does not claim live data — each area's{" "}
              <span className="font-medium">data source is to be connected</span>.
            </p>
          </div>
        </div>
      </section>

      {/* The ten intelligence areas */}
      <section className="bg-parchment">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="01">The ten intelligence areas</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-display-l font-semibold text-ink">
            How the Nigeria Desk is organized
          </h2>
          <p className="mt-5 max-w-prose2 text-[16px] leading-relaxed text-charcoal/80">
            Each area is a standing watch within the framework. Areas map directly to the
            classification used across the intelligence desk, so a Nigerian signal can be
            read in the same structured way as any other.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 sm:grid-cols-2">
            {nigeriaDeskAreas.map((area, i) => (
              <Link
                key={area.name}
                to={`/dashboard?category=${encodeURIComponent(area.category)}&country=Nigeria`}
                className="group flex flex-col bg-paper p-6 transition-colors hover:bg-navy lg:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider2 text-gold">
                    § {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-wider2 text-charcoal/40 transition-colors group-hover:text-parchment/50">
                    Monitoring framework
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink transition-colors group-hover:text-parchment">
                  {area.name}
                </h3>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-charcoal/70 transition-colors group-hover:text-parchment/70">
                  {area.blurb}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-rule/15 pt-3 transition-colors group-hover:border-parchment/15">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider2 text-charcoal/40 transition-colors group-hover:text-parchment/45">
                    Data source to be connected
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-charcoal/45 transition-colors group-hover:text-gold">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* State coverage */}
      <section className="border-y border-rule/15 bg-paper">
        <div className="desk-container py-16 lg:py-20">
          <SectionLabel index="02">State coverage</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-display-l font-semibold text-ink">
            Eight states in the sample structure
          </h2>
          <p className="mt-5 max-w-prose2 text-[16px] leading-relaxed text-charcoal/80">
            Much consequential activity in Nigeria is decided sub-nationally. The framework
            carries a sample structure for the states below; coverage extends as data
            sources are connected, and the same structure is built to reach further across
            African markets.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 sm:grid-cols-2 lg:grid-cols-4">
            {NIGERIA_STATES.map((st) => (
              <Link
                key={st}
                to={`/dashboard?state=${encodeURIComponent(st)}`}
                className="group bg-paper p-6 transition-colors hover:bg-navy"
              >
                <p className="font-mono text-[9.5px] uppercase tracking-wider2 text-gold">
                  Nigerian state
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-ink transition-colors group-hover:text-parchment">
                  {st}
                </h3>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-wider2 text-charcoal/45 transition-colors group-hover:text-gold">
                  {nigeriaStateCounts[st] || 0} demonstration brief
                  {(nigeriaStateCounts[st] || 0) === 1 ? "" : "s"} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* State-level demonstration briefs */}
      <section className="bg-parchment">
        <div className="desk-container py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel index="03">State-level demonstration briefs</SectionLabel>
              <h2 className="mt-6 font-serif text-display-l font-semibold text-ink">
                Sample briefs, one per state
              </h2>
            </div>
            <Link
              to="/dashboard?country=Nigeria"
              className="font-mono text-[11px] uppercase tracking-wider2 text-gold hover:text-navy"
            >
              Open Nigeria on the desk →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nigeriaDeskItems.map((item) => (
              <IntelligenceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Africa-ready note */}
      <section className="bg-ink text-parchment">
        <div className="desk-container py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel index="04">Nigeria-first, Africa-ready</SectionLabel>
              <h2 className="mt-6 font-serif text-display-l font-semibold leading-tight text-parchment">
                Depth first, then breadth.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-relaxed text-parchment/72 lg:col-span-7">
              <p>
                We begin in Nigeria — at federal and state levels — because depth in one
                complex jurisdiction is worth more than thin coverage across many. The
                taxonomy, the ten intelligence areas, and the methodology are deliberately
                built to extend across African markets without being redesigned.
              </p>
              <p>
                Nothing here is presented as live or current. The Nigeria Desk is a defined
                monitoring framework and a sample intelligence structure; each area's data
                source is to be connected before it carries verified intelligence.
              </p>
              <Link
                to="/methodology"
                className="inline-flex items-center font-mono text-[11px] uppercase tracking-wider2 text-gold hover:text-goldhi"
              >
                How the desk verifies and classifies →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
