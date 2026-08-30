import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogCard({ blog }) {
  return (
    <Link
      to="/blog/$id"
      params={{ id: blog.id }}
      className="group relative flex flex-col gap-3 bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg2)]"
    >
      <div className="flex items-center gap-4">
        <span className="text-[0.78rem] text-[var(--text3)]">
          {formatDate(blog.date)}
        </span>
        <span className="text-[0.78rem] text-[var(--text3)]">
          {blog.readTime}
        </span>
      </div>
      <h2 className="text-[1.6rem] font-normal leading-[1.3] text-[var(--text)]">
        {blog.title}
      </h2>
      <p className="text-[0.9rem] leading-[1.6] text-[var(--text2)]">
        {blog.subtitle}
      </p>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((t) => (
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
  );
}
