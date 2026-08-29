import { personalInfo } from "../../data/portfolio";
import SkillsSection from "./SkillsSection";

const label =
  "mb-3 text-xs uppercase tracking-[0.12em] text-[var(--accent)]";
const title =
  "mb-14 text-[clamp(2rem,4vw,3rem)] font-normal tracking-[-0.02em] text-[var(--text)]";

export default function AboutSection() {
  return (
    <div id="about">
      <div>
        <p className={label}>About</p>
        <h2 className={title}>Hello</h2>
      </div>
      <p className="max-w-[640px] text-[1.15rem] leading-[1.9] text-[var(--text2)]">
        {personalInfo.bio}
      </p>
      <SkillsSection />
    </div>
  );
}
