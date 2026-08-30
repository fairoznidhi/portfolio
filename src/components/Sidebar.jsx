import { Download } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { personalInfo } from "../data/portfolio";
import { LinkedinBrandIcon, GithubBrandIcon } from "./icons";
import CopyButton from "./CopyButton";

const infoRow = "flex items-center gap-1 text-[0.82rem] text-[var(--text2)]";

export default function Sidebar() {
  const { pathname } = useLocation();
  const isAbout = pathname === "/";

  return (
    <aside
      className={[
        "fixed bottom-0 top-0 z-[110] w-64 overflow-y-auto border-r border-border bg-[var(--bg)]",
        "left-[max(0px,calc(50%-720px))] pb-7 pl-[22px] pr-[22px] pt-[calc(var(--nav-h)+28px)]",
        "max-[980px]:static max-[980px]:h-auto max-[980px]:w-full max-[980px]:inset-auto",
        "max-[980px]:overflow-visible max-[980px]:border-b max-[980px]:border-r-0 max-[980px]:px-6 max-[980px]:pb-6 max-[980px]:pt-20",
        !isAbout && "sidebar-hide-mobile",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex flex-col items-center gap-8 max-[980px]:mx-auto max-[980px]:max-w-[380px]">
        {/* group 1: image, name, designation */}
        <div className="flex flex-col items-center gap-2">
          <img
            src="/images/profile.jpg"
            alt={personalInfo.name}
            className="h-36 w-36 rounded-[14px] object-cover brightness-[0.94]"
          />

          <h1 className="text-center text-[1.2rem] font-bold tracking-[-0.02em] text-[var(--text)]">
            {personalInfo.name}
          </h1>

          <p className="text-center text-[0.85rem] text-[var(--text2)]">
            <span className="block">{personalInfo.title}</span>
            <span className="block">
              @{" "}
              <a
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent)] underline decoration-1 underline-offset-2 transition-opacity hover:opacity-70"
              >
                {personalInfo.company}
              </a>
            </span>
          </p>
        </div>

        {/* group 2: email, social */}
        <div className="flex w-max max-w-full flex-col items-stretch gap-2 text-left">
          <ul className="flex list-none flex-col gap-2">
            <li className={infoRow}>
              <span className="shrink-0 font-medium text-[var(--text)]">
                Email:
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[var(--text2)] transition-colors hover:text-[var(--accent)]"
              >
                {personalInfo.email}
              </a>
              <CopyButton value={personalInfo.email} label="Copy email" />
            </li>
          </ul>

          <div className="flex flex-nowrap items-center gap-x-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[5px] text-[0.72rem] text-[var(--text2)] transition-colors hover:text-[var(--text)] [&>span]:underline [&>span]:underline-offset-2"
            >
              <LinkedinBrandIcon size={14} />
              <span>tasfifairoznidhi</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[5px] text-[0.72rem] text-[var(--text2)] transition-colors hover:text-[var(--text)] [&>span]:underline [&>span]:underline-offset-2"
            >
              <GithubBrandIcon size={14} />
              <span>fairoznidhi</span>
            </a>
          </div>
        </div>

        {/* group 3: button */}
        <a
          href="/resume.pdf"
          download="Tasfi_Fairoz_Nidhi_Resume.pdf"
          className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[var(--accent)] px-4 py-[11px] text-[0.85rem] font-semibold tracking-[-0.01em] text-[var(--bg)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-[var(--accent2)]"
        >
          <Download size={15} strokeWidth={2} />
          Download CV
        </a>
      </div>
    </aside>
  );
}
