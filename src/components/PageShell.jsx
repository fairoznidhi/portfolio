/**
 * Common page wrapper: top padding + centered inner column left-aligned to the
 * sidebar edge, plus an optional title / subtitle header.
 */
export default function PageShell({ title, subtitle, children }) {
  return (
    <div className="pt-10">
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
