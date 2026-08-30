import PublicationCard from "./PublicationCard";

export default function PublicationGroup({ label, items }) {
  if (!items.length) return null;

  return (
    <div>
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text3)]">
        {label}
      </h2>
      <div className="flex flex-col gap-5">
        {items.map((pub, i) => (
          <PublicationCard key={i} pub={pub} />
        ))}
      </div>
    </div>
  );
}
