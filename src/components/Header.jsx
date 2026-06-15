import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV = [
  { to: "/nigeria", label: "Nigeria Desk" },
  { to: "/dashboard", label: "Intelligence" },
  { to: "/library", label: "Library" },
  { to: "/methodology", label: "Methodology" },
  { to: "/briefing-desk", label: "Briefing Desk" },
  { to: "/about", label: "About" },
];

const EDITION = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative font-mono text-[11px] uppercase tracking-wider2 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all ${
      isActive
        ? "text-gold after:w-full"
        : "text-parchment/65 after:w-0 hover:text-parchment hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* Micro dateline bar */}
      <div className="hidden border-b border-rule/30 bg-inkdeep lg:block">
        <div className="desk-container flex h-8 items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider2 text-parchment/40">
            Africa · Global South Institutional Intelligence
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider2 text-parchment/40">
            Edition · {EDITION}
          </span>
        </div>
      </div>

      <div
        className={`border-b transition-colors ${
          scrolled
            ? "border-rule/40 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/85"
            : "border-rule/30 bg-ink"
        }`}
      >
        <div className="desk-container">
          <div className="flex h-[68px] items-center justify-between gap-4">
            <Link to="/" className="group flex items-center gap-3.5" onClick={() => setOpen(false)}>
              <span className="grid h-9 w-9 place-items-center border border-gold/50 font-serif text-base text-gold transition-colors group-hover:border-gold">
                AÏ
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-[15.5px] font-semibold tracking-tight text-parchment">
                  Africa Institutional Intelligence Desk
                </span>
                <span className="hidden font-mono text-[9.5px] uppercase tracking-wider3 text-gold/70 sm:block">
                  Where public information becomes professional intelligence
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-7 xl:flex">
              {NAV.map((n) => (
                <NavLink key={n.to} to={n.to} className={linkClass}>
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="border border-gold/60 px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider2 text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                Contact
              </Link>
            </nav>

            <button
              className="grid h-10 w-10 place-items-center border border-rule/50 text-parchment xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="font-mono text-sm">{open ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-rule/40 bg-ink xl:hidden">
            <div className="desk-container flex flex-col py-2">
              {NAV.concat([{ to: "/contact", label: "Contact" }]).map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-rule/20 py-3.5 font-mono text-xs uppercase tracking-wider2 ${
                      isActive ? "text-gold" : "text-parchment/80"
                    }`
                  }
                >
                  {n.label}
                  <span className="text-gold/50">→</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
