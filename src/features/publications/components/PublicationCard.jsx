import AuthorList from "./AuthorList";
import PdfLink from "./PdfLink";
import DoiTag from "./DoiTag";

export default function PublicationCard({ pub }) {
  return (
    <div className="group border-l-2 border-border pl-5">
      <h3 className="mb-1 text-[1.05rem] font-semibold leading-[1.4] text-[var(--text)]">
        {pub.title}
      </h3>
      <AuthorList authors={pub.authors} />
      <p className="text-[0.85rem] italic leading-[1.5] text-[var(--text3)]">
        {pub.venue}
        {pub.date && ` · ${pub.date}`}
      </p>
      {(pub.pdf || pub.doi) && (
        <div className="mt-3 flex flex-wrap items-center text-[0.75rem]">
          <PdfLink pdf={pub.pdf} title={pub.title} />
          {pub.pdf && pub.doi && (
            <span className="select-none px-1.5 text-[var(--border)]">|</span>
          )}
          <DoiTag doi={pub.doi} link={pub.link} />
        </div>
      )}
    </div>
  );
}
