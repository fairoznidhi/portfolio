import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Modal from "../../../components/Modal";

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

export default function PosterThumb({ image, title }) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  if (!image) return null;

  const handleClose = () => {
    setOpen(false);
    setZoom(1);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="block w-24 shrink-0 cursor-pointer self-start overflow-hidden rounded-md border border-border transition-opacity hover:opacity-80"
      >
        <img src={image} alt={title} className="h-auto w-full object-contain" />
      </button>

      <Modal open={open} onClose={handleClose} title={title}>
        <div className="relative h-full">
          <div className="scrollbar-thick h-full overflow-auto">
            <div
              className={
                zoom <= 1
                  ? "flex min-h-full items-center justify-center p-4"
                  : "flex min-h-full min-w-full p-4"
              }
            >
              <img
                src={image}
                alt={title}
                style={{ width: `${zoom * 100}%` }}
                className="h-auto max-w-none object-contain transition-[width] duration-150"
              />
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 flex w-fit -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-[var(--bg)] p-1 shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
            <button
              onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP))}
              disabled={zoom <= MIN_ZOOM}
              aria-label="Zoom out"
              className="rounded-full p-2 text-[var(--text2)] transition-colors hover:bg-[var(--bg3)] hover:text-[var(--text)] disabled:opacity-40 disabled:hover:bg-transparent"
            >
              <Minus size={16} strokeWidth={2} />
            </button>
            <span className="w-10 select-none text-center text-[0.75rem] text-[var(--text3)]">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP))}
              disabled={zoom >= MAX_ZOOM}
              aria-label="Zoom in"
              className="rounded-full p-2 text-[var(--text2)] transition-colors hover:bg-[var(--bg3)] hover:text-[var(--text)] disabled:opacity-40 disabled:hover:bg-transparent"
            >
              <Plus size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
