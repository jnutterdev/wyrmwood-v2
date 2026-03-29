# Wyrmwood Palisades — Site Brief

## Overview

**Wyrmwood Palisades** is a dark fantasy editorial website covering epic music, high fantasy fiction, and tabletop RPG reviews. The tone is atmospheric, opinionated, and literary — aimed at readers who feel at home in a record shop, a game store, and a used bookstore simultaneously.

---

## Identity

**Tagline:** Reviews of epic music, high fantasy fiction, and tabletop RPGs — for anyone who has argued about the best fantasy novel, worn out a cassette tape, or rolled dice until midnight.

**Audience:** Rogues, Riff-Lords, and Realm-Seekers.

**Brand mark:** A WP blackletter monogram (UnifrakturMaguntia) in a circular frame with cardinal diamond accents and a thin rule underline. Used as a placeholder in featured panels, the footer, and the sidebar sigil.

---

## Color Palette

### Dark Mode (default)
| Token | Hex | Usage |
|---|---|---|
| `--black` | `#1e1e1e` | Page background — warm charcoal |
| `--near-black` | `#272624` | Header/footer backgrounds, top bar |
| `--red` | `#c4947a` | Primary borders, accent lines |
| `--red-dim` | `#6b5248` | Dimmer borders, dividers |
| `--red-pale` | `#e8b89a` | Lighter accent variant |
| `--white` | `#e8e0cc` | Primary text — bone cream |
| `--white-dim` | `#9a9080` | Secondary text, muted labels |
| `--panel-bg` | `#222120` | Card and panel backgrounds |
| `--teal-lt` | `#8ab4b0` | Category labels, section headers, section ornaments |
| `--amber` | `#c8a878` | Rating icons, date labels |

### Light Mode (parchment)
| Token | Hex | Usage |
|---|---|---|
| `--black` | `#f0e8d8` | Page background — warm parchment |
| `--near-black` | `#e4d8c4` | Header/footer backgrounds |
| `--red` | `#8a4a30` | Primary borders |
| `--red-dim` | `#b07858` | Dimmer borders |
| `--white` | `#3a3028` | Primary text — warm brown-black (faded ink feel) |
| `--white-dim` | `#6a5e50` | Secondary text |
| `--panel-bg` | `#e8ddc8` | Card and panel backgrounds |
| `--teal-lt` | `#9a4a32` | Category labels — reddish brick tone |
| `--amber` | `#7a4e28` | Rating icons, date labels |

---

## Typography

| Role | Font | Notes |
|---|---|---|
| Site title / monogram | UnifrakturMaguntia | Blackletter, large display sizes |
| Section headers | UnifrakturMaguntia | 2rem, colored with `--teal-lt` |
| Featured post title | Cinzel Decorative | Bold, clamp(1.6rem–2.6rem) |
| Card titles | Cinzel Decorative | 1rem, 700 weight |
| Navigation / labels / kickers | Cinzel | Small caps feel, tight letter-spacing |
| Body copy / tagline | IM Fell English | Italic, serif, editorial feel |
| Mini-list titles | Crimson Pro | 0.95rem, semi-bold |

All text-shadows are softened — `rgba(0,0,0,0.2–0.25)` offsets only, no heavy drop shadows.

---

## Layout

### Header
- Top bar with site tagline label and volume/issue number badge
- Large blackletter site title (left) + vertical nav block (desktop only, right)
- Italic tagline below title
- Horizontal sub-nav with section links (desktop only)
- All header borders: `1px solid var(--red-dim)`

### Main Content
- **Featured section:** Two-column grid — featured article text + small panel (left), large featured panel with WP monogram (right)
- **Recent Reviews:** Three-column card grid with Roman numeral watermarks
- **More Reviews:** Mini-list (left) + tag cloud (right), in a bottom grid with left/right/bottom borders only (no border-top)

### Footer
- WP monogram SVG
- Site title in blackletter
- Tagline and copyright lines
- Border: `1px solid var(--red-dim)` top only

---

## Rating System

Three icon types via Font Awesome 6.5 (`fa-solid`), all styled in `--amber`:

| Category | Icon | Class |
|---|---|---|
| Music | Skull | `fa-skull` |
| Fiction | Sword | `fa-khanda` |
| Tabletop | D20 | `fa-dice-d20` |

Icons are wrapped in `.rating` spans, sized at `0.65rem`, displayed inline with date text.

---

## UI Components

### Theme Toggle
- Fixed button, bottom-right corner
- Switches `data-theme` attribute on `<html>` between dark and light
- Icon: ☀ / ☽

### Hamburger Menu (mobile only)
- Shown at ≤640px breakpoint
- Three-bar icon animates to X when open
- Drops down nav at `top: 55%` of header
- Desktop nav block hidden on mobile

### Sub-nav
- Horizontal, desktop only (hidden at ≤640px)
- Shows at `min-width: 641px`

### WP Monogram
- Used in: large featured panel, small featured panel, footer, sidebar sigil
- Opacity: `0.5` on featured panels, `0.5` on sigil
- Consists of: outer ring, inner ring, cardinal diamonds, blackletter WP text, thin rule underline

### Featured Panel Gradients
- Small panel: steel blue from top, dusty salmon from bottom
- Large panel: steel blue mist upper, salmon fire rising lower, dark charcoal midground band

---

## Mobile Breakpoints (≤640px)

- Hamburger menu replaces vertical nav block
- Sub-nav hidden
- Featured grid: single column
- Card grid: single column, second card gets border-top and border-bottom
- `.card` border-right removed
- `.mini-list` border-right removed, border-bottom added
- `.bottom-grid` single column
- `.feat-foot` margin-bottom: 44px
- Header border-bottom removed

---

## Dependencies

- **Google Fonts:** UnifrakturMaguntia, Cinzel, Cinzel Decorative, IM Fell English, Crimson Pro
- **Font Awesome 6.5.0** (via cdnjs): fa-skull, fa-khanda, fa-dice-d20
- No JavaScript frameworks — vanilla JS only (theme toggle, hamburger toggle)

---

## On the Horizon

- Scroll SVG for CTA buttons (replacing current rectangular "Read the Review" buttons)
- Real artwork for featured panels (NightCafe generations using charcoal palette)
- Individual review page template
- Grunge background texture (requires a real `.webp` texture tile with `mix-blend-mode: multiply`)
- WP monogram refinement — shield frame variant under consideration
- Native image generation via Claude (pending Anthropic roadmap)
