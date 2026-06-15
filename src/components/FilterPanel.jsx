const Select = ({ label, value, onChange, options }) => (
  <label className="block">
    <span className="eyebrow">{label}</span>
    <div className="relative mt-2">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none border border-rule/25 bg-paper px-3 py-2.5 pr-8 font-sans text-sm text-charcoal transition-colors focus:border-gold focus:outline-none"
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-charcoal/40">
        ▾
      </span>
    </div>
  </label>
);

const FIELD_LABELS = {
  keyword: "Keyword",
  category: "Category",
  country: "Country",
  state: "Nigerian state",
  region: "Region",
  risk: "Risk",
  sector: "Sector",
  source: "Source",
  status: "Status",
};

export default function FilterPanel({
  filters,
  setFilter,
  resetFilters,
  taxonomies,
  resultCount,
}) {
  const { categories, countries, states, regions, risks, sectors, sources, statuses } =
    taxonomies;

  const active = Object.entries(filters).filter(([, v]) => v);

  return (
    <div className="border border-rule/15 bg-paper shadow-card">
      <div className="flex items-center justify-between border-b border-rule/15 px-5 py-4">
        <h2 className="font-mono text-[11px] uppercase tracking-wider2 text-navy">
          Filter intelligence
        </h2>
        <span className="font-mono text-[11px] text-charcoal/55">
          <span className="text-gold">{resultCount}</span> shown
        </span>
      </div>

      {active.length > 0 && (
        <div className="flex flex-wrap gap-1.5 border-b border-rule/15 px-5 py-3">
          {active.map(([k, v]) => (
            <button
              key={k}
              onClick={() => setFilter(k, "")}
              className="group inline-flex items-center gap-1.5 border border-gold/40 bg-gold/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider2 text-gold hover:bg-gold hover:text-ink"
              title={`Clear ${FIELD_LABELS[k]}`}
            >
              <span className="opacity-60">{FIELD_LABELS[k]}:</span>
              <span className="max-w-[8rem] truncate">{v}</span>
              <span aria-hidden>✕</span>
            </button>
          ))}
          <button
            onClick={resetFilters}
            className="font-mono text-[10px] uppercase tracking-wider2 text-charcoal/50 underline decoration-charcoal/20 underline-offset-2 hover:text-navy"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="px-5 py-5">
        <label className="block">
          <span className="eyebrow">Keyword</span>
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) => setFilter("keyword", e.target.value)}
            placeholder="Title, summary, tags…"
            className="mt-2 w-full border border-rule/25 bg-paper px-3 py-2.5 font-sans text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none"
          />
        </label>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <Select label="Category" value={filters.category} onChange={(v) => setFilter("category", v)} options={categories} />
          <Select label="Country" value={filters.country} onChange={(v) => setFilter("country", v)} options={countries} />
          <Select label="Nigerian state" value={filters.state} onChange={(v) => setFilter("state", v)} options={states} />
          <Select label="State / region" value={filters.region} onChange={(v) => setFilter("region", v)} options={regions} />
          <Select label="Risk level" value={filters.risk} onChange={(v) => setFilter("risk", v)} options={risks} />
          <Select label="Sector" value={filters.sector} onChange={(v) => setFilter("sector", v)} options={sectors} />
          <Select label="Source type" value={filters.source} onChange={(v) => setFilter("source", v)} options={sources} />
          <Select label="Status" value={filters.status} onChange={(v) => setFilter("status", v)} options={statuses} />
        </div>
      </div>
    </div>
  );
}
