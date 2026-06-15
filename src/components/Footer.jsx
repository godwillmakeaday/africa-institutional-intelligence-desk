import { Link } from "react-router-dom";

const EDITION = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule/40 bg-inkdeep text-parchment/70">
      {/* Credibility strip */}
      <div className="border-b border-rule/25">
        <div className="desk-container grid gap-px overflow-hidden sm:grid-cols-3">
          {[
            ["Source transparency", "Every item carries its source type, jurisdiction, and a transparency note. We cite where information comes from."],
            ["Verification discipline", "Items are checked against their originating source and labelled by status: verified, monitoring, developing, archived."],
            ["No advice, by design", "We organize and interpret public information. We do not give legal, financial, or political advice, or replace official sources."],
          ].map(([t, d]) => (
            <div key={t} className="bg-ink/40 px-6 py-8">
              <p className="eyebrow">{t}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-parchment/55">{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="desk-container py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-gold/50 font-serif text-base text-gold">
                AÏ
              </span>
              <span className="font-serif text-base font-semibold text-parchment">
                Africa Institutional Intelligence Desk
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-parchment/55">
              Where African public information becomes professional intelligence.
              Nigeria-first, Africa-ready — built for the under-indexed institutional
              realities of the Global South.
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-wider2 text-parchment/35">
              Edition · {EDITION} · Demonstration build
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow-muted">The Desk</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/nigeria" className="text-parchment/70 hover:text-gold">Nigeria Desk</Link></li>
              <li><Link to="/dashboard" className="text-parchment/70 hover:text-gold">Intelligence Desk</Link></li>
              <li><Link to="/library" className="text-parchment/70 hover:text-gold">Open Intelligence Library</Link></li>
              <li><Link to="/methodology" className="text-parchment/70 hover:text-gold">Methodology</Link></li>
              <li><Link to="/briefing-desk" className="text-parchment/70 hover:text-gold">Premium Briefing Desk</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="eyebrow-muted">Institution</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-parchment/70 hover:text-gold">About the Desk</Link></li>
              <li><Link to="/access-model" className="text-parchment/70 hover:text-gold">Access model</Link></li>
              <li><Link to="/contact" className="text-parchment/70 hover:text-gold">Contact &amp; Inquiries</Link></li>
              <li><Link to="/about" className="text-parchment/70 hover:text-gold">Coverage &amp; jurisdictions</Link></li>
              <li><Link to="/methodology" className="text-parchment/70 hover:text-gold">How to read this desk</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-rule/30 pt-6">
          <p className="max-w-4xl font-mono text-[11px] leading-relaxed text-parchment/45">
            <span className="text-gold">Disclaimer.</span> This platform does not provide
            legal, financial, investment, or political advice. It provides structured
            institutional intelligence based on public or lawfully available information.
            All intelligence shown in this version is sample / demonstration data and must
            not be relied upon. Consult qualified professionals before acting.
          </p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-wider2 text-parchment/35">
            © {year} Africa Institutional Intelligence Desk · Global South Institutional Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
