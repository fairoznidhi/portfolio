import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";
import { blogs } from "../data/blogs";

export default function BlogList() {
  return (
    <PageShell
      title="Blog"
      subtitle="Notes on networking, systems, and software engineering."
    >
      <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-border bg-border">
        {blogs.map((b) => (
          <Link
            key={b.id}
            to="/blog/$id"
            params={{ id: b.id }}
            className="group relative flex flex-col gap-3 bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg2)]"
          >
            <div className="flex items-center gap-4">
              <span className="text-[0.78rem] text-[var(--text3)]">
                {new Date(b.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-[0.78rem] text-[var(--text3)]">
                {b.readTime}
              </span>
            </div>
            <h2 className="text-[1.6rem] font-normal leading-[1.3] text-[var(--text)]">
              {b.title}
            </h2>
            <p className="text-[0.9rem] leading-[1.6] text-[var(--text2)]">
              {b.subtitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {b.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[rgb(var(--accent-rgb)/0.2)] bg-[rgb(var(--accent-rgb)/0.1)] px-[10px] py-[3px] text-[0.72rem] text-[var(--accent)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="absolute right-8 top-8 text-[var(--text3)] transition-colors group-hover:text-[var(--accent)]"
            />
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
