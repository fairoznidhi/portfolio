import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  personalInfo,
  experiences,
  projects,
  skills,
  competitive,
  achievements,
  publications,
  leadership,
} from "../data/portfolio";
import { blogs } from "../data/blogs";
import styles from "./Home.module.css";

function useIntersection(ref, className) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(className);
        }),
      { threshold: 0.12 },
    );
    const els = ref.current?.querySelectorAll("[data-reveal]");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref, className]);
}

export default function Home() {
  const pageRef = useRef(null);
  useIntersection(pageRef, styles.visible);

  return (
    <div ref={pageRef} className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroNoise} />
        <div className={styles.heroInner}>
          <h1 className={styles.heroName}>{personalInfo.name}</h1>
          <p className={styles.heroTitle}>
            {personalInfo.title} <span className={styles.heroAt}>@</span>{" "}
            {personalInfo.company}
          </p>
          <p className={styles.heroBio}>{personalInfo.bio}</p>
          <div className={styles.heroLinks}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroLink}
            >
              <GithubIcon /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroLink}
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.heroLink}
            >
              <MailIcon /> Email
            </a>
            <a href="/resume.pdf" download="Tasfi_Fairoz_Nidhi_Resume.pdf" className={styles.heroCta}>
              Download CV ↓
            </a>
          </div>
          <div className={styles.heroEdu}>
            <span className={styles.heroEduLabel}>Education</span>
            <span>{personalInfo.education.degree}</span>
            <span className={styles.heroEduDivider}>·</span>
            <span>{personalInfo.education.university}</span>
            <span className={styles.heroEduDivider}>·</span>
            <span className={styles.accent}>
              CGPA {personalInfo.education.cgpa}
            </span>
          </div>
        </div>
        <div className={styles.heroGrid} />
      </section>

      {/* EXPERIENCE */}
      <section className={styles.section} id="experience">
        <div className={styles.sectionInner}>
          <div data-reveal className={styles.reveal}>
            <SectionLabel>Work Experience</SectionLabel>
            <h2 className={styles.sectionTitle}>Where I've Worked</h2>
          </div>
          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                data-reveal
                className={`${styles.reveal} ${styles.timelineItem}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelinePeriod}>{exp.period}</span>
                    <span className={styles.timelineType}>{exp.type}</span>
                  </div>
                  <h3 className={styles.timelineTitle}>{exp.title}</h3>
                  <p className={styles.timelineCompany}>
                    {exp.company}{" "}
                    <span className={styles.timelineLocation}>
                      · {exp.location}
                    </span>
                  </p>
                  <ul className={styles.timelineHighlights}>
                    {exp.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.section} id="projects">
        <div className={styles.sectionInner}>
          <div data-reveal className={styles.reveal}>
            <SectionLabel>Work</SectionLabel>
            <h2 className={styles.sectionTitle}>Selected Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            {projects
              .filter((p) => p.featured)
              .map((proj, i) => (
                <ProjectCard key={i} proj={proj} delay={i * 0.1} />
              ))}
          </div>
          <div data-reveal className={`${styles.reveal} ${styles.viewAll}`}>
            <Link to="/projects" className={styles.viewAllLink}>
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.section} id="skills">
        <div className={styles.sectionInner}>
          <div data-reveal className={styles.reveal}>
            <SectionLabel>Expertise</SectionLabel>
            <h2 className={styles.sectionTitle}>Skills & Stack</h2>
          </div>
          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([cat, items], i) => (
              <div
                key={cat}
                data-reveal
                className={`${styles.reveal} ${styles.skillGroup}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <h3 className={styles.skillCat}>{cat}</h3>
                <div className={styles.skillTags}>
                  {items.map((s) => (
                    <span key={s} className={styles.skillTag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE PROGRAMMING */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div data-reveal className={styles.reveal}>
            <SectionLabel>Competitive Programming</SectionLabel>
            <h2 className={styles.sectionTitle}>Coding Profiles</h2>
          </div>
          <div className={styles.cpGrid}>
            {competitive.map((cp, i) => (
              <a
                key={cp.platform}
                href={cp.url}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                className={`${styles.reveal} ${styles.cpCard}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.cpPlatform}>{cp.platform}</div>
                <div className={styles.cpHandle} style={{ color: cp.color }}>
                  @{cp.handle}
                </div>
                <div className={styles.cpRating}>
                  <span className={styles.cpRatingNum}>{cp.rating}</span>
                  <span className={styles.cpRank}>{cp.rank}</span>
                </div>
                <div className={styles.cpSolved}>
                  {cp.solved} problems solved
                </div>
                <span className={styles.cpArrow}>↗</span>
              </a>
            ))}
          </div>

          {/* Achievements */}
          <div
            data-reveal
            className={`${styles.reveal} ${styles.achievementsWrap}`}
          >
            <h3 className={styles.subTitle}>Achievements</h3>
            <div className={styles.achievements}>
              {achievements.map((a, i) => (
                <div key={i} className={styles.achievement}>
                  <span className={styles.achievementIcon}>🏆</span>
                  <div>
                    <div className={styles.achievementTitle}>{a.title}</div>
                    <div className={styles.achievementResult}>{a.result}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div data-reveal className={styles.reveal}>
            <SectionLabel>Research</SectionLabel>
            <h2 className={styles.sectionTitle}>Publications</h2>
          </div>
          {publications.map((pub, i) => (
            <div
              key={i}
              data-reveal
              className={`${styles.reveal} ${styles.pubCard}`}
            >
              <div className={styles.pubVenue}>{pub.venue}</div>
              <h3 className={styles.pubTitle}>{pub.title}</h3>
              {pub.link && pub.link !== "#" && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pubLink}
                >
                  Read paper ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div data-reveal className={styles.reveal}>
            <SectionLabel>Writing</SectionLabel>
            <h2 className={styles.sectionTitle}>From the Blog</h2>
          </div>
          <div className={styles.blogGrid}>
            {blogs.map((b, i) => (
              <Link
                key={b.id}
                to={`/blog/${b.id}`}
                data-reveal
                className={`${styles.reveal} ${styles.blogCard}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.blogMeta}>
                  {b.tags.slice(0, 2).map((t) => (
                    <span key={t} className={styles.blogTag}>
                      {t}
                    </span>
                  ))}
                  <span className={styles.blogDate}>{b.readTime}</span>
                </div>
                <h3 className={styles.blogTitle}>{b.title}</h3>
                <p className={styles.blogSubtitle}>{b.subtitle}</p>
                <span className={styles.blogArrow}>Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div data-reveal className={styles.reveal}>
            <SectionLabel>Community</SectionLabel>
            <h2 className={styles.sectionTitle}>Leadership</h2>
          </div>
          <div className={styles.leadershipGrid}>
            {leadership.map((l, i) => (
              <div
                key={i}
                data-reveal
                className={`${styles.reveal} ${styles.leadershipCard}`}
              >
                <div className={styles.leadershipRole}>{l.role}</div>
                <div className={styles.leadershipOrg}>{l.org}</div>
                <div className={styles.leadershipMeta}>
                  {l.period} · {l.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.section} id="contact">
        <div className={styles.sectionInner}>
          <div data-reveal className={`${styles.reveal} ${styles.contact}`}>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className={styles.contactTitle}>Let's Work Together</h2>
            <p className={styles.contactBio}>
              I'm currently open to new opportunities. Whether you have a
              question, a project, or just want to say hi — my inbox is always
              open.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.contactBtn}
            >
              Say Hello →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2025 Tasfi Fairoz Nidhi</span>
          <div className={styles.footerLinks}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ proj, delay }) {
  return (
    <div
      data-reveal
      className={`${styles.reveal} ${styles.projectCard}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles.projectHeader}>
        <div className={styles.projectStatus}>
          <span
            className={
              proj.status === "Live" ? styles.statusLive : styles.statusOther
            }
          />
          {proj.status}
        </div>
        <div className={styles.projectActions}>
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectAction}
            >
              <GithubIcon />
            </a>
          )}
          {proj.live && (
            <a
              href={proj.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectAction}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
      <h3 className={styles.projectTitle}>{proj.title}</h3>
      <p className={styles.projectDesc}>{proj.description}</p>
      <div className={styles.projectTags}>
        {proj.tags.map((t) => (
          <span key={t} className={styles.projectTag}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return <p className={styles.sectionLabel}>{children}</p>;
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
