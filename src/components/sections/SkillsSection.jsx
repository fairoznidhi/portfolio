import { skills } from "../../data/portfolio";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <div className={styles.wrap}>
      <p className={styles.label}>Skills</p>
      <dl className={styles.groups}>
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className={styles.group}>
            <dt className={styles.groupName}>{group}</dt>
            <dd className={styles.tags}>
              {items.map((it) => (
                <span key={it} className={styles.tag}>
                  {it}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
