import { Link, Navigate, useParams } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { blogs } from "../data/blogs";

const tag =
  "rounded-full border border-[rgb(var(--accent-rgb)/0.2)] bg-[rgb(var(--accent-rgb)/0.1)] px-[10px] py-[3px] text-[0.72rem] text-[var(--accent)]";

export default function BlogPost() {
  const { id } = useParams({ from: "/blog/$id" });
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen pb-20 pt-10">
      <div className="mx-auto max-w-[720px] px-8 max-[480px]:px-5">
        <Link
          to="/blog"
          className="mb-10 inline-block text-[0.8rem] text-[var(--text3)] transition-colors hover:text-[var(--accent)]"
        >
          <ArrowLeft size={13} strokeWidth={2} /> All posts
        </Link>

        <header className="mb-14 border-b border-border pb-10">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {blog.tags.map((t) => (
              <span key={t} className={tag}>
                {t}
              </span>
            ))}
            <span className="text-[0.78rem] text-[var(--text3)]">
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-[0.78rem] text-[var(--text3)]">
              {blog.readTime}
            </span>
          </div>
          <h1 className="mb-5 text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[var(--text)]">
            {blog.title}
          </h1>
          <p className="text-[1.05rem] leading-[1.7] text-[var(--text2)]">
            {blog.subtitle}
          </p>
        </header>

        <article className="leading-[1.8]">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="mb-5 mt-12 border-b border-border pb-3 text-[1.8rem] font-normal tracking-[-0.01em] text-[var(--text)]">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mb-3 mt-8 text-[1.1rem] font-medium text-[var(--text)]">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-5 text-base leading-[1.85] text-[var(--text2)]">
                  {children}
                </p>
              ),
              code: ({ inline, children }) =>
                inline ? (
                  <code className="rounded border border-border bg-[var(--bg3)] px-[7px] py-[2px] text-[0.85em] text-[var(--accent)]">
                    {children}
                  </code>
                ) : (
                  <code>{children}</code>
                ),
              pre: ({ children }) => (
                <pre className="my-6 overflow-x-auto rounded-[10px] border border-border bg-[var(--bg2)] p-6 text-[0.82rem] leading-[1.7] text-[var(--text2)]">
                  {children}
                </pre>
              ),
              strong: ({ children }) => (
                <strong className="font-medium text-[var(--text)]">
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul className="mb-5 list-disc pl-5">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="mb-[6px] text-base leading-[1.8] text-[var(--text2)]">
                  {children}
                </li>
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </article>

        <div className="mt-20 border-t border-border pt-8">
          <Link
            to="/blog"
            className="text-[0.875rem] text-[var(--accent)] transition-opacity hover:opacity-70"
          >
            <ArrowLeft size={13} strokeWidth={2} /> Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
