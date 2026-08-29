import PageShell from "../components/PageShell";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CompetitiveSection from "../components/sections/CompetitiveSection";
import LeadershipSection from "../components/sections/LeadershipSection";

export default function Others() {
  return (
    <PageShell>
      <Tabs defaultValue="cp" className="w-full">
        <TabsList className="mb-12">
          <TabsTrigger value="cp">Competitive Programming</TabsTrigger>
          <TabsTrigger value="extra">Extra&#8209;Curricular Activities</TabsTrigger>
        </TabsList>
        <TabsContent value="cp">
          <CompetitiveSection />
        </TabsContent>
        <TabsContent value="extra">
          <LeadershipSection />
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}
