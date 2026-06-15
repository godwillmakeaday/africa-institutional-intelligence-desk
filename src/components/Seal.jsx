import { BRAND } from "../config.js";

// "Filed, on the record" stamp device housing the ARD / RD monogram.
export default function Seal({ tight = false, className = "" }) {
  const text = tight ? BRAND.monogramTight : BRAND.monogram;
  return (
    <span
      className={`relative grid h-9 w-9 shrink-0 place-items-center border border-gold/60 ${className}`}
      aria-hidden="true"
      title={BRAND.name}
    >
      {/* inner hairline ring to read as a stamp */}
      <span className="pointer-events-none absolute inset-[3px] border border-gold/25" />
      <span className="font-serif text-[12px] font-semibold leading-none tracking-tight text-gold">
        {text}
      </span>
    </span>
  );
}
