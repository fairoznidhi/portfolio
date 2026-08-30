import { education, experiences } from "../../data/portfolio";
import TimelineColumn from "./components/TimelineColumn";

const eduItems = education.map((e) => ({
  period: e.period,
  title: e.degree,
  subtitle: e.school,
  body: e.detail,
  highlights: e.highlights,
}));

const expItems = experiences.map((x) => ({
  period: x.period,
  title: x.title,
  subtitle: `${x.company} · ${x.location}`,
  body: x.description,
  highlights: x.highlights,
}));

export default function EducationExperienceSection() {
  return (
    <section id="background" className="pb-24">
      <div className="grid grid-cols-2 gap-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <TimelineColumn label="Education" items={eduItems} />
        <TimelineColumn label="Experience" items={expItems} />
      </div>
    </section>
  );
}
