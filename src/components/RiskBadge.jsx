const RISK = {
  Low: { code: "L", style: "text-risklow border-risklow/45", dot: "bg-risklow" },
  Medium: { code: "M", style: "text-riskmed border-riskmed/45", dot: "bg-riskmed" },
  High: { code: "H", style: "text-riskhigh border-riskhigh/45", dot: "bg-riskhigh" },
  Strategic: { code: "S", style: "text-riskstrat border-riskstrat/45", dot: "bg-riskstrat" },
};

export default function RiskBadge({ level, className = "" }) {
  const r = RISK[level] || RISK.Low;
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-[3px] font-mono text-[10px] font-medium uppercase tracking-wider2 ${r.style} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${r.dot}`} />
      {level} risk
    </span>
  );
}

// Compact coded chip (L/M/H/S) for tight spaces.
export function RiskTick({ level, className = "" }) {
  const r = RISK[level] || RISK.Low;
  return (
    <span
      className={`grid h-5 w-5 place-items-center border font-mono text-[10px] font-semibold ${r.style} ${className}`}
      title={`${level} risk`}
    >
      {r.code}
    </span>
  );
}

export const RISK_META = RISK;
