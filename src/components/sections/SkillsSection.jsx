import { skills } from "../../data/portfolio";

export default function SkillsSection() {
  return (
    <div className="mt-14 border-t border-border pt-10">
      <p className="mb-7 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text3)]">
        Skills
      </p>
      <dl className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-10 gap-y-7">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="flex flex-col gap-3">
            <dt className="text-[0.85rem] font-semibold text-[var(--text)]">
              {group}
            </dt>
            <dd className="m-0 flex flex-wrap gap-[7px]">
              {items.map((it) => (
                <span
                  key={it}
                  className="rounded-md border border-border bg-[var(--bg2)] px-[11px] py-1 text-[0.8rem] text-[var(--text2)]"
                >
                  {it}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
