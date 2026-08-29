# Theme Archive

Palette snapshots for the portfolio. Each file holds the complete color-token
set (legacy hex + RGB channels + shadcn HSL, light **and** dark mode) for one
theme. The live theme is whatever is currently in `src/index.css`.

**To switch themes:** ask Claude "apply theme NN" (it replaces the token blocks
in `src/index.css` with the snapshot's values), or copy the `:root` and
`:root[data-theme="dark"]` values across by hand. Fonts, `--radius`, and layout
CSS live only in `index.css` and are untouched by theme swaps.

| #  | File                    | Vibe                                                                 |
|----|-------------------------|----------------------------------------------------------------------|
| 01 | `01-warm-parchment.css` | The original. Cream paper, muted olive-gold accent, editorial & calm |
| 02 | `02-royal-blue-neon.css`| White paper, deep royal blue primary, electric neon yellow pop       |
| 03 | `03-pine-lime.css`      | Annual-report look. Deep pine green, chartreuse lime, sage tints     |
| 04 | `04-violet-gloss.css`   | **LIVE** — lavender-grey page, white cards, vivid violet, gradients + glossy shadows |

## Token reference

- `--bg / --bg2 / --bg3` — page canvas → panels → chips/toggle surfaces
- `--text / --text2 / --text3` — primary → secondary → muted text
- `--accent` — primary brand color (buttons, links, highlights)
- `--accent2` + `--accent2-ink` — secondary pop color and the text color used on top of it
- `--accent2-soft` — subtle tint for label chips & the active nav pill
- `--grad-accent` — button/primary-surface fill; a gradient, or `var(--accent)` for flat themes
- `--shadow-card` — card shadow (soft drop + glossy inset top edge), or `none`
- `--*-rgb` — raw channels backing every alpha-composited use; keep in sync with their hex twins
- `--sc-*` — shadcn/Tailwind HSL mirror of the same palette

When adding a theme: copy the newest snapshot, renumber, change values, keep
every token present.
