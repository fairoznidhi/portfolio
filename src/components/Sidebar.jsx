import {
  MapPin,
  Briefcase,
  Palette,
  Mail,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.rail}>
      <div className={styles.card}>
        <img
          src="/images/profile.jpg"
          alt={personalInfo.name}
          className={styles.image}
        />

        <h1 className={styles.name}>{personalInfo.name}</h1>
        <p className={styles.flag}>Bangladesh</p>
        <p className={styles.role}>{personalInfo.title}</p>
        <p className={styles.company}>{personalInfo.company}</p>

        <div className={styles.divider} />

        <ul className={styles.infoList}>
          <li>
            <MapPin className={styles.infoIcon} size={15} strokeWidth={1.75} />
            <span>{personalInfo.location}</span>
          </li>
          <li>
            <Briefcase className={styles.infoIcon} size={15} strokeWidth={1.75} />
            <span>
              {personalInfo.title} at {personalInfo.company}
            </span>
          </li>
          <li>
            <Palette className={styles.infoIcon} size={15} strokeWidth={1.75} />
            <span>{personalInfo.hobbies}</span>
          </li>
          <li>
            <Mail className={styles.infoIcon} size={15} strokeWidth={1.75} />
            <a href={`mailto:${personalInfo.email}`} className={styles.infoLink}>
              {personalInfo.email}
            </a>
          </li>
        </ul>

        <div className={styles.divider} />

        <div className={styles.socials}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label="GitHub"
          >
            <Github size={17} strokeWidth={1.75} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label="LinkedIn"
          >
            <Linkedin size={17} strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.social}
            aria-label="Email"
          >
            <Mail size={17} strokeWidth={1.75} />
          </a>
        </div>

        <a
          href="/resume.pdf"
          download="Tasfi_Fairoz_Nidhi_Resume.pdf"
          className={styles.resume}
        >
          <Download size={15} strokeWidth={2} />
          Download CV
        </a>
      </div>
    </aside>
  );
}
