# Two Timelines, Two Purposes — Differentiation Spec

The site has two components that could easily end up looking identical if
built carelessly: the **Delivery Methodology timeline** (service pages) and
the **Tech Ecosystem timeline** (technology pages, inspired by BairesDev's
`/technologies/react/` "Tools for React development" section, reimagined as
a timeline instead of a card grid). They need to look and feel like two
different things, because they represent two different concepts:

| | Delivery Methodology | Tech Ecosystem |
|---|---|---|
| **What it shows** | The sequence of what happens *over the life of a project* | The tools used at each *layer of working with a specific technology* |
| **Is it time-bound?** | Yes — each step has a real duration ("1–2 weeks") | No — these aren't calendar phases, they're lifecycle *categories* |
| **Where it lives** | Service pages, About/Process page | Individual technology pages (`/technologies/react/`) |
| **Orientation** | Vertical | Horizontal (desktop), stepped-vertical (mobile) |
| **Node shape** | Circle, single number | Hexagon, stage icon |
| **Content per node** | One paragraph, one duration tag | A cluster of tool/library chips, no duration |
| **Color accent** | Navy nodes, teal connecting line | Teal nodes, aqua connecting line |

Building these with the same visual template is the single easiest way to
make the site feel repetitive — treat this doc as the rule for keeping them
distinct.

---

## 1. Delivery Methodology Timeline (service pages)

This one is already specified and built (see `website_build_skill.md` and the
process section of the homepage). Keep it exactly as is — this section just
restates its identity so it doesn't drift toward the ecosystem style below.

**Identity markers to preserve:**
- Vertical layout, thin connecting line on the left
- Circular nodes with plain numbers (01–07)
- Mono-font duration tag right-aligned on each row ("1–2 WEEKS")
- One phase can carry an `.active` state (navy-filled node) if shown mid-engagement
- Verbs are process-oriented: *Discovery, Architecture, Design, Development, QA, Deployment, Support*

```html
<div class="process-item active">
  <div class="process-num">01</div>
  <div class="process-body"><h4>Discovery & Requirements</h4><p>...</p></div>
  <div class="process-dur">1–2 WEEKS</div>
</div>
```
(Full CSS already in `homepage_design.html` under `.process-*` — reuse verbatim, don't restyle per service page.)

---

## 2. Tech Ecosystem Timeline (technology pages)

This replaces the "Ecosystem" card-grid option from the earlier tech-page spec
with a horizontal, stage-based layout — closer to a subway map than a
schedule. It answers "what do you use, and at which layer of the stack,"
not "what happens on what day."

### 2.1 Stage set (generic — adapt tool names per technology)

For a frontend technology (e.g. React), five stages work well:

```
Architect ──── Build ──── Style ──── Validate ──── Ship & Run
```

| Stage | What goes here (React example) |
|---|---|
| **Architect** | Next.js, TypeScript, routing/state approach (React Router, Zustand) |
| **Build** | Core framework tooling — Vite/Webpack, component patterns |
| **Style** | Tailwind CSS, Storybook, design-system tooling |
| **Validate** | Jest, React Testing Library, Playwright |
| **Ship & Run** | CI/CD, Vercel/Netlify, monitoring (Sentry, Web Vitals) |

For a backend-heavy or ERP technology, relabel stages to fit (e.g. **Model →
Integrate → Secure → Test → Deploy**) — the five-stage *shape* stays
consistent across tech pages even when the stage names change per domain.

### 2.2 Visual structure

```
   ◆                ◆                ◆                ◆                ◆
Architect ──────  Build  ──────  Style  ──────  Validate ──────  Ship & Run
   │                │                │                │                │
┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐
│Next.js│        │ Vite  │        │Tailwind│       │ Jest  │       │Vercel │
│ TS    │        │Webpack│        │Storybook│      │ RTL   │       │Sentry │
│Zustand│        │       │        │        │       │Playwright│    │       │
└──────┘        └──────┘        └──────┘        └──────┘        └──────┘
```

Diamond/hexagon nodes on the rail (not circles — keeps it visually distinct
from the process timeline), each stage below the rail holds a small card with
2–4 tool chips, not a paragraph.

### 2.3 HTML

```html
<div class="eco-timeline">
  <div class="eco-rail"></div>

  <div class="eco-stage">
    <div class="eco-node"><span class="eco-node-icon">◆</span></div>
    <h4>Architect</h4>
    <div class="eco-card">
      <span class="eco-chip">Next.js</span>
      <span class="eco-chip">TypeScript</span>
      <span class="eco-chip">Zustand</span>
    </div>
  </div>

  <div class="eco-stage">
    <div class="eco-node"><span class="eco-node-icon">◆</span></div>
    <h4>Build</h4>
    <div class="eco-card">
      <span class="eco-chip">Vite</span>
      <span class="eco-chip">Webpack</span>
    </div>
  </div>

  <div class="eco-stage">
    <div class="eco-node"><span class="eco-node-icon">◆</span></div>
    <h4>Style</h4>
    <div class="eco-card">
      <span class="eco-chip">Tailwind CSS</span>
      <span class="eco-chip">Storybook</span>
    </div>
  </div>

  <div class="eco-stage">
    <div class="eco-node"><span class="eco-node-icon">◆</span></div>
    <h4>Validate</h4>
    <div class="eco-card">
      <span class="eco-chip">Jest</span>
      <span class="eco-chip">React Testing Library</span>
      <span class="eco-chip">Playwright</span>
    </div>
  </div>

  <div class="eco-stage">
    <div class="eco-node"><span class="eco-node-icon">◆</span></div>
    <h4>Ship & Run</h4>
    <div class="eco-card">
      <span class="eco-chip">Vercel</span>
      <span class="eco-chip">Sentry</span>
    </div>
  </div>
</div>
```

### 2.4 CSS

```css
.eco-timeline {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  padding-top: 28px;
  margin: 40px 0;
}
.eco-rail {
  position: absolute;
  top: 9px; left: 5%; right: 5%;
  height: 2px;
  background: var(--aqua);
  opacity: .5;
  z-index: 0;
}
.eco-stage {
  position: relative;
  z-index: 1;
  flex: 1;
  text-align: center;
}
.eco-node {
  width: 18px; height: 18px;
  margin: 0 auto 14px;
  background: var(--teal);
  transform: rotate(45deg);        /* diamond, not circle — distinct from process timeline */
  border: 3px solid var(--white);
  box-shadow: 0 0 0 2px var(--teal);
}
.eco-stage h4 {
  font-family: 'Space Grotesk';
  font-size: 14px;
  color: var(--navy);
  margin-bottom: 12px;
}
.eco-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 14px 10px;
  display: flex; flex-direction: column; gap: 6px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.eco-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(11,37,69,0.10); }
.eco-chip {
  font-family: 'JetBrains Mono';
  font-size: 11px;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 4px 10px;
  color: var(--ink-soft);
}

/* Mobile: rail rotates to vertical, stages stack */
@media (max-width: 760px) {
  .eco-timeline { flex-direction: column; }
  .eco-rail { top: 0; bottom: 0; left: 9px; right: auto; width: 2px; height: auto; }
  .eco-stage { text-align: left; padding-left: 32px; margin-bottom: 24px; }
  .eco-node { position: absolute; left: 0; margin: 0; }
}
```

### 2.5 What NOT to do here

- Don't add duration tags ("2 weeks") to any stage — these tools aren't used for a fixed time, they're used *whenever that layer of the stack is touched*. Adding durations would visually and conceptually collide with the Delivery Methodology timeline.
- Don't use circular numbered nodes — reserve that shape for the process timeline so a user can tell at a glance which kind of timeline they're looking at.
- Don't write paragraph descriptions per stage — chips only. If a stage needs explanation, put one short sentence *above* the whole timeline (in the section intro), not per node.

---

## 3. Where each one appears (so they're never on the same page competing for attention)

| Page | Which timeline | Notes |
|---|---|---|
| Service pages (ERP/Mobile/Web/Custom) | **Delivery Methodology** only | Shows how an engagement runs, not what tools are used |
| Technology pages (`/technologies/react/`) | **Tech Ecosystem** only | Replaces the "Ecosystem" card-grid option from the earlier tech-page spec (Section 1.2 of `tech_quote_casestudy_spec.md`) — use this timeline version instead of the card grid when you want the lifecycle framing |
| Homepage | Delivery Methodology (condensed preview) | Already built — do not add the ecosystem timeline here, it has no single "technology" to anchor it |
| About/Process page | Delivery Methodology (full version) | Same component as service pages, just full 7 steps in one place |

If a page ever seems to need both (e.g., a service page briefly mentioning
tech), keep the tech mentions as simple logo chips inline in prose — don't
drop a second timeline component onto a page that already has one.
