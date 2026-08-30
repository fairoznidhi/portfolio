export default function TimelineItem({ period, title, subtitle, body, highlights }) {
  return (
    <li className="relative pb-11 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-7 top-1 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_var(--bg)]"
      />
      <span className="mb-3 inline-block rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] px-[10px] py-[3px] text-[0.8rem] font-semibold text-[var(--accent)]">
        {period}
      </span>
      <h3 className="mb-1 text-[1.15rem] font-bold tracking-[-0.01em] text-[var(--text)]">
        {title}
      </h3>
      <p className="mb-[14px] text-[0.92rem] text-[var(--text2)]">{subtitle}</p>
      {body && (
        <p className="max-w-[46ch] text-[0.9rem] leading-[1.65] text-[var(--text2)]">
          {body}
        </p>
      )}
      {highlights?.length > 0 && (
        <ul className="mt-3 flex list-none flex-col gap-[7px]">
          {highlights.map((h, j) => (
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
  );
}
