import { ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";
import SectionLabel from "../components/SectionLabel";
import { Card } from "@/components/ui/card";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <PageShell>
      <SectionLabel>Projects</SectionLabel>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 pb-24 max-[640px]:grid-cols-1">
        {projects.map((proj, i) => (
          <Card
            key={i}
            className="p-8 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-[6px] text-[0.75rem] text-[var(--text3)]">
                <span
                  className={
                    proj.status === "Live"
                      ? "h-[7px] w-[7px] rounded-full bg-[#4ade80] [animation:pulse_2s_infinite]"
                      : "h-[7px] w-[7px] rounded-full bg-[var(--text3)]"
                  }
                />
                {proj.status}
              </div>
              <div className="flex gap-3">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.75rem] text-[var(--text3)] transition-colors hover:text-[var(--accent)]"
                  >
                    GitHub <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.75rem] text-[var(--text3)] transition-colors hover:text-[var(--accent)]"
                  >
                    Live <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                )}
              </div>
            </div>
            <h2 className="mb-3 text-[1.6rem] font-normal text-[var(--text)]">
              {proj.title}
            </h2>
            <p className="mb-5 text-[0.875rem] leading-[1.7] text-[var(--text2)]">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-[6px]">
              {proj.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border bg-[var(--bg3)] px-[10px] py-1 text-[0.72rem] text-[var(--text3)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
