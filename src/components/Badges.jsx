export function SampleBadge({ className = "", subtle = false }) {
  if (subtle) {
    return (
      <span className={`font-mono text-[9.5px] uppercase tracking-wider2 text-gold/60 ${className}`}>
        ✦ Sample data
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1 border border-gold/35 bg-gold/[0.07] px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-wider2 text-gold ${className}`}
      title="Illustrative data, not real intelligence."
    >
      <span aria-hidden>✦</span> Sample / Demonstration Data
    </span>
  );
}

const STATUS = {
  Verified: "text-emerald-700/90 border-emerald-700/30",
  Monitoring: "text-navy/70 border-navy/25",
  Developing: "text-riskmed border-riskmed/35",
  Archived: "text-slate-400 border-slate-300",
};

export function StatusBadge({ status, className = "" }) {
  const style = STATUS[status] || STATUS.Monitoring;
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-wider2 ${style} ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}
