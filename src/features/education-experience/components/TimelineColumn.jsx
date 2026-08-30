import SectionLabel from "../../../components/SectionLabel";
import TimelineItem from "./TimelineItem";

export default function TimelineColumn({ label, items }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <ol className="relative list-none pl-7 before:absolute before:bottom-[6px] before:left-[5px] before:top-[6px] before:w-[1.5px] before:bg-border before:content-['']">
        {items.map((it, i) => (
          <TimelineItem key={i} {...it} />
        ))}
      </ol>
    </div>
  );
}
