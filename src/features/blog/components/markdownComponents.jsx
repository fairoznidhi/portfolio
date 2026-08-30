export const markdownComponents = {
  h2: ({ children }) => (
    <h2 className="mb-5 mt-12 border-b border-border pb-3 text-[1.8rem] font-normal tracking-[-0.01em] text-[var(--text)]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-[1.1rem] font-medium text-[var(--text)]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-5 text-base leading-[1.85] text-[var(--text2)]">
      {children}
    </p>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="rounded border border-border bg-[var(--bg3)] px-[7px] py-[2px] text-[0.85em] text-[var(--accent)]">
        {children}
      </code>
    ) : (
      <code>{children}</code>
    ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-[10px] border border-border bg-[var(--bg2)] p-6 text-[0.82rem] leading-[1.7] text-[var(--text2)]">
      {children}
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-medium text-[var(--text)]">{children}</strong>
  ),
  ul: ({ children }) => <ul className="mb-5 list-disc pl-5">{children}</ul>,
  li: ({ children }) => (
    <li className="mb-[6px] text-base leading-[1.8] text-[var(--text2)]">
      {children}
    </li>
  ),
};
