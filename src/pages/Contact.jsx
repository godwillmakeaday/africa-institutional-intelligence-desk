import ContactForm from "../components/ContactForm.jsx";
import { PageHeader } from "../components/Layout.jsx";

export default function Contact() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact & Inquiries"
        title="Bring a question, a jurisdiction, or a brief to the desk"
        intro="Whether you need a recurring briefing, a single commissioned report, a partnership, or to contribute data, start here. Tell us the institutional reality you are trying to see clearly."
      />
      <section className="bg-parchment">
        <div className="desk-container py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="lg:col-span-5">
              <div className="border border-rule/15 bg-paper p-7">
                <p className="eyebrow">What happens next</p>
                <ul className="mt-5 space-y-5 text-sm leading-relaxed text-charcoal/80">
                  <li className="flex gap-3.5">
                    <span className="font-mono text-[11px] uppercase tracking-wider2 text-gold">§ 01</span>
                    <span>We review your inquiry against the desk's coverage and scope.</span>
                  </li>
                  <li className="flex gap-3.5">
                    <span className="font-mono text-[11px] uppercase tracking-wider2 text-gold">§ 02</span>
                    <span>We propose a package or scope a custom report around your question.</span>
                  </li>
                  <li className="flex gap-3.5">
                    <span className="font-mono text-[11px] uppercase tracking-wider2 text-gold">§ 03</span>
                    <span>We confirm sources, cadence, and deliverables before any work begins.</span>
                  </li>
                </ul>
                <div className="mt-7 border-t border-rule/15 pt-5">
                  <p className="font-mono text-[11px] leading-relaxed text-charcoal/55">
                    This is a demonstration build. The form does not transmit or store any
                    data. Connect a backend or form service before production use.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
