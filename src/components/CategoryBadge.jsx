export default function CategoryBadge({ category, className = "" }) {
  return (
    <span
      className={`inline-flex items-center font-mono text-[10px] uppercase tracking-wider2 text-navy/70 ${className}`}
    >
      <span className="mr-2 h-2 w-px bg-gold" />
      {category}
    </span>
  );
}
