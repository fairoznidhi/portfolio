import { useReveal } from "../hooks/useReveal";
import BackgroundSection from "../components/sections/BackgroundSection";
import styles from "./Home.module.css";

export default function Experience() {
  const ref = useReveal(styles.visible);
  return (
    <div ref={ref} className={styles.page}>
      <BackgroundSection />
    </div>
  );
}
