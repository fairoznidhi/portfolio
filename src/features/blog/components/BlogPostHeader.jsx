const tag =
  "rounded-full border border-[rgb(var(--accent-rgb)/0.2)] bg-[rgb(var(--accent-rgb)/0.1)] px-[10px] py-[3px] text-[0.72rem] text-[var(--accent)]";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPostHeader({ blog }) {
  return (
    <header className="mb-14 border-b border-border pb-10">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {blog.tags.map((t) => (
          <span key={t} className={tag}>
            {t}
          </span>
        ))}
        <span className="text-[0.78rem] text-[var(--text3)]">
          {formatDate(blog.date)}
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
  );
}
