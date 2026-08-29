import { ArrowUpRight } from 'lucide-react';
import PageShell from '../components/PageShell';
import { Card } from '@/components/ui/card';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <PageShell
      title="All Projects"
      subtitle="A collection of things I've built — from ML models to full-stack web apps."
    >
      <div className={styles.grid}>
        {projects.map((proj, i) => (
          <Card key={i} className="p-8 transition-transform duration-300 hover:-translate-y-1">
            <div className={styles.cardTop}>
              <div className={styles.status}>
                <span className={proj.status === 'Live' ? styles.statusLive : styles.statusOther} />
                {proj.status}
              </div>
              <div className={styles.actions}>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.action}>
                    GitHub <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className={styles.action}>
                    Live <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                )}
              </div>
            </div>
            <h2 className={styles.cardTitle}>{proj.title}</h2>
            <p className={styles.cardDesc}>{proj.description}</p>
            <div className={styles.tags}>
              {proj.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
