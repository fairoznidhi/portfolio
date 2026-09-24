import { FileText } from "lucide-react";

export function AbstractToggle({ abstract, open, onToggle }) {
  if (!abstract) return null;

  return (
    <button
      onClick={onToggle}
      aria-expanded={open}
      className="inline-flex items-center gap-1 rounded px-2 py-1 text-[0.75rem] leading-none text-[var(--text3)] transition-colors hover:bg-[var(--bg3)] hover:text-[var(--accent)]"
    >
      Abstract <FileText size={13} strokeWidth={2} />
    </button>
  );
}

export function AbstractPanel({ abstract }) {
  if (!abstract) return null;

  return (
    <p className="min-w-0 flex-1 rounded-md border border-border bg-[var(--bg2)] p-3 text-[0.8rem] leading-[1.6] text-[var(--text2)]">
      {abstract}
    </p>
  );
}
