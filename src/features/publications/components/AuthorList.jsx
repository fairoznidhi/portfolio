const ME = "Tasfi Fairoz Nidhi";

export default function AuthorList({ authors }) {
  if (!authors) return null;

  return (
    <p className="mb-2 text-[0.9rem] leading-[1.5] text-[var(--text2)]">
      {authors.split(",").map((name, i, arr) => {
        const trimmed = name.trim();
        return (
          <span key={i}>
            {trimmed === ME ? (
              <strong className="font-semibold text-[var(--text)]">
                {trimmed}
              </strong>
            ) : (
              trimmed
            )}
            {i < arr.length - 1 && ", "}
          </span>
        );
      })}
    </p>
  );
}
