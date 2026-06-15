import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import IntelligenceCard from "../components/IntelligenceCard.jsx";
import MissingLayer from "../components/MissingLayer.jsx";
import NigeriaPreview from "../components/NigeriaPreview.jsx";
import Reveal from "../components/Reveal.jsx";
import { SectionLabel } from "../components/Layout.jsx";
import {
  intelligenceItems,
  heroModules,
  methodologySteps,
  packages,
} from "../data/intelligenceItems.js";

export default function Home() {
  const featured =
    intelligenceItems.find((i) => i.riskLevel === "Strategic") || intelligenceItems[0];
  const latest = intelligenceItems.slice(0, 3);

  return (
    <div>
      <Hero featured={featured} />

      {/* Trust statement */}
      <section className="border-b border-rule/15 bg-paper">
        <div className="desk-container py-12 lg:py-14">
          <p className="mx-auto max-w-3xl text-center font-serif text-xl leading-relaxed text-ink sm:text-[1.65rem] sm:leading-relaxed">
            We do not replace official government sources. We{" "}
            <span className="text-gold">organize, classify, summarize, and interpret</span>{" "}
            public information so professionals can see institutional reality clearly —
            with source transparency at every step.
          </p>
        </div>
      </section>

      {/* THE MISSING INTELLIGENCE LAYER — signature section */}
      <MissingLayer />

      {/* NIGERIA DESK — Nigeria-first, Africa-ready */}
      <NigeriaPreview />

      {/* Intelligence categories */}
      <section className="bg-parchment">
        <div className="desk-container py-20 lg:py-24">
          <SectionLabel index="03">The intelligence surface</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-display-l font-semibold text-ink">
            Six standing watches across the institutional landscape
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 sm:grid-cols-2 lg:grid-cols-3">
            {heroModules.map((m) => (
              <Link
                key={m.label}
                to={`/dashboard?category=${encodeURIComponent(m.category)}`}
                className="group bg-paper p-7 transition-colors hover:bg-navy"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider2 text-gold">
                  {m.category}
                </p>
                <h3 className="mt-2.5 font-serif text-[22px] font-semibold leading-snug text-ink transition-colors group-hover:text-parchment">
                  {m.label}
                </h3>
                <span className="mt-5 inline-block font-mono text-[10.5px] uppercase tracking-wider2 text-charcoal/45 transition-colors group-hover:text-gold">
                  Open desk →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest briefs */}
      <section className="border-y border-rule/15 bg-paper">
        <div className="desk-container py-20 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel index="04">Latest on the desk</SectionLabel>
              <h2 className="mt-6 font-serif text-display-l font-semibold text-ink">
                Recent institutional signals
              </h2>
            </div>
            <Link
              to="/dashboard"
              className="font-mono text-[11px] uppercase tracking-wider2 text-gold hover:text-navy"
            >
              View all intelligence →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {latest.map((item) => (
              <IntelligenceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="bg-ink text-parchment">
        <div className="desk-container py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <SectionLabel index="05">Why this matters</SectionLabel>
              <h2 className="mt-6 font-serif text-display-l font-semibold leading-tight text-parchment">
                Africa does not lack activity. It lacks organized visibility.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={120}>
              <div className="space-y-5 text-[16px] leading-relaxed text-parchment/72">
                <p>
                  Many serious decisions are hidden in scattered documents, notices,
                  meetings, registries, gazettes, and local institutional signals. The
                  information is public, but it is not organized, traceable, or
                  interpreted in a form professionals can act on.
                </p>
                <p>
                  A gazette publishes a commencement date that differs from the
                  announcement. A re-tender signals delivery risk on an earlier award. A
                  cluster of dormant entities reactivates before a bid. These are
                  consequential signals — but only if someone is reading them as a system
                  rather than as isolated paperwork.
                </p>
                <p className="border-l-2 border-gold pl-5 font-serif text-xl italic text-parchment">
                  The desk exists to convert that scattered reality into structured
                  professional intelligence.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Open intelligence philosophy */}
      <section className="bg-parchment">
        <div className="desk-container py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel index="06">Open intelligence philosophy</SectionLabel>
              <h2 className="mt-6 font-serif text-display-l font-semibold text-ink">
                The raw layer should be open. The value is in the reading.
              </h2>
              <p className="mt-6 max-w-prose2 text-[16px] leading-relaxed text-charcoal/80">
                The public information layer should be accessible, traceable, and
                verifiable. The premium value lies in classification, interpretation,
                alerts, risk analysis, and professional decision support — not in hoarding
                documents that were public to begin with.
              </p>
              <Link
                to="/library"
                className="mt-8 inline-flex items-center border border-navy px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-navy transition-colors hover:bg-navy hover:text-parchment"
              >
                Open Intelligence Library →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-rule/15 bg-rule/15">
              {["Gazettes", "Court Lists", "Procurement", "Budgets", "Land Notices", "Registries"].map(
                (l) => (
                  <div key={l} className="bg-paper p-6">
                    <p className="font-mono text-[9.5px] uppercase tracking-wider2 text-gold">
                      Public layer
                    </p>
                    <p className="mt-2 font-serif text-lg text-ink">{l}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Premium briefing desk preview */}
      <section className="border-y border-rule/15 bg-paper">
        <div className="desk-container py-20 lg:py-24">
          <SectionLabel index="07">Premium Briefing Desk</SectionLabel>
          <h2 className="mt-6 font-serif text-display-l font-semibold text-ink">
            Structured intelligence, delivered on a schedule
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 3).map((p) => (
              <div key={p.code} className="border border-rule/15 bg-parchment/40 p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center border border-gold/50 font-serif text-gold">
                    {p.code}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-ink">{p.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/75">{p.covers}</p>
              </div>
            ))}
          </div>
          <Link
            to="/briefing-desk"
            className="mt-8 inline-flex items-center font-mono text-[11px] uppercase tracking-wider2 text-gold hover:text-navy"
          >
            See all briefing packages →
          </Link>
        </div>
      </section>

      {/* Why Not Another Bloomberg */}
      <section className="bg-ink text-parchment">
        <div className="desk-container py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <SectionLabel index="08">Positioning</SectionLabel>
              <h2 className="mt-6 font-serif text-display-l font-semibold leading-tight text-parchment">
                Why not another Bloomberg?
              </h2>
            </div>
            <div className="space-y-6 text-[16px] leading-relaxed text-parchment/72 lg:col-span-8">
              <p>
                Bloomberg and similar platforms serve highly formalized global financial
                markets, dense with structured data and standardized instruments. They are
                built for a world that is already indexed.
              </p>
              <p>
                Africa Record Desk focuses on a different layer: the
                under-indexed institutional realities that shape law, commerce, land,
                governance, procurement, regulation, trade, and public risk across African
                markets. The opportunity is not to copy Global North data platforms, but to
                build intelligence for the realities those platforms were never designed to
                see.
              </p>
              <div className="grid gap-px overflow-hidden border border-rule/40 bg-rule/40 sm:grid-cols-2">
                <div className="bg-white/[0.02] p-6">
                  <p className="eyebrow">Global North platforms</p>
                  <p className="mt-3 text-sm leading-relaxed text-parchment/65">
                    Formalized markets · structured data · standardized instruments ·
                    already indexed
                  </p>
                </div>
                <div className="bg-white/[0.02] p-6">
                  <p className="eyebrow">This desk</p>
                  <p className="mt-3 text-sm leading-relaxed text-parchment/65">
                    Institutional realities · scattered public records · interpretation
                    over indexing · Global South
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology preview */}
      <section className="bg-parchment">
        <div className="desk-container py-20 lg:py-24">
          <SectionLabel index="09">How the desk works</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-serif text-display-l font-semibold text-ink">
            A disciplined path from public record to professional brief
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-rule/15 bg-rule/15 sm:grid-cols-2 lg:grid-cols-3">
            {methodologySteps.slice(0, 6).map((s) => (
              <div key={s.n} className="bg-paper p-7">
                <span className="font-mono text-[11px] uppercase tracking-wider2 text-gold">
                  § {s.n}
                </span>
                <h3 className="mt-2.5 font-serif text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-charcoal/70">{s.body}</p>
              </div>
            ))}
          </div>
          <Link
            to="/methodology"
            className="mt-8 inline-flex items-center font-mono text-[11px] uppercase tracking-wider2 text-gold hover:text-navy"
          >
            Read the full methodology →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-rule/40 bg-navy text-parchment">
        <div className="desk-container py-20 text-center lg:py-24">
          <p className="eyebrow">Bring the desk to your institution</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-display-l font-semibold leading-tight">
            See institutional reality before it reaches you as a surprise.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center border border-gold bg-gold px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-ink transition-colors hover:bg-goldhi"
            >
              Explore the desk →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-parchment/35 px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider2 text-parchment transition-colors hover:border-gold hover:text-gold"
            >
              Request a briefing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
