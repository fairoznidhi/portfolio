import { personalInfo } from "../../data/portfolio";
import SkillsSection from "./SkillsSection";
import styles from "../../pages/Home.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.sectionInner}>
        <div data-reveal className={styles.reveal}>
          <p className={styles.sectionLabel}>About</p>
          <h2 className={styles.sectionTitle}>Hello</h2>
        </div>
        <div data-reveal className={styles.reveal}>
          <p className={styles.aboutText}>{personalInfo.bio}</p>
        </div>
        <div data-reveal className={styles.reveal}>
          <SkillsSection />
        </div>
      </div>
    </section>
  );
}
