import { useReveal } from "../hooks/useReveal";
import AboutSection from "../components/sections/AboutSection";
import styles from "./Home.module.css";

export default function About() {
  const ref = useReveal(styles.visible);
  return (
    <div ref={ref} className={styles.page}>
      <AboutSection />
    </div>
  );
}
