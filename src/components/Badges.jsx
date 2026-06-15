import { DEMO_MODE } from "../config.js";

export function SampleBadge({ className = "", subtle = false }) {
  if (!DEMO_MODE) return null;
  if (subtle) {
    return (
      <span className={`font-mono text-[9.5px] uppercase tracking-wider2 text-gold/60 ${className}`}>
        ✦ Sample record
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1 border border-gold/35 bg-gold/[0.07] px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-wider2 text-gold ${className}`}
      title="Sample record, not a real or current record."
    >
      <span aria-hidden>✦</span> Sample / Demonstration Record
    </span>
  );
}

// Event lifecycle: Developing / Active / Closed
const STATUS = {
  Developing: "text-riskmed border-riskmed/35",
  Active: "text-navy/75 border-navy/25",
  Closed: "text-slate-400 border-slate-300",
};

export function StatusBadge({ status, className = "" }) {
  const style = STATUS[status] || STATUS.Active;
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-wider2 ${style} ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}

// Trust in the record: Verified / Source-confirmed / Unverified
const VERIF = {
  Verified: "text-emerald-700/90 border-emerald-700/30",
  "Source-confirmed": "text-navy/70 border-navy/25",
  Unverified: "text-slate-500 border-slate-300",
};

export function VerificationBadge({ verification, className = "" }) {
  const style = VERIF[verification] || VERIF["Source-confirmed"];
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-wider2 ${style} ${className}`}
      title={`Verification: ${verification}`}
    >
      <span aria-hidden className="text-[9px]">✓</span>
      {verification}
    </span>
  );
}
