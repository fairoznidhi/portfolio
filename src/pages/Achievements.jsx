import { useReveal } from "../hooks/useReveal";
import CompetitiveSection from "../components/sections/CompetitiveSection";
import LeadershipSection from "../components/sections/LeadershipSection";
import styles from "./Home.module.css";

export default function Achievements() {
  const ref = useReveal(styles.visible);
  return (
    <div ref={ref} className={styles.page}>
      <CompetitiveSection />
      <LeadershipSection />
    </div>
  );
}
