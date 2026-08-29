import { education, experiences } from "../../data/portfolio";
import styles from "./BackgroundSection.module.css";

function TimelineColumn({ label, items }) {
  return (
    <div className={styles.column}>
      <p className={styles.colLabel}>{label}</p>
      <ol className={styles.timeline}>
        {items.map((it, i) => (
          <li key={i} className={styles.entry}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.period}>{it.period}</span>
            <h3 className={styles.entryTitle}>{it.title}</h3>
            <p className={styles.entrySub}>{it.subtitle}</p>
            {it.body && <p className={styles.entryBody}>{it.body}</p>}
            {it.highlights?.length > 0 && (
              <ul className={styles.bullets}>
                {it.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function BackgroundSection() {
  const eduItems = education.map((e) => ({
    period: e.period,
    title: e.degree,
    subtitle: e.school,
    body: e.detail,
    highlights: e.highlights,
  }));

  const expItems = experiences.map((x) => ({
    period: x.period,
    title: x.title,
    subtitle: `${x.company} · ${x.location}`,
    body: x.description,
    highlights: x.highlights,
  }));

  return (
    <section className={styles.section} id="background">
      <div className={styles.grid}>
        <TimelineColumn label="Education" items={eduItems} />
        <TimelineColumn label="Experience" items={expItems} />
      </div>
    </section>
  );
}
