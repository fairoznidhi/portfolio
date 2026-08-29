import { leadership } from "../../data/portfolio";
import styles from "../../pages/Home.module.css";

export default function LeadershipSection() {
  return (
    <section className={styles.section} id="leadership">
      <div className={styles.sectionInner}>
        <div data-reveal className={styles.reveal}>
          <p className={styles.sectionLabel}>Community</p>
          <h2 className={styles.sectionTitle}>Leadership &amp; Community</h2>
        </div>
        <div className={styles.leadershipGrid}>
          {leadership.map((l, i) => (
            <div
              key={i}
              data-reveal
              className={`${styles.reveal} ${styles.leadershipCard}`}
            >
              <div className={styles.leadershipRole}>{l.role}</div>
              <div className={styles.leadershipOrg}>{l.org}</div>
              <div className={styles.leadershipMeta}>
                {l.period} · {l.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
