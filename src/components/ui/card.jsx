import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a flicker-free hover treatment: two layers that fade in on hover —
 * a soft accent surface tint (top-weighted) and a 1px masked gradient stroke
 * (accent at the top fading to --border). Uses inline styles for the mask
 * compositing that Tailwind utilities can't express.
 */
const Card = React.forwardRef(function Card(
  { className, children, as: Tag = "div", ...props },
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        "group relative rounded-xl border border-border bg-card transition-colors duration-300 hover:border-transparent",
        className,
      )}
      {...props}
    >
      {/* surface tint */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[11px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(180deg, rgb(var(--accent2-rgb) / 0.10) 0%, transparent 30%)",
        }}
      />
      {/* gradient stroke */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-xl p-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(180deg, rgb(var(--accent-rgb) / 0.85) 0%, var(--border) 40%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
      />
      <div className="relative">{children}</div>
    </Tag>
  );
});

export { Card };
