import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';
import styles from './BlogPost.module.css';

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) return <Navigate to="/blog" replace />;

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <Link to="/blog" className={styles.back}>← All posts</Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            {blog.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            <span className={styles.date}>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className={styles.read}>{blog.readTime}</span>
          </div>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.subtitle}>{blog.subtitle}</p>
        </header>

        <article className={styles.article}>
          <ReactMarkdown
            components={{
              h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
              h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
              p: ({ children }) => <p className={styles.p}>{children}</p>,
              code: ({ inline, children }) =>
                inline
                  ? <code className={styles.inlineCode}>{children}</code>
                  : <code>{children}</code>,
              pre: ({ children }) => <pre className={styles.pre}>{children}</pre>,
              strong: ({ children }) => <strong className={styles.strong}>{children}</strong>,
              ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
              li: ({ children }) => <li className={styles.li}>{children}</li>,
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </article>

        <div className={styles.footer}>
          <Link to="/blog" className={styles.backLink}>← Back to all posts</Link>
        </div>
      </div>
    </div>
  );
}
