import { useReveal } from "../hooks/useReveal";
import homeStyles from "../pages/Home.module.css";

/**
 * Common page wrapper: reveal-on-scroll ref, top padding, centered inner column,
 * and an optional label / title / subtitle header.
 */
export default function PageShell({ title, subtitle, children }) {
  const ref = useReveal(homeStyles.visible);

  return (
    <div ref={ref} className={homeStyles.page}>
      <div className="mr-auto max-w-[1184px] px-8 max-[480px]:px-5">
        {(title || subtitle) && (
          <header className="mb-10 max-[480px]:mb-8">
            {title && (
              <h1 className="text-lg font-semibold tracking-[-0.01em] text-[var(--text)]">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-1.5 max-w-[52ch] text-sm leading-6 text-[var(--text2)]">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </div>
  );
}
