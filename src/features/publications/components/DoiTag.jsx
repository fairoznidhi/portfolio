import { ExternalLink } from "lucide-react";

export default function DoiTag({ doi, link }) {
  if (!doi) return null;

  const href = link || `https://doi.org/${doi}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Open DOI"
      className="inline-flex items-center gap-1 rounded px-2 py-1 text-[0.75rem] leading-none text-[var(--text3)] transition-colors hover:bg-[var(--bg3)] hover:text-[var(--accent)]"
    >
      DOI: {doi}
      <ExternalLink size={13} strokeWidth={2} />
    </a>
  );
}
