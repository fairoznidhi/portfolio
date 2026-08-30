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

  return (
    <div className="min-h-screen pb-20 pt-10">
      <div className="mx-auto max-w-[720px] px-8 max-[480px]:px-5">
        <Link
          to="/blog"
          className="mb-10 inline-block text-[0.8rem] text-[var(--text3)] transition-colors hover:text-[var(--accent)]"
        >
          <ArrowLeft size={13} strokeWidth={2} /> All posts
        </Link>

        <BlogPostHeader blog={blog} />

        <article className="leading-[1.8]">
          <ReactMarkdown components={markdownComponents}>
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
