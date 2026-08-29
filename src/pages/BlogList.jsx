import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '../components/PageShell';
import { blogs } from '../data/blogs';
import styles from './Blog.module.css';

export default function BlogList() {
  return (
    <PageShell
      title="Blog"
      subtitle="Notes on networking, systems, and software engineering."
    >
      <div className={styles.list}>
        {blogs.map((b) => (
          <Link key={b.id} to={`/blog/${b.id}`} className={styles.item}>
            <div className={styles.itemMeta}>
              <span className={styles.itemDate}>
                {new Date(b.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className={styles.itemRead}>{b.readTime}</span>
            </div>
            <h2 className={styles.itemTitle}>{b.title}</h2>
            <p className={styles.itemSubtitle}>{b.subtitle}</p>
            <div className={styles.itemTags}>
              {b.tags.map(t => <span key={t} className={styles.itemTag}>{t}</span>)}
            </div>
            <ArrowUpRight className={styles.itemArrow} size={16} strokeWidth={2} />
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
