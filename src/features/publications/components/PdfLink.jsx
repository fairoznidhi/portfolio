import { useState } from "react";
import { Download, BookOpen } from "lucide-react";
import Modal from "../../../components/Modal";

export default function PdfLink({ pdf, title }) {
  const [open, setOpen] = useState(false);

  if (!pdf || pdf === "#") return null;

  return (
    <>
      <span className="inline-flex items-center text-[0.75rem] text-[var(--text3)]">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1 rounded bg-transparent px-2 py-1 text-[0.75rem] leading-none text-[var(--text3)] transition-colors hover:bg-[var(--bg3)] hover:text-[var(--accent)]"
        >
          Read PDF <BookOpen size={13} strokeWidth={2} />
        </button>
        <span className="select-none px-1.5 text-[var(--border)]">|</span>
        <a
          href={pdf}
          download
          className="inline-flex items-center gap-1 rounded px-2 py-1 text-[0.75rem] leading-none text-[var(--text3)] transition-colors hover:bg-[var(--bg3)] hover:text-[var(--accent)]"
        >
          Download <Download size={13} strokeWidth={2} />
        </a>
      </span>

      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        <iframe
          src={pdf}
          title={title}
          className="h-full w-full border-0"
        />
      </Modal>
    </>
  );
}
