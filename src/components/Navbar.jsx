import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
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
        <div className="flex h-full items-stretch divide-x divide-[var(--border)] border-x border-[var(--border)]">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "flex items-center px-5 text-sm font-medium tracking-[-0.01em] transition-colors",
                isActive(l.to)
                  ? "bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--accent)]"
                  : "text-[var(--text2)] hover:text-[var(--text)]",
              )}
              onClick={() => {
                if (location.pathname === l.to) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              {l.label}
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
