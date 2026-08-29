/** @type {import('tailwindcss').Config} */
export default {
  // Preflight off: Tailwind's global reset would clobber the existing CSS-Modules pages.
  // Re-enable once every component is migrated.
  corePlugins: { preflight: false },
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--sc-border))",
        input: "hsl(var(--sc-input))",
        ring: "hsl(var(--sc-ring))",
        background: "hsl(var(--sc-background))",
        foreground: "hsl(var(--sc-foreground))",
        primary: {
          DEFAULT: "hsl(var(--sc-primary))",
          foreground: "hsl(var(--sc-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--sc-secondary))",
          foreground: "hsl(var(--sc-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--sc-destructive))",
          foreground: "hsl(var(--sc-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--sc-muted))",
          foreground: "hsl(var(--sc-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--sc-accent))",
          foreground: "hsl(var(--sc-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--sc-popover))",
          foreground: "hsl(var(--sc-popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--sc-card))",
          foreground: "hsl(var(--sc-card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
