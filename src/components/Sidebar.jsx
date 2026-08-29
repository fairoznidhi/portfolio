import { MapPin, Palette, Download } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { LinkedinBrandIcon, GithubBrandIcon, MailIcon } from "./icons";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.rail}>
      <div className={styles.inner}>
        <img
          src="/images/profile.jpg"
          alt={personalInfo.name}
          className={styles.image}
        />

        <h1 className={styles.name}>{personalInfo.name}</h1>

        <p className={styles.roleLine}>
          {personalInfo.title} @{" "}
          <a
            href={personalInfo.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.company}
          >
            {personalInfo.company.replace(/\s+Limited$/, "")}
          </a>
        </p>

        <div className={styles.group}>
          <ul className={styles.infoList}>
            <li>
              <MapPin className={styles.infoIcon} size={14} strokeWidth={1.75} />
              <span>{personalInfo.location}</span>
            </li>
            <li>
              <Palette className={styles.infoIcon} size={14} strokeWidth={1.75} />
              <span>{personalInfo.hobbies}</span>
            </li>
            <li>
              <MailIcon className={styles.infoIcon} />
              <a
                href={`mailto:${personalInfo.email}`}
                className={styles.infoLink}
              >
                {personalInfo.email}
              </a>
            </li>
          </ul>

          <div className={styles.socials}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <LinkedinBrandIcon size={16} />
              <span>tasfifairoznidhi</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <GithubBrandIcon size={16} />
              <span>fairoznidhi</span>
            </a>
          </div>
        </div>

        <a
          href="/resume.pdf"
          download="Tasfi_Fairoz_Nidhi_Resume.pdf"
          className={styles.primaryBtn}
        >
          <Download size={15} strokeWidth={2} />
          Download CV
        </a>
      </div>
    </aside>
  );
}
