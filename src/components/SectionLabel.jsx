import { cn } from "@/lib/utils";

/**
 * Uppercase accent eyebrow used as the lead-in heading on every page/section.
 */
export default function SectionLabel({ children, className }) {
  return (
    <p
      className={cn(
        "mb-6 text-xs uppercase tracking-[0.12em] text-[var(--accent)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
