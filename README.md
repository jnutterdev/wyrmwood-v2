# Wyrmwood Palisades

> *Reviews of epic music, high fantasy fiction, and tabletop RPGs — for anyone who has argued about the best fantasy novel, worn out a cassette tape, or rolled dice until midnight.*

A dark fantasy editorial website covering epic music, high fantasy fiction, and tabletop RPG reviews. The tone is atmospheric, opinionated, and literary — aimed at readers who feel at home in a record shop, a game store, and a used bookstore simultaneously.

**Audience:** Rogues, Riff-Lords, and Realm-Seekers.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build/) |
| CMS | [Tina CMS](https://tina.io/) |
| Deployment | Self-hosted server via [GitHub Actions](https://github.com/features/actions) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

This starts the Astro dev server alongside the Tina CMS local backend. Open [http://localhost:4321](http://localhost:4321) to view the site and [http://localhost:4321/admin](http://localhost:4321/admin) to access the CMS.

### Build

```sh
npm run build
```

Output is written to `dist/`.

---

## Deployment

The site is deployed to a self-hosted server using **GitHub Actions**. On every push to `main`, the workflow:

1. Installs dependencies
2. Runs the Astro production build
3. Transfers the built `dist/` directory to the server via SSH/rsync
4. Reloads the web server as needed

Deployment secrets (host, user, SSH key, target path, etc.) are stored as **GitHub Actions repository secrets** and are never committed to the repository.

---

## Design System

### Color Palette

The site ships with a **dark mode default** and a **light mode (parchment)** variant, toggled at runtime via a `data-theme` attribute on `<html>`.

#### Dark Mode (default)

| Token | Hex | Usage |
|---|---|---|
| `--black` | `#1e1e1e` | Page background — warm charcoal |
| `--near-black` | `#272624` | Header/footer backgrounds |
| `--red` | `#c4947a` | Primary borders, accent lines |
| `--red-dim` | `#6b5248` | Dimmer borders, dividers |
| `--red-pale` | `#e8b89a` | Lighter accent variant |
| `--white` | `#e8e0cc` | Primary text — bone cream |
| `--white-dim` | `#9a9080` | Secondary text, muted labels |
| `--panel-bg` | `#222120` | Card and panel backgrounds |
| `--teal-lt` | `#8ab4b0` | Category labels, section headers |
| `--amber` | `#c8a878` | Rating icons, date labels |

#### Light Mode (parchment)

| Token | Hex | Usage |
|---|---|---|
| `--black` | `#f0e8d8` | Page background — warm parchment |
| `--near-black` | `#e4d8c4` | Header/footer backgrounds |
| `--red` | `#8a4a30` | Primary borders |
| `--white` | `#3a3028` | Primary text — faded ink |
| `--panel-bg` | `#e8ddc8` | Card and panel backgrounds |
| `--teal-lt` | `#9a4a32` | Category labels — reddish brick |
| `--amber` | `#7a4e28` | Rating icons, date labels |

### Typography

| Role | Font |
|---|---|
| Site title / monogram | UnifrakturMaguntia |
| Section headers | UnifrakturMaguntia |
| Featured post title | Cinzel Decorative |
| Card titles | Cinzel Decorative |
| Navigation / labels / kickers | Cinzel |
| Body copy / tagline | IM Fell English |
| Mini-list titles | Crimson Pro |

Fonts are loaded from **Google Fonts**. Icons are provided by **Font Awesome 6.5.0**.

### Rating Icons

Ratings are displayed inline using Font Awesome icons, all styled in `--amber`:

| Category | Icon |
|---|---|
| Music | Skull (`fa-skull`) |
| Fiction | Sword (`fa-khanda`) |
| Tabletop | D20 (`fa-dice-d20`) |

---

## Layout Overview

- **Header** — Blackletter site title, tagline, vertical desktop nav, horizontal sub-nav, and a hamburger menu for mobile.
- **Featured Section** — Two-column grid: featured article text + small panel on the left, large hero panel on the right.
- **Recent Reviews** — Three-column card grid with Roman numeral watermarks.
- **More Reviews** — Mini-list + tag cloud in a two-column bottom grid.
- **Footer** — WP monogram SVG, blackletter site title, tagline, and copyright.

The site is fully responsive, collapsing to a single-column layout at ≤640px.

---

## UI Components

- **Theme Toggle** — Fixed button (bottom-right) that switches between dark and light mode.
- **Hamburger Menu** — Mobile-only (≤640px); animates to an ✕ when open.
- **WP Monogram** — Blackletter "WP" SVG in a circular frame with cardinal diamond accents. Used in featured panels, the footer, and the sidebar sigil.

---

## On the Horizon

- Scroll SVG for CTA buttons
- Real artwork for featured panels (charcoal palette AI generations)
- Individual review page template
- Grunge background texture with `mix-blend-mode: multiply`
- WP monogram shield frame variant

---

## License

© Wyrmwood Palisades. All rights reserved.
