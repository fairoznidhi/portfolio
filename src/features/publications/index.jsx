import SectionLabel from "../../components/SectionLabel";
import { publications } from "../../data/portfolio";
import PublicationGroup from "./components/PublicationGroup";

const groups = [
  { key: "conference", label: "Conference" },
  { key: "journal", label: "Journal" },
  { key: "thesis", label: "Thesis" },
];

export default function PublicationsSection() {
  return (
    <div id="publications" className="pb-24">
      <SectionLabel>Publications</SectionLabel>
      <div className="flex flex-col gap-12">
        {groups.map(({ key, label }) => (
          <PublicationGroup
            key={key}
            label={label}
            items={publications.filter((p) => p.category === key)}
          />
        ))}
      </div>
    </div>
  );
}
