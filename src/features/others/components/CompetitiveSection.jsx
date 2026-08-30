import { ArrowUpRight, Trophy } from "lucide-react";
import { competitive, achievements } from "../../../data/portfolio";

const subTitle =
  "mb-6 text-2xl font-normal text-[var(--text)]";

export default function CompetitiveSection() {
  return (
    <div>
      <h3 className={subTitle}>Coding Profiles</h3>
      <div className="grid grid-cols-3 gap-4 max-[768px]:grid-cols-1">
        {competitive.map((cp) => (
          <a
            key={cp.platform}
            href={cp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-[10px] border border-border bg-[var(--bg2)] p-7 transition-all duration-200"
          >
            <div className="mb-2 text-xs uppercase tracking-[0.1em] text-[var(--text3)]">
              {cp.platform}
            </div>
            <div className="mb-5 text-[0.95rem]" style={{ color: cp.color }}>
              @{cp.handle}
            </div>
            <div className="mb-[6px] flex items-baseline gap-2">
              <span className="text-[2rem] text-[var(--text)]">{cp.rating}</span>
              <span className="text-[0.8rem] text-[var(--text3)]">{cp.rank}</span>
            </div>
            <div className="text-[0.8rem] text-[var(--text3)]">
              {cp.solved} problems solved
            </div>
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="absolute right-6 top-6 text-[var(--text3)] transition-colors group-hover:text-[var(--accent)]"
            />
          </a>
        ))}
      </div>

      <div>
        <h3 className="mb-6 mt-14 text-2xl font-normal text-[var(--text)]">
          Contests &amp; Awards
        </h3>
        <div className="flex flex-col gap-3">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-lg border border-border bg-[var(--bg2)] px-5 py-4"
            >
              <Trophy size={18} strokeWidth={1.75} className="shrink-0" />
              <div>
                <div className="mb-[2px] text-[0.9rem] text-[var(--text)]">
                  {a.title}
                </div>
                <div className="text-[0.8rem] text-[var(--accent)]">
                  {a.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
