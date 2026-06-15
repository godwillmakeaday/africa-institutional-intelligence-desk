import { Link } from "react-router-dom";
import RiskBadge from "./RiskBadge.jsx";
import CategoryBadge from "./CategoryBadge.jsx";
import { StatusBadge, SampleBadge } from "./Badges.jsx";
import ClassificationStrip from "./ClassificationStrip.jsx";

const SPINE = {
  Low: "before:bg-risklow",
  Medium: "before:bg-riskmed",
  High: "before:bg-riskhigh",
  Strategic: "before:bg-riskstrat",
};

export default function IntelligenceCard({ item }) {
  return (
    <article
      className={`group relative flex h-full flex-col border border-rule/15 bg-paper shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-rule/30 hover:shadow-lift before:absolute before:inset-y-0 before:left-0 before:w-[3px] ${
        SPINE[item.riskLevel] || SPINE.Low
      } before:opacity-70`}
    >
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <CategoryBadge category={item.category} />
          <RiskBadge level={item.riskLevel} />
        </div>

        <Link to={`/brief/${item.slug}`} className="mt-4 block">
          <h3 className="font-serif text-[20px] font-semibold leading-snug text-ink transition-colors group-hover:text-navy">
            {item.title}
          </h3>
        </Link>

        <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/75">
          {item.summary}
        </p>

        <div className="mt-5">
          <ClassificationStrip item={item} />
        </div>

        <div className="mt-4">
          <p className="eyebrow">Why it matters</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal/70">
            {item.whyItMatters}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
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

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-rule/15 px-6 py-3.5 sm:px-7">
        <div className="flex items-center gap-2">
          <StatusBadge status={item.status} />
          <SampleBadge subtle />
        </div>
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
