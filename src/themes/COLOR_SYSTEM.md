# Color & Theme System — Guide

> **For another Claude / another contributor:** this document is the single source
> of truth for the portfolio's colors and how to apply a theme. Everything is
> token-driven. To re-skin the whole site you edit **one file** (`src/index.css`)
> and nothing else. The structural CSS (layout, hover effects, gradients, shadows)
> already reads from these tokens, so it re-themes automatically.

---

## 1. How the system works

All colors live as CSS custom properties in **`src/index.css`**, in two blocks:

- `:root { … }` — **light mode**
- `:root[data-theme="dark"] { … }` — **dark mode**

There are **two parallel token sets** because the codebase mixes two styling systems.
When you change a color you must update **both** so they agree:

| Set | Format | Consumed by | Example |
|-----|--------|-------------|---------|
| **Legacy hex** | hex (`#5b2ee0`) | CSS Modules (`*.module.css`) | `--accent` |
| **shadcn HSL** | `H S% L%` (no `hsl()`) | Tailwind utility classes | `--sc-primary` |

Some effects composite color with transparency (glows, tints, gradient strokes).
CSS can't put an alpha on a hex variable directly, so those use **RGB-channel tokens**
(`--accent-rgb: 91 46 224`) via `rgb(var(--accent-rgb) / 0.15)`. **Every `-rgb` token
must stay numerically in sync with its hex twin.**

### Token reference

| Token | Role |
|-------|------|
| `--bg` / `--bg2` / `--bg3` | page canvas → card/panel → chip/toggle surface |
| `--border` | hairline borders |
| `--text` / `--text2` / `--text3` | primary → secondary → muted text |
| `--accent` | **primary** brand color (links, buttons, highlights) |
| `--accent2` | **secondary** pop color (chips, active states, highlighter) |
| `--accent2-ink` | text color placed on top of a solid `--accent2` fill |
| `--accent2-soft` | derived subtle tint (chips, active nav pill) — `rgb(var(--accent2-rgb) / 0.18)` |
| `--grad-accent` | button / primary-surface fill — a gradient, or `var(--accent)` for a flat theme |
| `--shadow-card` | card shadow (soft drop + glossy inset top edge), or `none` |
| `--green` | success / "live" status dots |
| `--accent-rgb` / `--accent2-rgb` / `--green-rgb` / `--dark-rgb` | raw channels backing alpha effects — **keep in sync with the hexes** |
| `--sc-*` | shadcn/Tailwind HSL mirror of the same palette |
| `--radius` | global corner radius (not a color) |

### Fixed colors that are NOT themed (leave alone)

- **`src/data/portfolio.js` → `color:` fields** — Codeforces / CodeChef / AtCoder
  brand colors. These are per-platform metadata and are intentionally hard-coded
  (currently unused by the UI, which now themes those cards with `--accent`).
- Pure-black drop shadows (`rgba(0,0,0,…)`) inside a few `box-shadow`s.

---

## 2. How to APPLY a theme (step-by-step)

1. Open **`src/index.css`**.
2. Pick a theme file from `src/themes/` (see §4). Each holds a complete token set.
3. Copy that file's `:root { … }` values over the **light** block in `index.css`,
   and its `:root[data-theme="dark"] { … }` values over the **dark** block.
4. Do **not** touch anything below the token blocks (typography, `.bg-brand-*`
   utilities, layout). Those already read the tokens.
5. Save — the Vite dev server hot-reloads instantly.

> Shortcut when talking to Claude: *"apply theme 03"* → it replaces the two token
> blocks in `index.css` with `src/themes/03-pine-lime.css`'s values.

### Two rules when changing a single color

1. **Change it in both `:root` and the dark block** or the two modes diverge.
2. **Update the paired `-rgb` line.** e.g. changing `--accent` also means changing
   `--accent-rgb` to the same color's `R G B` (space-separated). Otherwise the solid
   color updates but the glows/tints/strokes keep the old hue.

---

## 3. The signature "textures" (already wired to tokens)

These were designed on top of the palette and re-theme automatically:

- **Glossy gradient buttons** — Download CV, hero CTA, contact button, coding-profile
  top edge & rating meter all use `background: var(--grad-accent)`.
- **Glossy card shadow** — sidebar (dark mode) and coding-profile cards use
  `box-shadow: var(--shadow-card)` (soft drop + white inset top highlight).
- **Flicker-free card hover** — project, blog, publication, achievement, community,
  and skill-group cards share one hover: a masked **gradient stroke** (`--accent` at
  0.85 alpha at the top, fading to `--border`) plus a **surface tint** (`--accent2`
  at 0.10 at the top, fading out). Both fade in via `opacity` — no background swap,
  so no flicker. Knobs: the `0.85` and `0.10` alphas in the `::before` / `::after`
  rules in `Home.module.css` and `Projects.module.css`.
- **Chips** (tech tags) are transparent/border-only; **label chips** (ABOUT, SKILLS,
  active nav pill) use `--accent2-soft`.

A **flat theme** (no gloss) just sets `--grad-accent: var(--accent)` and
`--shadow-card: none` — the archived themes 01–03 already do this.

---

## 4. Theme archive (`src/themes/`)

Full token snapshots, light + dark, ready to paste. **Theme 04 is currently LIVE.**

| # | File | Vibe |
|---|------|------|
| 01 | `01-warm-parchment.css` | The original. Cream paper, muted olive-gold accent, editorial & calm |
| 02 | `02-royal-blue-neon.css` | White paper, deep royal blue primary, electric neon yellow pop |
| 03 | `03-pine-lime.css` | Annual-report look. Deep pine green, chartreuse lime, sage tints |
| 04 | `04-violet-gloss.css` | **LIVE** — lavender-grey page, white cards, vivid violet, gradients + glossy shadows |

### Quick palette summary (light mode)

| Theme | `--bg` | `--accent` | `--accent2` |
|-------|--------|-----------|-------------|
| 01 Warm Parchment | `#fdfaf1` | `#8a6a2f` | `#ab8748` |
| 02 Royal Blue Neon | `#ffffff` | `#4028c8` | `#efe60a` |
| 03 Pine & Lime | `#ffffff` | `#1d4d3d` | `#a3c440` |
| 04 Violet Gloss (live) | `#eef0f7` | `#5b2ee0` | `#9d7bf5` |

---

## 5. Current LIVE values — Theme 04: Violet Gloss

Copy-paste ready. (These are what's in `index.css` right now.)

### Light — `:root`
```css
--bg: #eef0f7;
--bg2: #ffffff;
--bg3: #ebe8f8;
--border: #dcdfec;
--text: #17142b;
--text2: #4d4a63;
--text3: #8f8ca6;
--accent: #5b2ee0;
--accent2: #9d7bf5;
--accent2-ink: #ffffff;
--accent2-soft: rgb(var(--accent2-rgb) / 0.18);
--grad-accent: linear-gradient(180deg, #7a53ee 0%, #5b2ee0 100%);
--shadow-card: 0 12px 32px rgb(var(--dark-rgb) / 0.08), inset 0 1px 0 rgb(255 255 255 / 0.6);
--green: #16a34a;
--accent-rgb: 91 46 224;
--green-rgb: 22 163 74;
--accent2-rgb: 157 123 245;
--dark-rgb: 23 20 43;

--sc-background: 227 36% 95%;
--sc-foreground: 248 37% 12%;
--sc-card: 0 0% 100%;
--sc-card-foreground: 248 37% 12%;
--sc-popover: 0 0% 100%;
--sc-popover-foreground: 248 37% 12%;
--sc-primary: 255 74% 53%;
--sc-primary-foreground: 0 0% 100%;
--sc-secondary: 257 86% 72%;
--sc-secondary-foreground: 0 0% 100%;
--sc-muted: 254 55% 90%;
--sc-muted-foreground: 247 14% 34%;
--sc-accent: 255 74% 53%;
--sc-accent-foreground: 0 0% 100%;
--sc-destructive: 0 84% 60%;
--sc-destructive-foreground: 0 0% 100%;
--sc-border: 229 30% 89%;
--sc-input: 229 30% 89%;
--sc-ring: 255 74% 53%;
--radius: 0.6rem;
```

### Dark — `:root[data-theme="dark"]`
```css
--bg: #100c1f;
--bg2: #171230;
--bg3: #201a40;
--border: #2c2454;
--text: #f0eff8;
--text2: #a09cba;
--text3: #6f6a8e;
--accent: #9d7bf5;
--accent2: #c4b5fd;
--accent2-ink: #100c1f;
--grad-accent: linear-gradient(180deg, #b198f8 0%, #8b66f3 100%);
--shadow-card: 0 12px 32px rgb(0 0 0 / 0.4), inset 0 1px 0 rgb(255 255 255 / 0.06);
--green: #4ade80;
--accent-rgb: 157 123 245;
--green-rgb: 74 222 128;
--accent2-rgb: 196 181 253;

--sc-background: 253 44% 8%;
--sc-foreground: 247 39% 95%;
--sc-card: 250 45% 13%;
--sc-card-foreground: 247 39% 95%;
--sc-popover: 250 45% 13%;
--sc-popover-foreground: 247 39% 95%;
--sc-primary: 257 86% 72%;
--sc-primary-foreground: 253 44% 8%;
--sc-secondary: 253 95% 85%;
--sc-secondary-foreground: 253 44% 8%;
--sc-muted: 250 42% 18%;
--sc-muted-foreground: 248 18% 67%;
--sc-accent: 257 86% 72%;
--sc-accent-foreground: 253 44% 8%;
--sc-destructive: 0 62% 50%;
--sc-destructive-foreground: 247 39% 95%;
--sc-border: 250 40% 24%;
--sc-input: 250 40% 24%;
--sc-ring: 257 86% 72%;
```

---

## 6. Adding a NEW theme

1. Copy the newest snapshot in `src/themes/`, renumber it (`05-…css`).
2. Change the values. **Keep every token present** (light + dark, hex + rgb + HSL).
3. For a flat look set `--grad-accent: var(--accent)` and `--shadow-card: none`.
4. Add a row to the table in §4 and in `src/themes/README.md`.
5. Apply it via the steps in §2.
