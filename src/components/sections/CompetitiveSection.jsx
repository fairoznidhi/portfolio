import { ArrowUpRight, Trophy } from "lucide-react";
import { competitive, achievements } from "../../data/portfolio";
import styles from "../../pages/Home.module.css";

export default function CompetitiveSection() {
  return (
    <div>
      <h3 className={styles.subTitle} style={{ marginTop: 0 }}>
        Coding Profiles
      </h3>
      <div className={styles.cpGrid}>
        {competitive.map((cp) => (
          <a
            key={cp.platform}
            href={cp.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cpCard}
          >
            <div className={styles.cpPlatform}>{cp.platform}</div>
            <div className={styles.cpHandle} style={{ color: cp.color }}>
              @{cp.handle}
            </div>
            <div className={styles.cpRating}>
              <span className={styles.cpRatingNum}>{cp.rating}</span>
              <span className={styles.cpRank}>{cp.rank}</span>
            </div>
            <div className={styles.cpSolved}>{cp.solved} problems solved</div>
            <ArrowUpRight className={styles.cpArrow} size={16} strokeWidth={2} />
          </a>
        ))}
      </div>

      <div className={styles.achievementsWrap}>
        <h3 className={styles.subTitle}>Contests &amp; Awards</h3>
        <div className={styles.achievements}>
          {achievements.map((a, i) => (
            <div key={i} className={styles.achievement}>
              <Trophy
                className={styles.achievementIcon}
                size={18}
                strokeWidth={1.75}
              />
              <div>
                <div className={styles.achievementTitle}>{a.title}</div>
                <div className={styles.achievementResult}>{a.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
