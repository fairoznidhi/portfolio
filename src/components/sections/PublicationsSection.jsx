import { ArrowUpRight, Download } from "lucide-react";
import { publications } from "../../data/portfolio";
import styles from "../../pages/Home.module.css";

export default function PublicationsSection() {
  return (
    <section className={styles.section} id="publications">
      <div className={styles.sectionInner}>
        <div data-reveal className={styles.reveal}>
          <p className={styles.sectionLabel}>Research</p>
          <h2 className={styles.sectionTitle}>Publications</h2>
        </div>
        {publications.map((pub, i) => (
          <div
            key={i}
            data-reveal
            className={`${styles.reveal} ${styles.pubCard}`}
          >
            <div className={styles.pubMeta}>
              <span className={styles.pubType}>{pub.type}</span>
              <span className={styles.pubDate}>{pub.date}</span>
            </div>
            <div className={styles.pubVenue}>{pub.venue}</div>
            {pub.authors && (
              <div className={styles.pubAuthors}>{pub.authors}</div>
            )}
            <h3 className={styles.pubTitle}>{pub.title}</h3>
            <div className={styles.pubActions}>
              <div className={styles.pubLinks}>
                {pub.link && pub.link !== "#" && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pubLink}
                  >
                    Read paper <ArrowUpRight size={13} strokeWidth={2} />
                  </a>
                )}
                {pub.link && pub.pdf && (
                  <span className={styles.pubSeparator}>|</span>
                )}
                {pub.pdf && pub.pdf !== "#" && (
                  <a
                    href={pub.pdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pubLink}
                  >
                    Download PDF <Download size={13} strokeWidth={2} />
                  </a>
                )}
              </div>
              {pub.doi && (
                <span
                  className={styles.pubDoi}
                  onClick={() => {
                    navigator.clipboard.writeText(pub.doi);
                    const el = document.getElementById(`doi-${i}`);
                    if (el) {
                      el.innerText = "✓ Copied!";
                      setTimeout(
                        () => (el.innerText = `DOI: ${pub.doi}`),
                        2000,
                      );
                    }
                  }}
                  id={`doi-${i}`}
                  title="Click to copy DOI"
                >
                  DOI: {pub.doi}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
