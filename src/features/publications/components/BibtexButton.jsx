import { Quote } from "lucide-react";
import CopyButton from "../../../components/CopyButton";

export function BibtexToggle({ bibtex, open, onToggle }) {
  if (!bibtex) return null;

  return (
    <button
      onClick={onToggle}
      aria-expanded={open}
      className="inline-flex items-center gap-1 rounded px-2 py-1 text-[0.75rem] leading-none text-[var(--text3)] transition-colors hover:bg-[var(--bg3)] hover:text-[var(--accent)]"
    >
      BibTeX <Quote size={13} strokeWidth={2} />
    </button>
  );
}

export function BibtexPanel({ bibtex }) {
  if (!bibtex) return null;

  return (
    <div className="relative min-w-0 flex-1 rounded-md border border-border bg-[var(--bg2)] p-3">
      <CopyButton
        value={bibtex}
        label="Copy BibTeX"
        className="absolute right-2 top-2"
      />
      <pre className="scrollbar-thick overflow-x-auto pr-6 text-[0.72rem] leading-[1.6] text-[var(--text2)]">
        {bibtex}
      </pre>
    </div>
  );
}
