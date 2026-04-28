import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Link to="/" className={styles.back}>← Back</Link>
          <p className={styles.label}>Work</p>
          <h1 className={styles.title}>All Projects</h1>
          <p className={styles.subtitle}>A collection of things I've built — from ML models to full-stack web apps.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((proj, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.status}>
                  <span className={proj.status === 'Live' ? styles.statusLive : styles.statusOther} />
                  {proj.status}
                </div>
                <div className={styles.actions}>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.action}>
                      GitHub ↗
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className={styles.action}>
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
              <h2 className={styles.cardTitle}>{proj.title}</h2>
              <p className={styles.cardDesc}>{proj.description}</p>
              <div className={styles.tags}>
                {proj.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
