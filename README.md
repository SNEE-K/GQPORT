# Gray Quick — Portfolio
### [grayquick.net](https://grayquick.net) · Product Designer · UX Strategy · Visual Systems

---

![grayquick net](https://grayquick.net/assets/images/ogimage.png)

---

## About

Personal portfolio for Gray Quick — multidisciplinary creative director and product designer based in Las Vegas. 15+ years spanning brand identity, UX strategy, campaign design, motion graphics, and entertainment marketing.

Live site: **[grayquick.net](https://grayquick.net)**

---

## How it's built

No framework. No build step. No bundler. Pure vanilla HTML, CSS, and JavaScript in a single `index.html` file.

That was a deliberate choice — the site itself is a proof of concept that you don't need React to build something that feels fast, refined, and interactive.

**Key technical decisions:**

- **SPA routing** via `history.pushState` — all case study navigation happens client-side with no page reloads
- **Smooth scroll** — custom lerp-based scroll system on desktop that drives `#scroll-wrap` via `requestAnimationFrame` instead of native scroll
- **Custom cursor** — dot + ring with independent lerp speeds for a trailing effect
- **Floating image preview** — follows mouse position on work row hover
- **Binary artifacts canvas** — floating 0/1 particle system with cursor repulsion, built on a fixed canvas layer
- **Reveal animations** — IntersectionObserver-style reveal using scroll position checks tied to the custom scroll system
- **Motion gallery** — tab-switched video gallery with deferred autoplay (videos only load when the Motion tab is clicked)
- **Lightbox** — click-to-expand for the social media gallery
- **Deep link restore** — `/work/:id` URLs are fully shareable and restore the correct case study on load via `sessionStorage` redirect from a 404 handler

**Stack:**
- HTML / CSS / Vanilla JS
- Google Fonts (Bebas Neue, DM Mono, DM Sans)
- Google Analytics (GA4)
- ContentSquare (session recording)

---

## Structure

```
index.html        — entire site (HTML + CSS + JS)
styles.css        — all styles
contact/          — contact page
assets/
  images/         — all project imagery (.webp)
  video/          — motion gallery files (.mp4)
  logos/          — logofolio SVGs
  favicon.svg
  gq-logo.svg
robots.txt
sitemap.xml
```

---

## Case studies

| Slug | Project |
|---|---|
| `/work/blackmvss` | Black MVSS — Brand Identity / Apparel |
| `/work/practitioner` | Practitioner — Brand Identity / Motion |
| `/work/hen-collab` | HEN-Collab — Brand Identity / Print |
| `/work/artist-epk` | Artist EPKs / Album Art |
| `/work/tix4-ux` | Tix4 UX Redesign — Product Design |
| `/work/0e-widgets` | 0E UI Widgets — iOS Widget System |
| `/work/ux-ui` | Augmented Eats — AR App Design |
| `/work/real-estate` | Petrosian Real Estate — Web / Print |
| `/work/tix4branding` | Tix4 — Brand Identity / Merch |
| `/work/posterdesign` | Poster Design / Custom Work |
| `/work/smartplate` | SmartPlate — AI App Design |
| `/work/mvss-studio` | MVSS Studio — Studio Branding |

---

## Contact

**[grayquickart@gmail.com](mailto:grayquickart@gmail.com)**
[linkedin.com/in/medusan](https://linkedin.com/in/medusan)
Las Vegas, NV · Open to work

---

*Not available for licensing or use as a template. Built for one portfolio, one person.*
