import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterPanel from "../components/FilterPanel.jsx";
import IntelligenceCard from "../components/IntelligenceCard.jsx";
import { PageHeader } from "../components/Layout.jsx";
import {
  intelligenceItems,
  CATEGORIES,
  COUNTRIES,
  NIGERIA_STATES,
  RISK_LEVELS,
  SECTORS,
  SOURCE_TYPES,
  STATUSES,
  matchesNigerianState,
} from "../data/intelligenceItems.js";

const EMPTY = {
  keyword: "", category: "", country: "", state: "", region: "",
  risk: "", sector: "", source: "", status: "",
};

const RISK_ORDER = { Strategic: 0, High: 1, Medium: 2, Low: 3 };

export default function Dashboard() {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState(EMPTY);
  const [sort, setSort] = useState("newest");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const category = params.get("category") || "";
    const country = params.get("country") || "";
    const state = params.get("state") || "";
    if (category || country || state) {
      setFilters((f) => ({
        ...f,
        category,
        country: state ? "Nigeria" : country,
        state,
      }));
    }
  }, [params]);

  const setFilter = (k, v) => setFilters((f) => ({ ...f, [k]: v }));
  const resetFilters = () => setFilters(EMPTY);

  const regions = useMemo(
    () => Array.from(new Set(intelligenceItems.map((i) => i.region))).sort(),
    []
  );

  const filtered = useMemo(() => {
    const kw = filters.keyword.trim().toLowerCase();
    let out = intelligenceItems.filter((it) => {
      if (filters.category && it.category !== filters.category) return false;
      if (filters.country && it.country !== filters.country) return false;
      if (filters.state && !matchesNigerianState(it, filters.state)) return false;
      if (filters.region && it.region !== filters.region) return false;
      if (filters.risk && it.riskLevel !== filters.risk) return false;
      if (filters.status && it.status !== filters.status) return false;
      if (filters.source && it.sourceType !== filters.source) return false;
      if (filters.sector && !it.affectedSectors.includes(filters.sector)) return false;
      if (kw) {
        const hay = [
          it.title, it.summary, it.whyItMatters, it.jurisdiction, it.category,
          ...it.tags, ...it.affectedSectors,
        ].join(" ").toLowerCase();
        if (!hay.includes(kw)) return false;
      }
      return true;
    });
    out = [...out].sort((a, b) => {
      if (sort === "risk") return RISK_ORDER[a.riskLevel] - RISK_ORDER[b.riskLevel];
      const cmp = a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
      return sort === "oldest" ? -cmp : cmp;
    });
    return out;
  }, [filters, sort]);

  const taxonomies = {
    categories: CATEGORIES, countries: COUNTRIES, states: NIGERIA_STATES, regions,
    risks: RISK_LEVELS, sectors: SECTORS, sources: SOURCE_TYPES, statuses: STATUSES,
  };

  return (
    <div>
      <PageHeader
        eyebrow="Intelligence Dashboard"
        title="The institutional intelligence desk"
        intro="Every signal is classified, jurisdiction-mapped, risk-labelled, and traced to a source type. Filter the desk to your jurisdictions, sectors, and risk appetite."
        meta={[`${intelligenceItems.length} items on file`, "Sample / demonstration data", "Multi-jurisdiction"]}
      />

      <div className="bg-parchment">
        <div className="desk-container py-12 lg:py-16">
          {/* Mobile filter toggle */}
          <div className="mb-6 lg:hidden">
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="flex w-full items-center justify-between border border-rule/25 bg-paper px-5 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-navy"
            >
              <span>{mobileOpen ? "Hide filters" : "Filter intelligence"}</span>
              <span className="text-gold">{filtered.length} shown · {mobileOpen ? "▴" : "▾"}</span>
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className={`lg:col-span-3 ${mobileOpen ? "block" : "hidden"} lg:block`}>
              <div className="lg:sticky lg:top-28">
                <FilterPanel
                  filters={filters}
                  setFilter={setFilter}
                  resetFilters={resetFilters}
                  taxonomies={taxonomies}
                  resultCount={filtered.length}
                />
              </div>
            </div>

            <div className="lg:col-span-9">
              {/* Results bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-rule/15 pb-4">
                <p className="font-mono text-[11px] uppercase tracking-wider2 text-charcoal/60">
                  <span className="text-gold">{filtered.length}</span> intelligence item
                  {filtered.length === 1 ? "" : "s"}
                </p>
                <label className="flex items-center gap-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider2 text-charcoal/45">
                    Sort
                  </span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none border border-rule/25 bg-paper px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider2 text-navy focus:border-gold focus:outline-none"
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                    <option value="risk">Risk: high → low</option>
                  </select>
                </label>
              </div>

              {filtered.length === 0 ? (
                <div className="border border-dashed border-rule/30 bg-paper p-14 text-center">
                  <p className="eyebrow">No matches</p>
                  <h3 className="mt-4 font-serif text-2xl text-ink">
                    Nothing on the desk fits those filters.
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/70">
                    Loosen a filter or clear the keyword to widen the view.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-6 border border-navy px-5 py-2.5 font-mono text-[11px] uppercase tracking-wider2 text-navy hover:bg-navy hover:text-parchment"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {filtered.map((item) => (
                    <IntelligenceCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
