import { Link, Navigate, useParams } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { blogs } from "../../data/blogs";
import BlogPostHeader from "./components/BlogPostHeader";
import { markdownComponents } from "./components/markdownComponents";

export default function BlogPost() {
  const { id } = useParams({ from: "/blog/$id" });
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <Navigate to="/blog" replace />;

  if (blog.embed) {
    return (
      <div className="fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-50 flex flex-col bg-[var(--bg)]">
        <div className="flex h-9 shrink-0 items-center border-b border-border px-5">
          <Link
            to="/blog"
            className="text-[0.8rem] text-[var(--text3)] transition-colors hover:text-[var(--accent)]"
          >
            <ArrowLeft size={13} strokeWidth={2} /> All posts
          </Link>
        </div>
        <iframe
          src={blog.embed}
          title={blog.title}
          className="min-h-0 w-full flex-1 border-0"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 pt-10">
      <div
        className={`mx-auto px-8 max-[480px]:px-5 ${blog.embed ? "max-w-[960px]" : "max-w-[720px]"}`}
      >
        <Link
          to="/blog"
          className="mb-10 inline-block text-[0.8rem] text-[var(--text3)] transition-colors hover:text-[var(--accent)]"
        >
          <ArrowLeft size={13} strokeWidth={2} /> All posts
        </Link>

        <BlogPostHeader blog={blog} />

        {blog.embed ? (
          <iframe
            src={blog.embed}
            title={blog.title}
            loading="lazy"
            className="h-[85vh] w-full rounded-xl border border-border"
          />
        ) : (
          <article className="leading-[1.8]">
            <ReactMarkdown components={markdownComponents}>
              {blog.content}
            </ReactMarkdown>
          </article>
        )}

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
