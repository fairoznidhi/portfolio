import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageShell from "../../components/PageShell";
import SectionLabel from "../../components/SectionLabel";
import { cn } from "@/lib/utils";
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

const SPRING = { type: "spring", stiffness: 400, damping: 32 };

export default function Others() {
  const [active, setActive] = useState(tabs[0].value);
  const ActiveComponent = tabs.find((t) => t.value === active).Component;

  return (
    <PageShell>
      <SectionLabel>Others</SectionLabel>

      <div className="sticky top-[var(--nav-h)] z-[90] mb-8 bg-[var(--bg)] pt-4">
        <div className="inline-flex items-center gap-1 rounded-[6px] border border-border bg-[var(--bg2)] p-1">
          {tabs.map((t) => {
            const isActive = t.value === active;
            return (
              <button
                key={t.value}
                onClick={() => setActive(t.value)}
                className={cn(
                  "relative cursor-pointer whitespace-nowrap rounded-[4px] bg-transparent px-4 py-2 text-[0.95rem] font-semibold outline-none transition-colors",
                  isActive
                    ? "text-[var(--text)]"
                    : "text-[var(--text2)] hover:text-[var(--text)]",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="others-tab-active"
                    transition={SPRING}
                    className="absolute inset-0 rounded-[4px] bg-[var(--bg)] shadow-[0_1px_3px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]"
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </PageShell>
  );
}
