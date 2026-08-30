import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { to: "/", label: "About" },
  { to: "/education-experience", label: "Education & Experience" },
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
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <nav
      className={cn(
        "fixed right-0 top-0 z-[100] h-[var(--nav-h)] border-b border-border bg-[var(--bg)] transition-shadow duration-300",
        "left-[max(256px,calc(50%-720px+256px))] max-[980px]:left-0",
        scrolled && "shadow-[0_1px_8px_rgba(0,0,0,0.06)]",
      )}
    >
      <div className="mr-auto flex h-full max-w-[1184px] items-stretch justify-between gap-10 px-8 max-[480px]:px-5">
        <div className="flex h-full items-stretch max-[760px]:hidden">
          {navLinks.map((l) => {
            const active = isActive(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative flex items-center px-5 text-sm font-medium tracking-[-0.01em] transition-colors",
                  active
                    ? "text-[var(--accent)]"
                    : "text-[var(--text2)] hover:text-[var(--text)]",
                )}
                onClick={() => {
                  if (location.pathname === l.to) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {l.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={toggle}
          role="switch"
          aria-checked={isDark}
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          title={`Switch to ${isDark ? "light" : "dark"} theme`}
          className="relative inline-flex h-[30px] w-[62px] shrink-0 items-center justify-between self-center rounded-full border border-border bg-[var(--bg3)] px-[7px] transition-colors hover:border-[var(--text3)]"
        >
          <Sun
            size={13}
            strokeWidth={2}
            aria-hidden="true"
            className={cn(
              "z-[1] text-[var(--accent)] transition-opacity",
              isDark && "opacity-[0.35]",
            )}
          />
          <Moon
            size={13}
            strokeWidth={2}
            aria-hidden="true"
            className={cn(
              "z-[1] text-[var(--text3)] transition-opacity",
              !isDark && "opacity-[0.35]",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-1/2 h-[22px] w-[22px] -translate-y-1/2 rounded-full border border-border bg-[var(--bg)] shadow-[0_1px_3px_rgba(0,0,0,0.15)] transition-[left] duration-200 ease-in-out",
              isDark ? "left-[calc(100%-25px)]" : "left-[3px]",
            )}
          />
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="hidden flex-col gap-[5px] self-center p-1 max-[760px]:flex"
        >
          <span
            className={cn(
              "block h-[1.5px] w-[22px] transition-all duration-300",
              menuOpen
                ? "translate-x-[5px] translate-y-[5px] rotate-45 bg-[var(--accent)]"
                : "bg-[var(--text)]",
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-[22px] transition-all duration-300",
              menuOpen ? "opacity-0" : "bg-[var(--text)]",
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-[22px] transition-all duration-300",
              menuOpen
                ? "translate-x-[5px] -translate-y-[5px] -rotate-45 bg-[var(--accent)]"
                : "bg-[var(--text)]",
            )}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-border bg-[color-mix(in_srgb,var(--bg)_97%,transparent)] px-6 pb-6 pt-4 backdrop-blur-[12px]">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border-b border-border py-3 text-base text-[var(--text2)]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
