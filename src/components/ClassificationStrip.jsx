// Signature device: a classified-dossier metadata strip.
// Each cell encodes real metadata. Jurisdiction is allowed to wrap — never truncated.
export default function ClassificationStrip({ item, variant = "card" }) {
  const dark = variant === "dark";
  const cells = [
    { k: "Jurisdiction", v: item.jurisdiction, wrap: true },
    { k: "Source type", v: item.sourceType },
    { k: "Ref", v: item.id },
    { k: "Filed", v: item.date },
  ];

  return (
    <dl
      className={`grid grid-cols-2 gap-x-5 gap-y-3 border-y py-3 sm:grid-cols-4 ${
        dark ? "border-rule/40" : "border-rule/15"
      }`}
    >
      {cells.map((c) => (
        <div key={c.k} className="min-w-0">
          <dt className={`classcell ${dark ? "text-gold/75" : "text-gold"}`}>{c.k}</dt>
          <dd
            className={`mt-1 font-mono text-[11px] leading-snug tracking-tight ${
              c.wrap ? "break-words" : "truncate"
            } ${dark ? "text-parchment/85" : "text-charcoal/85"}`}
            title={c.v}
          >
            {c.v}
          </dd>
        </div>
      ))}
    </dl>
  );
}
