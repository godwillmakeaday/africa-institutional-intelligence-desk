import { Link } from "react-router-dom";
import RiskBadge from "./RiskBadge.jsx";
import { SampleBadge } from "./Badges.jsx";

const TRACKS = [
  "Gazettes",
  "Circulars",
  "Court lists",
  "Procurement",
  "Land notices",
  "Trade corridors",
];

export default function Hero({ featured }) {
  return (
    <section className="relative overflow-hidden border-b border-rule/40 bg-ink text-parchment">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #B08A43, transparent 62%)" }}
        aria-hidden
      />
      <div className="desk-container relative py-20 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Nigeria-first · Africa-ready · Global South intelligence</p>
            <h1 className="mt-6 font-serif text-display-xl font-semibold text-parchment">
              Where African public information becomes{" "}
              <span className="text-gold">professional intelligence.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-parchment/72">
              Africa Institutional Intelligence Desk tracks laws, regulations, gazettes,
              procurement notices, court signals, policy shifts, land notices, trade
              corridors, and public-sector decisions — then translates them into
              structured intelligence for professionals.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/dashboard"
                className="inline-flex items-center border border-gold bg-gold px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-ink transition-colors hover:bg-goldhi"
              >
                Explore Intelligence Desk →
              </Link>
              <Link
                to="/methodology"
                className="inline-flex items-center border border-parchment/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-parchment transition-colors hover:border-gold hover:text-gold"
              >
                View Methodology
              </Link>
            </div>

            <div className="mt-12 border-t border-rule/30 pt-5">
              <p className="eyebrow-muted">What the desk reads</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {TRACKS.map((t) => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-wider2 text-parchment/55">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {featured && (
            <div className="lg:col-span-5">
              <Link
                to={`/brief/${featured.slug}`}
                className="group block border border-rule/45 bg-white/[0.02] p-7 transition-colors hover:border-gold/55"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">Intelligence Brief of the Week</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-parchment/45">
                    {featured.date}
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-[26px] font-semibold leading-tight text-parchment transition-colors group-hover:text-gold">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-parchment/70">
                  {featured.summary}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-rule/35 pt-5">
                  <RiskBadge level={featured.riskLevel} />
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-parchment/45">
                    {featured.category}
                  </span>
                  <span className="ml-auto font-mono text-[10.5px] uppercase tracking-wider2 text-parchment/70 group-hover:text-gold">
                    Read →
                  </span>
                </div>
                <div className="mt-5">
                  <SampleBadge />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
