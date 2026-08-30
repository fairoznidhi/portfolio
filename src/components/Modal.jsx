import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/**
 * Lightweight centered modal: click backdrop or press Esc to close.
 */
export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px] max-[480px]:p-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-[90vh] w-full max-w-[900px] flex-col overflow-hidden rounded-[12px] border border-border bg-[var(--bg)] shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-[480px]:h-full max-[480px]:rounded-none"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <span className="truncate text-[0.9rem] font-semibold text-[var(--text)]">
            {title}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded p-1 text-[var(--text3)] transition-colors hover:bg-[var(--bg3)] hover:text-[var(--text)]"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-[var(--bg2)]">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
