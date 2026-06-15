import { Link } from "react-router-dom";
import RiskBadge from "./RiskBadge.jsx";
import CategoryBadge from "./CategoryBadge.jsx";
import { StatusBadge, VerificationBadge, SampleBadge } from "./Badges.jsx";
import ClassificationStrip from "./ClassificationStrip.jsx";

const SPINE = {
  Low: "before:bg-risklow",
  Medium: "before:bg-riskmed",
  High: "before:bg-riskhigh",
  Strategic: "before:bg-riskstrat",
};

function SecondaryFields({ item }) {
  return (
    <div>
      <ClassificationStrip item={item} />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <StatusBadge status={item.status} />
        <VerificationBadge verification={item.verification} />
      </div>
      <div className="mt-3">
        <p className="eyebrow">Affected sectors</p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {item.affectedSectors.map((s) => (
            <span
              key={s}
              className="border border-rule/12 bg-parchment/40 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider2 text-charcoal/55"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IntelligenceCard({ item }) {
  return (
    <article
      className={`group relative flex h-full flex-col border border-rule/15 bg-paper shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-rule/30 hover:shadow-lift before:absolute before:inset-y-0 before:left-0 before:w-[3px] ${
        SPINE[item.riskLevel] || SPINE.Low
      } before:opacity-70`}
    >
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        {/* PRIMARY — always visible */}
        <div className="flex items-start justify-between gap-3">
          <CategoryBadge category={item.category} />
          <RiskBadge level={item.riskLevel} />
        </div>

        <Link to={`/brief/${item.slug}`} className="mt-4 block">
          <h3 className="font-serif text-[19px] font-semibold leading-snug text-ink transition-colors group-hover:text-navy sm:text-[20px]">
            {item.title}
          </h3>
        </Link>

        <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/75">
          {item.summary}
        </p>

        <div className="mt-4">
          <p className="eyebrow">Why it matters</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal/70">
            {item.whyItMatters}
          </p>
        </div>

        {/* SECONDARY — collapsible on mobile, expanded from sm up */}
        <details className="group/d mt-5 sm:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between border-y border-rule/15 py-2.5 font-mono text-[10px] uppercase tracking-wider2 text-navy/70 marker:hidden">
            Record details
            <span className="text-gold transition-transform group-open/d:rotate-180">▾</span>
          </summary>
          <div className="pt-4">
            <SecondaryFields item={item} />
          </div>
        </details>
        <div className="mt-5 hidden sm:block">
          <SecondaryFields item={item} />
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-rule/15 px-5 py-3.5 sm:px-7">
        <SampleBadge subtle />
        <Link
          to={`/brief/${item.slug}`}
          className="shrink-0 font-mono text-[10.5px] uppercase tracking-wider2 text-gold transition-colors hover:text-navy"
        >
          Open brief →
        </Link>
      </div>
    </article>
  );
}
