import { useState } from "react";
import AuthorList from "./AuthorList";
import PdfLink from "./PdfLink";
import DoiTag from "./DoiTag";
import PosterThumb from "./PosterThumb";
import { BibtexToggle, BibtexPanel } from "./BibtexButton";
import { AbstractToggle, AbstractPanel } from "./AbstractButton";

export default function PublicationCard({ pub }) {
  const [openPanel, setOpenPanel] = useState(null);
  const showBibtex = openPanel === "bibtex";
  const showAbstract = openPanel === "abstract";

  return (
    <div className="group flex items-start gap-4 border-l-2 border-border pl-5">
      <PosterThumb image={pub.image} title={pub.title} />
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-[1.05rem] font-semibold leading-[1.4] text-[var(--text)]">
          {pub.title}
        </h3>
        <AuthorList authors={pub.authors} />
        <p className="text-[0.85rem] italic leading-[1.5] text-[var(--text3)]">
          {pub.venue}
          {pub.date && ` · ${pub.date}`}
        </p>
        {(pub.pdf || pub.doi || pub.bibtex || pub.abstract) && (
          <div className="mt-3 flex flex-wrap items-center text-[0.75rem]">
            <PdfLink pdf={pub.pdf} title={pub.title} />
            {pub.pdf && pub.doi && (
              <span className="select-none px-1.5 text-[var(--border)]">|</span>
            )}
            <DoiTag doi={pub.doi} link={pub.link} />
            {(pub.pdf || pub.doi) && pub.bibtex && (
              <span className="select-none px-1.5 text-[var(--border)]">|</span>
            )}
            <BibtexToggle
              bibtex={pub.bibtex}
              open={showBibtex}
              onToggle={() =>
                setOpenPanel((p) => (p === "bibtex" ? null : "bibtex"))
              }
            />
            {(pub.pdf || pub.doi || pub.bibtex) && pub.abstract && (
              <span className="select-none px-1.5 text-[var(--border)]">|</span>
            )}
            <AbstractToggle
              abstract={pub.abstract}
              open={showAbstract}
              onToggle={() =>
                setOpenPanel((p) => (p === "abstract" ? null : "abstract"))
              }
            />
          </div>
        )}

        {showBibtex && (
          <div className="mt-2">
            <BibtexPanel bibtex={pub.bibtex} />
          </div>
        )}
        {showAbstract && (
          <div className="mt-2">
            <AbstractPanel abstract={pub.abstract} />
          </div>
        )}
      </div>
    </div>
  );
}
