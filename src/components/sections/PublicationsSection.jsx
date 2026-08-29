import { ArrowUpRight, Download } from "lucide-react";
import { publications } from "../../data/portfolio";

export default function PublicationsSection() {
  return (
    <div id="publications">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
          Research
        </p>
        <h2 className="mb-14 text-[clamp(2rem,4vw,3rem)] font-normal tracking-[-0.02em] text-[var(--text)]">
          Publications
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        {publications.map((pub, i) => (
          <div
            key={i}
            className="rounded-[10px] border border-border bg-[var(--bg2)] p-8"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded bg-[var(--bg3)] px-2 py-[2px] text-[0.7rem] uppercase tracking-[0.1em] text-[var(--text3)]">
                {pub.type}
              </span>
              <span className="text-[0.75rem] text-[var(--text3)]">
                {pub.date}
              </span>
            </div>
            <div className="mb-3 text-[0.78rem] uppercase tracking-[0.06em] text-[var(--accent)]">
              {pub.venue}
            </div>
            {pub.authors && (
              <div className="mb-4 text-[0.85rem] italic leading-[1.4] text-[var(--text3)]">
                {pub.authors}
              </div>
            )}
            <h3 className="mb-6 text-[1.3rem] font-normal leading-[1.5] text-[var(--text)]">
              {pub.title}
            </h3>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {pub.link && pub.link !== "#" && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.85rem] text-[var(--accent)] transition-opacity hover:opacity-70"
                  >
                    Read paper <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                )}
                {pub.link && pub.pdf && (
                  <span className="select-none text-[0.8rem] text-[var(--border)]">
                    |
                  </span>
                )}
                {pub.pdf && pub.pdf !== "#" && (
                  <a
                    href={pub.pdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.85rem] text-[var(--accent)] transition-opacity hover:opacity-70"
                  >
                    Download PDF <Download size={13} strokeWidth={2} />
                  </a>
                )}
              </div>
              {pub.doi && (
                <span
                  className="cursor-pointer select-all rounded bg-transparent px-2 py-1 text-[0.75rem] text-[var(--text3)] transition-all hover:bg-[var(--bg3)] hover:text-[var(--accent)]"
                  onClick={() => {
                    navigator.clipboard.writeText(pub.doi);
                    const el = document.getElementById(`doi-${i}`);
                    if (el) {
                      el.innerText = "✓ Copied!";
                      setTimeout(
                        () => (el.innerText = `DOI: ${pub.doi}`),
                        2000,
                      );
                    }
                  }}
                  id={`doi-${i}`}
                  title="Click to copy DOI"
                >
                  DOI: {pub.doi}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
