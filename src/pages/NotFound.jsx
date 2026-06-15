import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-ink text-parchment">
      <div className="desk-container py-28 text-center">
        <p className="eyebrow">Error · 404</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          This page is not on the desk.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-parchment/70">
          The reference you followed does not match any item in the intelligence desk.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center border border-gold bg-gold px-5 py-3 font-mono text-[11px] uppercase tracking-wider2 text-ink transition-colors hover:bg-goldhi"
        >
          Return to the desk →
        </Link>
      </div>
    </div>
  );
}
