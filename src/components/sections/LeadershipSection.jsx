import { leadership } from "../../data/portfolio";
import styles from "../../pages/Home.module.css";

export default function LeadershipSection() {
  return (
    <div>
      <div className={styles.leadershipGrid}>
        {leadership.map((l, i) => (
          <div key={i} className={styles.leadershipCard}>
            <div className={styles.leadershipRole}>{l.role}</div>
            <div className={styles.leadershipOrg}>{l.org}</div>
            <div className={styles.leadershipMeta}>
              {l.period} · {l.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
