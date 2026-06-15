import { Link, useParams } from "react-router-dom";
import RiskBadge from "../components/RiskBadge.jsx";
import CategoryBadge from "../components/CategoryBadge.jsx";
import { StatusBadge, SampleBadge } from "../components/Badges.jsx";
import ClassificationStrip from "../components/ClassificationStrip.jsx";
import IntelligenceCard from "../components/IntelligenceCard.jsx";
import { getItemBySlug, getRelatedItems } from "../data/intelligenceItems.js";

function Block({ n, label, children }) {
  return (
    <section className="border-t border-rule/15 py-7">
      <h2 className="font-mono text-[11px] uppercase tracking-wider2 text-gold">
        § {n} · {label}
      </h2>
      <div className="mt-3.5 max-w-prose2 text-[15.5px] leading-relaxed text-charcoal/85">
        {children}
      </div>
    </section>
  );
}

export default function BriefDetail() {
  const { slug } = useParams();
  const item = getItemBySlug(slug);

  if (!item) {
    return (
      <div className="desk-container py-28 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-serif text-3xl text-ink">This brief is not on the desk.</h1>
        <Link
          to="/dashboard"
          className="mt-6 inline-flex border border-navy px-5 py-2.5 font-mono text-[11px] uppercase tracking-wider2 text-navy hover:bg-navy hover:text-parchment"
        >
          Back to dashboard
        </Link>
      </div>
    );
  }

  const related = getRelatedItems(item, 3);

  return (
    <div>
      {/* Masthead */}
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
        <div className="desk-container relative py-14 lg:py-16">
          <Link
            to="/dashboard"
            className="font-mono text-[11px] uppercase tracking-wider2 text-parchment/55 hover:text-gold"
          >
            ← Intelligence desk
          </Link>
          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <CategoryBadge category={item.category} className="text-parchment/80" />
            <RiskBadge level={item.riskLevel} />
            <StatusBadge status={item.status} />
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-display-l font-semibold leading-tight text-parchment">
            {item.title}
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-parchment/70 sm:text-xl">
            {item.summary}
          </p>
          <div className="mt-8">
            <ClassificationStrip item={item} variant="dark" />
          </div>
          <div className="mt-5">
            <SampleBadge />
          </div>
        </div>
      </header>

      <div className="bg-paper">
        <div className="desk-container py-14 lg:py-16">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <article className="lg:col-span-8">
              <section className="border-l-2 border-gold pl-6">
                <h2 className="font-mono text-[11px] uppercase tracking-wider2 text-gold">
                  Executive summary
                </h2>
                <p className="dropcap mt-3 font-serif text-[22px] leading-relaxed text-ink">
                  {item.summary}
                </p>
              </section>

              <div className="mt-4">
                <Block n="01" label="What happened">
                  <p>
                    {item.summary} The change is recorded here as a discrete institutional
                    event with a defined effective context, rather than as commentary.
                  </p>
                </Block>

                <Block n="02" label="Why it matters">
                  <p>{item.whyItMatters}</p>
                </Block>

                <Block n="03" label="Who is affected">
                  <div className="flex flex-wrap gap-2">
                    {item.affectedSectors.map((s) => (
                      <span
                        key={s}
                        className="border border-rule/20 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider2 text-charcoal/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3.5">
                    Counterparties, advisers, and institutions operating in{" "}
                    {item.jurisdiction} with exposure to these sectors should treat this as
                    a prompt for review.
                  </p>
                </Block>

                <Block n="04" label="Legal / policy / commercial implications">
                  <p>
                    This signal sits in the{" "}
                    <span className="font-medium">{item.category}</span> category at a{" "}
                    <span className="font-medium">{item.riskLevel.toLowerCase()}</span> risk
                    level. The practical implication is that affected parties may need to
                    re-test assumptions tied to the prior position — pricing, compliance
                    timing, eligibility, or exposure — before the change takes full effect.
                  </p>
                </Block>

                <Block n="05" label="Recommended next steps">
                  <p>{item.recommendedAction}</p>
                </Block>

                <Block n="06" label="Source notes">
                  <p>{item.sourceNote}</p>
                </Block>
              </div>

              <div className="mt-8 border border-gold/30 bg-gold/[0.05] p-6">
                <p className="font-mono text-[11px] leading-relaxed text-charcoal/75">
                  <span className="text-gold">Disclaimer.</span> This brief is sample /
                  demonstration data. It is not legal, financial, investment, or political
                  advice, and must not be relied upon. Verify against official sources and
                  consult qualified professionals before acting.
                </p>
              </div>
            </article>

            {/* Dossier rail */}
            <aside className="lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-28">
                <div className="border border-rule/15 bg-parchment/40 p-6">
                  <p className="eyebrow">Brief dossier</p>
                  <dl className="mt-4 space-y-3 text-sm">
                    {[
                      ["Jurisdiction", item.jurisdiction],
                      ["Country", item.country],
                      ["Region", item.region],
                      ["Source type", item.sourceType],
                      ["Date filed", item.date],
                      ["Status", item.status],
                      ["Confidence", item.confidenceLevel],
                      ["Reference", item.id],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-3 border-b border-rule/10 pb-2.5">
                        <dt className="font-mono text-[10px] uppercase tracking-wider2 text-charcoal/45">
                          {k}
                        </dt>
                        <dd className="text-right font-medium text-charcoal/85">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-4">
                    <p className="eyebrow">Tags</p>
                    <p className="mt-2 font-mono text-[11px] leading-relaxed text-charcoal/65">
                      {item.tags.join(" · ")}
                    </p>
                  </div>
                  <Link
                    to="/contact?request=Custom%20report"
                    className="mt-6 inline-flex w-full items-center justify-center border border-navy bg-navy px-4 py-3 font-mono text-[11px] uppercase tracking-wider2 text-parchment transition-colors hover:bg-gold hover:text-ink"
                  >
                    Commission deeper research →
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <section className="mt-16 border-t border-rule/15 pt-14">
              <h2 className="font-serif text-2xl font-semibold text-ink">Related items</h2>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {related.map((r) => (
                  <IntelligenceCard key={r.id} item={r} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
