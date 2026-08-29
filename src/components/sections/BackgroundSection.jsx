import { education, experiences } from "../../data/portfolio";

function TimelineColumn({ label, items }) {
  return (
    <div>
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text3)]">
        {label}
      </p>
      <ol className="relative list-none pl-7 before:absolute before:bottom-[6px] before:left-[5px] before:top-[6px] before:w-[1.5px] before:bg-border before:content-['']">
        {items.map((it, i) => (
          <li
            key={i}
            className="relative pb-11 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-7 top-1 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_var(--bg)]"
            />
            <span className="mb-3 inline-block rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] px-[10px] py-[3px] text-[0.8rem] font-semibold text-[var(--accent)]">
              {it.period}
            </span>
            <h3 className="mb-1 text-[1.15rem] font-bold tracking-[-0.01em] text-[var(--text)]">
              {it.title}
            </h3>
            <p className="mb-[14px] text-[0.92rem] text-[var(--text2)]">
              {it.subtitle}
            </p>
            {it.body && (
              <p className="max-w-[46ch] text-[0.9rem] leading-[1.65] text-[var(--text2)]">
                {it.body}
              </p>
            )}
            {it.highlights?.length > 0 && (
              <ul className="mt-3 flex list-none flex-col gap-[7px]">
                {it.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="relative pl-[18px] text-[0.88rem] leading-[1.5] text-[var(--text2)] before:absolute before:left-[2px] before:top-[0.6em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-[var(--text3)] before:content-['']"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function BackgroundSection() {
  const eduItems = education.map((e) => ({
    period: e.period,
    title: e.degree,
    subtitle: e.school,
    body: e.detail,
    highlights: e.highlights,
  }));

  const expItems = experiences.map((x) => ({
    period: x.period,
    title: x.title,
    subtitle: `${x.company} · ${x.location}`,
    body: x.description,
    highlights: x.highlights,
  }));

  return (
    <section id="background" className="pb-24">
      <div className="grid grid-cols-2 gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <TimelineColumn label="Education" items={eduItems} />
        <TimelineColumn label="Experience" items={expItems} />
      </div>
    </section>
  );
}
