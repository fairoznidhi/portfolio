import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoAccent}>TF</span>
          <span className={styles.logoDot}>·</span>
          <span>Nidhi</span>
        </Link>

        <div className={styles.links}>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.link} ${location.pathname === l.to ? styles.active : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download="Tasfi_Fairoz_Nidhi_Resume.pdf"
            className={styles.resumeBtn}
          >
            Resume ↓
          </a>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barOpen1 : styles.bar} />
          <span className={menuOpen ? styles.barHidden : styles.bar} />
          <span className={menuOpen ? styles.barOpen2 : styles.bar} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={styles.mobileLink}>
              {l.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download="Tasfi_Fairoz_Nidhi_Resume.pdf"
            className={styles.mobileResume}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
