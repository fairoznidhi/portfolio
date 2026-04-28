import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import styles from './Blog.module.css';

export default function BlogList() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Link to="/" className={styles.back}>← Back</Link>
          <p className={styles.label}>Writing</p>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>Notes on networking, systems, and software engineering.</p>
        </div>

        <div className={styles.list}>
          {blogs.map((b, i) => (
            <Link key={b.id} to={`/blog/${b.id}`} className={styles.item}>
              <div className={styles.itemMeta}>
                <span className={styles.itemDate}>{new Date(b.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className={styles.itemRead}>{b.readTime}</span>
              </div>
              <h2 className={styles.itemTitle}>{b.title}</h2>
              <p className={styles.itemSubtitle}>{b.subtitle}</p>
              <div className={styles.itemTags}>
                {b.tags.map(t => <span key={t} className={styles.itemTag}>{t}</span>)}
              </div>
              <span className={styles.itemArrow}>↗</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
