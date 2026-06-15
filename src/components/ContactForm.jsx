import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { COUNTRIES, CATEGORIES } from "../data/intelligenceItems.js";

const REQUEST_TYPES = [
  "Intelligence briefing",
  "Partnership",
  "Data contribution",
  "Media inquiry",
  "Legal/regulatory research",
  "Custom report",
  "Other",
];

export default function ContactForm() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    country: "",
    interest: "",
    requestType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Prefill from query (e.g. coming from a package CTA)
  useEffect(() => {
    const request = params.get("request");
    const pkg = params.get("package");
    setForm((f) => ({
      ...f,
      requestType: request && REQUEST_TYPES.includes(request) ? request : f.requestType,
      message: pkg ? `I would like to request the "${pkg}" briefing. ` : f.message,
    }));
  }, [params]);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Add your name.";
    if (!form.email.trim()) e.email = "Add an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Check the email format.";
    if (!form.requestType) e.requestType = "Choose a request type.";
    if (!form.message.trim()) e.message = "Add a short message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = () => {
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-rule/20 bg-paper p-8 shadow-card">
        <p className="eyebrow">Inquiry recorded</p>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-ink">
          Thank you, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-prose2 text-sm leading-relaxed text-charcoal/75">
          This is a demonstration build, so nothing has been transmitted. In production,
          your inquiry — a <span className="font-medium">{form.requestType.toLowerCase()}</span> request —
          would be routed to the desk for response.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", organization: "", email: "", country: "", interest: "", requestType: "", message: "" });
          }}
          className="mt-6 border border-navy px-4 py-2 font-mono text-[11px] uppercase tracking-wider2 text-navy hover:bg-navy hover:text-parchment"
        >
          Submit another
        </button>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full border border-rule/25 bg-paper px-3 py-2 font-sans text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40";
  const errClass = "mt-1 font-mono text-[10.5px] uppercase tracking-wider2 text-riskhigh";

  return (
    <div className="border border-rule/20 bg-paper p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input className={field} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Full name" />
          {errors.name && <p className={errClass}>{errors.name}</p>}
        </label>
        <label className="block">
          <span className="eyebrow">Organization</span>
          <input className={field} value={form.organization} onChange={(e) => set("organization", e.target.value)} placeholder="Firm, institution, or independent" />
        </label>
        <label className="block">
          <span className="eyebrow">Email</span>
          <input className={field} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="name@organization.com" />
          {errors.email && <p className={errClass}>{errors.email}</p>}
        </label>
        <label className="block">
          <span className="eyebrow">Country</span>
          <select className={field} value={form.country} onChange={(e) => set("country", e.target.value)}>
            <option value="">Select country</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="block">
          <span className="eyebrow">Area of interest</span>
          <select className={field} value={form.interest} onChange={(e) => set("interest", e.target.value)}>
            <option value="">Select area</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="eyebrow">Type of request</span>
          <select className={field} value={form.requestType} onChange={(e) => set("requestType", e.target.value)}>
            <option value="">Select request type</option>
            {REQUEST_TYPES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          {errors.requestType && <p className={errClass}>{errors.requestType}</p>}
        </label>
      </div>

      <label className="mt-5 block">
        <span className="eyebrow">Message</span>
        <textarea
          rows={5}
          className={field}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Describe the jurisdictions, sectors, or questions you need covered."
        />
        {errors.message && <p className={errClass}>{errors.message}</p>}
      </label>

      <button
        onClick={onSubmit}
        className="mt-6 inline-flex items-center border border-navy bg-navy px-5 py-3 font-mono text-[11px] uppercase tracking-wider2 text-parchment transition-colors hover:bg-gold hover:text-ink"
      >
        Send inquiry →
      </button>
      <p className="mt-3 font-mono text-[10.5px] leading-relaxed text-charcoal/50">
        Demonstration form — no data is transmitted or stored in this build.
      </p>
    </div>
  );
}
