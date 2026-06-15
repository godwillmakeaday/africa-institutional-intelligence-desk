import { Link } from "react-router-dom";
import Seal from "./Seal.jsx";
import { BRAND, DEMO_MODE } from "../config.js";

function edition() {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule/40 bg-inkdeep text-parchment/70">
      {/* Credibility strip */}
      <div className="border-b border-rule/25">
        <div className="desk-container grid gap-px overflow-hidden sm:grid-cols-3">
          {[
            ["Source-mapped", "Every record carries its source type, jurisdiction, and a transparency note. We map where information comes from."],
            ["Verification labelled", "Records are labelled for trust — verified, source-confirmed, or unverified — distinct from their event lifecycle."],
            ["No ownership claimed", "Public documents remain the property of their original authorities or lawful publishers. We organize and interpret; we do not own the record."],
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
              <Seal />
              <span className="font-serif text-base font-semibold text-parchment">{BRAND.name}</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-parchment/55">
              A source-mapped institutional signals platform. Nigeria-first, with the
              continent on the roadmap — built for the under-indexed institutional realities
              of the Global South.
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-wider2 text-parchment/35" suppressHydrationWarning>
              Edition · {edition()}{DEMO_MODE ? " · Demonstration build" : ""}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow-muted">The Desk</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/dashboard" className="text-parchment/70 hover:text-gold">Records desk</Link></li>
              <li><Link to="/nigeria" className="text-parchment/70 hover:text-gold">Nigeria Desk</Link></li>
              <li><Link to="/library" className="text-parchment/70 hover:text-gold">Free Open Library</Link></li>
              <li><Link to="/alerts" className="text-parchment/70 hover:text-gold">Alerts &amp; Monitoring</Link></li>
              <li><Link to="/briefing-desk" className="text-parchment/70 hover:text-gold">Professional Briefings</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="eyebrow-muted">Institution</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-parchment/70 hover:text-gold">About the Desk</Link></li>
              <li><Link to="/access-model" className="text-parchment/70 hover:text-gold">Access &amp; business model</Link></li>
              <li><Link to="/methodology" className="text-parchment/70 hover:text-gold">Methodology</Link></li>
              <li><Link to="/contact" className="text-parchment/70 hover:text-gold">Contact &amp; Inquiries</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-rule/30 pt-6">
          <p className="max-w-4xl font-mono text-[11px] leading-relaxed text-parchment/45">
            <span className="text-gold">Disclaimer.</span> {BRAND.name} does not claim
            ownership over public information and does not provide legal, financial,
            investment, or political advice. It organizes public or lawfully available
            information into structured briefs.{DEMO_MODE ? " All records shown in this build are sample / demonstration records and must not be relied upon." : ""} Consult qualified professionals before acting.
          </p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-wider2 text-parchment/35">
            © {year} {BRAND.name} · Source-mapped institutional signals
          </p>
        </div>
      </div>
    </footer>
  );
}
