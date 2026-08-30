import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Icon button that copies `value` to the clipboard and briefly swaps to a
 * check-mark with a Framer Motion transition.
 */
export default function CopyButton({
  value,
  size = 13,
  label = "Copy",
  className,
  duration = 1500,
}) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), duration);
    });
  };

  return (
    <motion.button
      type="button"
      onClick={copy}
      whileTap={{ scale: 0.85 }}
      aria-label={copied ? `${label} copied` : label}
      title={copied ? "Copied!" : label}
      style={{ width: size + 2, height: size + 2 }}
      className={cn(
        "relative grid shrink-0 place-items-center border-0 bg-transparent p-0 text-[var(--text3)] transition-colors hover:text-[var(--accent)]",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.18 }}
            className="absolute"
          >
            <Check size={size} strokeWidth={2} className="text-[var(--accent)]" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.18 }}
            className="absolute"
          >
            <Copy size={size} strokeWidth={1.75} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
