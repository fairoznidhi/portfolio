import { useReveal } from "../hooks/useReveal";
import PublicationsSection from "../components/sections/PublicationsSection";
import styles from "./Home.module.css";

export default function Publications() {
  const ref = useReveal(styles.visible);
  return (
    <div ref={ref} className={styles.page}>
      <PublicationsSection />
    </div>
  );
}
