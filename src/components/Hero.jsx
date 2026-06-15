import { Link } from "react-router-dom";
import RiskBadge from "./RiskBadge.jsx";
import { SampleBadge } from "./Badges.jsx";
import { BRAND, COVERAGE } from "../config.js";

const TRACKS = [
  "Gazettes",
  "Notices",
  "Regulatory updates",
  "Procurement signals",
  "Land notices",
  "Policy movements",
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
      <div className="desk-container relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            {/* Coverage indicator */}
            <div className="inline-flex items-center gap-2 border border-rule/40 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
              <span className="font-mono text-[10px] uppercase tracking-wider2 text-parchment/65">
                {COVERAGE}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-display-xl font-semibold text-parchment">
              A source-mapped institutional{" "}
              <span className="text-gold">signals platform.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-parchment/72">
              {BRAND.name} organizes public-facing records, notices, gazettes, regulatory
              updates, procurement signals, land notices, court-adjacent information, and
              policy movements into structured briefs.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/dashboard"
                className="inline-flex items-center border border-gold bg-gold px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-ink transition-colors hover:bg-goldhi"
              >
                Open the desk →
              </Link>
              <Link
                to="/methodology"
                className="inline-flex items-center border border-parchment/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-parchment transition-colors hover:border-gold hover:text-gold"
              >
                How a record becomes a brief
              </Link>
            </div>

            {/* Ownership statement */}
            <div className="mt-10 border-l-2 border-gold/50 pl-5">
              <p className="max-w-xl text-[14px] leading-relaxed text-parchment/70">
                {BRAND.name} does not claim ownership over public information. Its value is
                classification, source mapping, jurisdiction mapping, risk labelling,
                summaries, alerts, and professional briefings.
              </p>
            </div>

            <div className="mt-10 border-t border-rule/30 pt-5">
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
                className="group block border border-rule/45 bg-white/[0.02] p-6 transition-colors hover:border-gold/55 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">Record of the Week</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-parchment/45">
                    {featured.date}
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-[24px] font-semibold leading-tight text-parchment transition-colors group-hover:text-gold sm:text-[26px]">
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
