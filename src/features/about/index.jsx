import { personalInfo } from "../../data/portfolio";
import SectionLabel from "../../components/SectionLabel";
import SkillsSection from "./components/SkillsSection";
import { experienceSince } from "./experience";

export default function AboutSection() {
  const experience = experienceSince(personalInfo.careerStart);

  return (
    <div id="about" className="pb-24">
      <SectionLabel>About</SectionLabel>
      <p className="max-w-[640px] text-[0.95rem] leading-[1.7] text-[var(--text2)]">
        I am a software engineer at Vivasoft, currently working as a frontend
        developer. I have been building web applications professionally for{" "}
        {experience}, and I am passionate about problem-solving and competitive
        programming.
      </p>
      <SkillsSection />
    </div>
  );
}
