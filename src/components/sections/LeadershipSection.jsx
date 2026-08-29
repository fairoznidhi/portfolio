import { leadership } from "../../data/portfolio";

export default function LeadershipSection() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {leadership.map((l, i) => (
        <div
          key={i}
          className="rounded-[10px] border border-border bg-[var(--bg2)] px-7 py-6"
        >
          <div className="mb-2 text-xs uppercase tracking-[0.08em] text-[var(--accent)]">
            {l.role}
          </div>
          <div className="mb-2 text-[1.2rem] text-[var(--text)]">{l.org}</div>
          <div className="text-[0.8rem] text-[var(--text3)]">
            {l.period} · {l.location}
          </div>
        </div>
      ))}
    </div>
  );
}
