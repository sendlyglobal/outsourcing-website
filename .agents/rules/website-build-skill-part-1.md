---
trigger: always_on
---

---

name: outsourcing-company-website-build
description: Complete build specification for the outsourcing company website (ERP, Mobile, Web, Custom Systems). Covers brand/design tokens, sitemap, page content, the animation/interaction system (wave backgrounds, hover states, parallax, glassmorphism/"liquid glass" cards, staggered directional reveal animations), technology stack page template, the Get-a-Quote scheduling modal (Cal.com + Zoom), and the case study JSON schema. Use this skill for ANY task that builds, styles, or adds content to this website — new pages, new components, animation work, or content population — so output stays consistent with the rest of the site.

---

# Website Build Skill

This is the single reference for building this site. Read the relevant section
before writing code for that part of the site. Don't invent a different color
palette, animation style, or content structure than what's specified here —
consistency across pages matters more than any single page looking clever.

---

## 1. Brand & Design Tokens

```css
:root {
  --navy: #0b2545; /* primary — headers, footer, primary buttons */
  --navy-deep: #071a30; /* darkest sections, gradients */
  --teal: #0a8a9e; /* accent — links, icons, secondary CTAs */
  --aqua: #6fe3d6; /* highlight — hover states, small accents ONLY */
  --bg: #f7f9fb; /* off-white section background */
  --white: #ffffff;
  --ink: #14212f; /* body text */
  --ink-soft: #4c5c6b; /* secondary text */
  --line: #e2e8ee; /* borders/dividers */
  --radius: 14px;
}
```

**Rule:** one accent color per element. Never mix teal and aqua on the same component. Aqua is for hover/highlight moments only, never a large fill.

**Rule:** theme toggle is required. make the dark mode default which only #00000 color. light mode with complete white color.

**Typography:** Space Grotesk (headings, weight 600–700) · Inter (body, 400) · JetBrains Mono (stats, labels, tags, numbers — this is the site's "data" visual language, use it consistently for anything numeric).

**Grid:** 12-column, max-width 1180–1280px, 8px base spacing unit, section padding 80–120px desktop / 48–64px mobile.

---

## 2. Sitemap

```
Home
Services/
  ├─ ERP Development & Implementation
  ├─ Mobile App Development
  ├─ Web Development
  └─ Custom Software Systems
Technologies/           ← index + one page per tech (Section 5)
Case Studies/                   ← case study index + filtering (Section 7)
About/ (Story · Leadership · Careers)
Insights/ (Blog)
Contact — NOTE: "Get a Quote" is a MODAL (Section 6), not a page route
```

---

## 3. Page Content

Full paragraph copy for every page (Home, 4 service pages, Industries, Engagement
Models, About, Careers, Contact, case study template, delivery methodology) was
already written and delivered as `website_copy.md`. Use that content verbatim
or adapt it — don't regenerate generic placeholder copy when real copy already
exists for a section.

Tone rules (apply everywhere): specific over abstract, buyer-first phrasing
("You get a system that..." not "We provide..."), no unearned superlatives,
name real technologies rather than "modern tech stack."

---

## 4. Animation & Interaction System

This is the core of this task. Four required effects: **wave background**,
**hover states on cards/buttons**, **parallax**, **liquid glass cards**, plus
**staggered directional reveal** (cards/text popping in from different
directions with varying opacity, not all at once).

### 4.1 Global rules (apply to every animation below)

- Respect `prefers-reduced-motion`: disable all non-essential motion, keep opacity/position final-state.
- Never hide content behind JS that might fail — always ship a fallback that reveals everything after ~1.2s even if triggers don't fire.
- Animate only `transform` and `opacity` for scroll/hover effects — never animate `width`, `height`, `top/left`, or `box-shadow` spread on every frame (layout thrash / jank).
- Add `will-change: transform, opacity` only on elements actively animating, remove it after (or scope it to `:hover`/`.is-animating`) — leaving it on everything hurts performance.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 4.2 Wave background (hero / section dividers)

Layered SVG waves, CSS-animated (no JS needed, cheap on performance). Two waves at different speeds/opacity create depth.

```html
<div class="wave-wrap" aria-hidden="true">
  <svg class="wave wave-back" viewBox="0 0 1440 220" preserveAspectRatio="none">
    <path d="M0,100 C320,180 720,20 1440,100 L1440,220 L0,220 Z"></path>
  </svg>
  <svg
    class="wave wave-front"
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
  >
    <path d="M0,120 C420,40 900,160 1440,80 L1440,220 L0,220 Z"></path>
  </svg>
</div>
```

```css
.wave-wrap {
  position: absolute;
  inset: auto 0 0 0;
  height: 220px;
  overflow: hidden;
  pointer-events: none;
}
.wave {
  position: absolute;
  width: 200%;
  height: 100%;
}
.wave path {
  fill: var(--teal);
}
.wave-back {
  opacity: 0.12;
  animation: waveDrift 18s linear infinite;
}
.wave-front {
  opacity: 0.2;
  animation: waveDrift 11s linear infinite reverse;
}
@keyframes waveDrift {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
```


### 4.3 Hover animations — cards & buttons

```css
.card {
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 44px rgba(11, 37, 69, 0.14);
  border-color: transparent;
}

.btn {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(11, 37, 69, 0.22);
}
.btn:active {
  transform: translateY(0);
}

/* subtle shine sweep on primary buttons */
.btn-primary::after {
  content: "";
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.35),
    transparent
  );
  transform: skewX(-20deg);
  transition: left 0.5s ease;
}
.btn-primary:hover::after {
  left: 120%;
}
```

### 4.4 Parallax effect

Lightweight, rAF-throttled scroll listener — background layer moves slower than foreground content. No heavy libraries needed.

```html
<section class="parallax-section">
  <div class="parallax-layer" data-speed="0.3">
    <!-- background art / gradient / node pattern -->
  </div>
  <div class="parallax-content"><!-- foreground text/cards --></div>
</section>
```

```js
const layers = document.querySelectorAll(".parallax-layer");
let ticking = false;

function updateParallax() {
  const vh = window.innerHeight;
  layers.forEach((layer) => {
    const speed = parseFloat(layer.dataset.speed || 0.3);
    const rect = layer.parentElement.getBoundingClientRect();
    const progress = (vh - rect.top) / (vh + rect.height); // 0 → 1 through viewport
    const offset = (progress - 0.5) * 100 * speed;
    layer.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  },
  { passive: true },
);

if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  layers.forEach((l) => (l.style.transform = "none"));
}
```

Keep parallax speed subtle (`0.2–0.4`). Never apply it to text blocks users need to read mid-scroll — background art, gradients, or decorative diagrams only.

### 4.5 Liquid glass ("glassmorphism") cards

Use for ONE featured element per page (a stat overlay, a hero card, a pricing/plan highlight) — not every card, or the effect stops reading as special.

```css
.glass-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(11, 37, 69, 0.18);
  padding: 28px;
}
/* Needs a colorful/textured background BEHIND it to read as "glass" —
   place over the hero gradient, wave background, or a photo, never over flat var(--bg). */
```

Fallback for browsers without `backdrop-filter` support: `@supports not (backdrop-filter: blur(1px)) { .glass-card { background: rgba(11,37,69,0.85); } }`

### 4.6 Staggered directional reveal (cards/text popping in with different opacity/direction)

Extends the basic scroll-reveal pattern with **direction variants** and **stagger delay**, so a grid of cards doesn't all pop in identically/simultaneously.

```css
.reveal {
  opacity: 0;
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.in {
  opacity: 1;
  transform: none;
}

.reveal[data-dir="up"] {
  transform: translateY(32px);
}
.reveal[data-dir="down"] {
  transform: translateY(-32px);
}
.reveal[data-dir="left"] {
  transform: translateX(-40px);
}
.reveal[data-dir="right"] {
  transform: translateX(40px);
}
.reveal[data-dir="scale"] {
  transform: scale(0.92);
}

/* Apply staggered delay via inline style or nth-child in a grid: */
.reveal:nth-child(1) {
  transition-delay: 0ms;
}
.reveal:nth-child(2) {
  transition-delay: 90ms;
}
.reveal:nth-child(3) {
  transition-delay: 180ms;
}
.reveal:nth-child(4) {
  transition-delay: 270ms;
}
```

```js
// Mark up: <div class="reveal" data-dir="left">...</div>
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}
// Safety fallback — never leave content permanently invisible
setTimeout(() => reveals.forEach((el) => el.classList.add("in")), 1200);
```

**Usage guidance:** vary `data-dir` across a section rather than using one direction everywhere — e.g. in a 3-card row, left card `data-dir="left"`, middle `data-dir="up"`, right `data-dir="right"`, so they visually converge toward center. Use `scale` for single featured elements (stat callouts, testimonial), not grids.

### 4.7 Ambient node-network (optional, hero signature element)

Already built for the homepage hero (canvas-based drifting nodes with connecting lines in teal, suggesting "systems/integration"). Reuse this exact canvas script on any hero that needs the same signature rather than inventing a new background treatment per page — see `homepage_design.html` for the full implementation (`#nodecanvas` + the `tick()`/`initNodes()` functions).

---

## 5. Technology Stack Pages

One page per tech (`/technologies/react/`, `/technologies/net/`, etc.) plus an index. Structure: Hero (logo + trust stat) → Description (2 paragraphs) → "Why This Tech?" (3–4 card grid) → Ecosystem (card grid OR timeline layout — grid for frontend/backend/mobile, timeline for ERP/DevOps-heavy pages) → Relevant Projects (filtered case studies) → Tech-specific FAQ → CTA band into the quote modal.

Full section-by-section content spec with copy examples: see `tech_quote_casestudy_spec.md`, Section 1.

---