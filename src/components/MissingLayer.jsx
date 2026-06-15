import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { SectionLabel } from "./Layout.jsx";

// The scattered public record — deliberately varied so it reads as fragmentation.
const FRAGMENTS = [
  { label: "Gazettes", indent: "lg:ml-0", op: "opacity-90" },
  { label: "Regulatory circulars", indent: "lg:ml-10", op: "opacity-70" },
  { label: "Public notices", indent: "lg:ml-4", op: "opacity-85" },
  { label: "Company registries", indent: "lg:ml-16", op: "opacity-60" },
  { label: "Court lists", indent: "lg:ml-2", op: "opacity-90" },
  { label: "Local announcements", indent: "lg:ml-12", op: "opacity-65" },
  { label: "Procurement portals", indent: "lg:ml-6", op: "opacity-80" },
  { label: "Institutional memory", indent: "lg:ml-14", op: "opacity-55" },
];

export default function MissingLayer() {
  return (
    <section className="relative overflow-hidden border-y border-rule/40 bg-inkdeep text-parchment">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />
      <div className="desk-container relative py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Thesis */}
          <Reveal className="lg:col-span-5">
            <SectionLabel index="01">The Missing Intelligence Layer</SectionLabel>
            <h2 className="mt-6 font-serif text-display-l font-semibold leading-tight text-parchment">
              The opportunity is not invisible. It is unorganized.
            </h2>
            <div className="mt-7 max-w-prose2 space-y-5 text-[16px] leading-relaxed text-parchment/72">
              <p className="dropcap">
                Many African opportunities and risks are not hidden because they do not
                exist. They are hidden because they are scattered — across gazettes,
                circulars, notices, registries, court lists, local announcements,
                procurement portals, and institutional memory.
              </p>
              <p>
                Each fragment is public. None of it is connected. A commencement date sits
                in one gazette; the contract it affects sits on another portal; the
                dispute over it appears, weeks later, on a cause list. Read in isolation,
                each is paperwork. Read as a system, they are intelligence.
              </p>
              <p className="font-serif text-lg italic text-parchment/90">
                The missing layer is not more information. It is the discipline that turns
                a scattered public record into something a professional can act on.
              </p>
            </div>
            <Link
              to="/methodology"
              className="mt-8 inline-flex items-center font-mono text-[11px] uppercase tracking-wider2 text-gold hover:text-goldhi"
            >
              How the desk assembles the layer →
            </Link>
          </Reveal>

          {/* Signature diagram: scattered fragments resolve into one desk */}
          <Reveal className="lg:col-span-7" delay={120}>
            <div className="border border-rule/40 bg-white/[0.015] p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <p className="eyebrow-muted">The scattered record</p>
                <p className="font-mono text-[10px] uppercase tracking-wider2 text-parchment/35">
                  Public · unconnected
                </p>
              </div>

              <div className="relative mt-6 space-y-2.5">
                {/* convergence spine */}
                <div
                  className="pointer-events-none absolute -right-3 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block"
                  aria-hidden
                />
                {FRAGMENTS.map((f) => (
                  <div
                    key={f.label}
                    className={`flex items-center gap-3 border border-rule/30 bg-ink/40 px-4 py-2.5 transition-colors hover:border-gold/40 ${f.indent} ${f.op}`}
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                    <span className="font-mono text-[11.5px] uppercase tracking-wider2 text-parchment/70">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* convergence marker */}
              <div className="mt-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-rule/30" />
                <span className="font-mono text-[10px] uppercase tracking-wider2 text-gold/70">
                  Classified · verified · interpreted
                </span>
                <span className="h-px flex-1 bg-rule/30" />
              </div>

              {/* resolved node */}
              <div className="mt-6 border border-gold/50 bg-gold/[0.06] px-5 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="eyebrow">One structured intelligence desk</p>
                    <p className="mt-2 font-serif text-lg font-semibold text-parchment">
                      Scattered public information, read as a single institutional picture.
                    </p>
                  </div>
                  <span className="hidden shrink-0 font-serif text-2xl text-gold sm:block">
                    ⟶
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
