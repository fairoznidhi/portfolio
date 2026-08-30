import PageShell from "../../components/PageShell";
import SectionLabel from "../../components/SectionLabel";
import { blogs } from "../../data/blogs";
import BlogCard from "./components/BlogCard";

export { default as BlogPost } from "./BlogPost";

export default function BlogList() {
  return (
    <PageShell>
      <SectionLabel>Blogs</SectionLabel>
      <div className="mb-24 flex flex-col gap-px overflow-hidden rounded-xl border border-border bg-border">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
    </PageShell>
  );
}
