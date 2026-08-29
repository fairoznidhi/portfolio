import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import styles from "./Navbar.module.css";

const navLinks = [
  { to: "/", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/publications", label: "Publications" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blogs" },
  { to: "/others", label: "Others" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <div className={styles.segments}>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.segment} ${isActive(l.to) ? styles.active : ""}`}
              onClick={() => {
                if (location.pathname === l.to) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <span>{l.label}</span>
            </Link>
          ))}
        </div>

        <button
          className={`${styles.themeToggle} ${theme === "dark" ? styles.themeOn : ""}`}
          onClick={toggle}
          role="switch"
          aria-checked={theme === "dark"}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <Sun className={styles.themeIconSun} size={13} strokeWidth={2} aria-hidden="true" />
          <Moon className={styles.themeIconMoon} size={13} strokeWidth={2} aria-hidden="true" />
          <span className={styles.themeKnob} aria-hidden="true" />
        </button>

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
        </div>
      )}
    </nav>
  );
}
