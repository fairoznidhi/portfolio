import PageShell from "../../components/PageShell";
import SectionLabel from "../../components/SectionLabel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CompetitiveSection from "./components/CompetitiveSection";
import LeadershipSection from "./components/LeadershipSection";

const tabs = [
  {
    value: "cp",
    label: "Competitive Programming",
    Component: CompetitiveSection,
  },
  {
    value: "extra",
    label: "Extra‑Curricular Activities",
    Component: LeadershipSection,
  },
];

export default function Others() {
  return (
    <PageShell>
      <SectionLabel>Others</SectionLabel>
      <Tabs defaultValue={tabs[0].value} className="w-full pb-24">
        <div className="sticky top-[var(--nav-h)] z-[90] mb-8 bg-[var(--bg)] pt-4">
          <TabsList className="flex-wrap">
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {tabs.map(({ value, Component }) => (
          <TabsContent key={value} value={value}>
            <Component />
          </TabsContent>
        ))}
      </Tabs>
    </PageShell>
  );
}
