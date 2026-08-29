import { personalInfo } from "../../data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="pl-[max(256px,calc(50%-720px+256px))] max-[980px]:pl-0">
      <div className="border-t border-border bg-[var(--bg2)] py-[18px]">
        <div className="mr-auto flex w-full max-w-[1184px] items-center justify-between px-8 text-[0.78rem] text-[var(--text3)] max-[900px]:flex-col max-[900px]:gap-4 max-[900px]:text-center">
        <span>© 2026 Tasfi Fairoz Nidhi</span>
        <div className="flex gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--text2)]"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--text2)]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="transition-colors hover:text-[var(--text2)]"
          >
            Email
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}
