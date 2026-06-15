// Sitewide thin ribbon making the demonstration status unmistakable.
export function SampleRibbon() {
  return (
    <div className="border-b border-gold/25 bg-ink">
      <div className="desk-container py-1.5">
        <p className="text-center font-mono text-[9.5px] uppercase tracking-wider3 text-goldhaze/80">
          Demonstration build · all intelligence shown is sample data, not real or current information
        </p>
      </div>
    </div>
  );
}

// Editorial page masthead with eyebrow, headline and standfirst.
export function PageHeader({ eyebrow, title, intro, meta }) {
  return (
    <header className="relative overflow-hidden border-b border-rule/40 bg-ink text-parchment">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />
      <div className="desk-container relative py-16 lg:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-5 max-w-4xl font-serif text-display-l font-semibold text-parchment">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-parchment/70 sm:text-xl">
            {intro}
          </p>
        )}
        {meta && (
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule/30 pt-5">
            {meta.map((m) => (
              <span key={m} className="font-mono text-[10.5px] uppercase tracking-wider2 text-parchment/45">
                {m}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

// § section marker — used where content carries a real position or sequence.
export function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-4">
      {index ? (
        <span className="section-index whitespace-nowrap">§ {index}</span>
      ) : (
        <span className="text-gold">▮</span>
      )}
      <span className="eyebrow">{children}</span>
      <span className="h-px flex-1 bg-current text-rule/20" />
    </div>
  );
}
