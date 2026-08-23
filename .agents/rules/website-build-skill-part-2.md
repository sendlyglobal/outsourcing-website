---
trigger: always_on
---

6. Get-a-Quote Modal (Cal.com + Zoom)

Never route "Get a Quote" to a /contact page. It opens a modal: Step 1 = short qualifying form (name, email, company, project type) → Step 2 = embedded Cal.com scheduler inline in the same modal, routed to a different calendar per project type. Cal.com connects to Zoom on the backend so the actual call happens on Zoom automatically.

No signup required for the visitor — only your business needs a Cal.com account. Visitors just pick a time slot and enter name/email, same as any booking widget.

js
qualifyForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(qualifyForm));
  const calLink = {
    erp: "yourcompany/erp-discovery-call",
    mobile: "yourcompany/mobile-discovery-call",
    web: "yourcompany/web-discovery-call",
    custom: "yourcompany/custom-discovery-call"
  }[data.project_type] || "yourcompany/discovery-call";

  qualifyForm.classList.add('hidden');
  schedulerContainer.classList.remove('hidden');

  const cal = await (await import("https://esm.sh/@calcom/embed-react")).getCalApi();
  cal("inline", {
    elementOrSelector: "#scheduler-container",
    calLink: calLink,
    config: { name: data.name, email: data.email, notes: `Company: ${data.company}` }
  });
});

Modal styling: overlay rgba(11,37,69,0.6), card border-radius:16px, max-width 480px (form step) / 640px (scheduler step), close on Escape + overlay click. Always include a small fallback link: "Prefer email? Send us a message instead →" for visitors who don't want to book a call yet.

Full implementation guide including Calendly/Zoom Scheduler alternatives: see tech_quote_casestudy_spec.md, Section 2.

7. Case Study Template

Every case study is a data object — render pages from this schema, and reuse the same objects for filtered listings on tech pages and /work/.

json
{
  "slug": "meridian-retail-checkout-rebuild",
  "title": "Rebuilding Checkout for Peak-Season Load",
  "summary": "One-sentence, must work standalone as a card preview.",
  "location": "City, Country",
  "industry": "Retail & eCommerce",
  "services": ["Web Development", "Cloud Architecture", "QA & Load Testing"],
  "technologies": ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
  "duration": "4 months",
  "team_size": "5 engineers, 1 PM",
  "key_results": [
    { "metric": "3.1x", "label": "Peak traffic headroom" },
    { "metric": "1.2s", "label": "Checkout load time, down from 4.8s" }
  ],
  "situation": { "heading": "Frame as the problem", "detail": "..." },
  "solution":  { "heading": "Frame as the approach taken", "detail": "..." },
  "result":    { "heading": "Frame as the outcome, metric in the heading", "detail": "..." },
  "testimonial": { "quote": "...", "name": "...", "title": "...", "company": "..." }
}

Render key_results as large mono-font stat cards (32–40px metric, 12–13px label) — same treatment as the homepage stats strip, for visual consistency sitewide. Page layout, writing rules per field, and filtering behavior: see tech_quote_casestudy_spec.md, Section 3.

8. Build Conventions Checklist
 One accent color per element (Section 1) — no teal+aqua mixing
 All animated properties limited to transform/opacity (Section 4.1)
 prefers-reduced-motion handled globally
 Every scroll-reveal has the 1.2s safety-reveal fallback (Section 4.6)
 Glass/liquid-glass cards used sparingly (one per page max) and only over textured/gradient backgrounds, never flat var(--bg)
 "Get a Quote" opens the modal, never routes to /contact
 Case studies populated from the JSON schema, not hand-written HTML per page
 Mobile breakpoints: ≤640px / 641–1024px / 1025px+, mobile-first
 Minimum 4.5:1 text contrast, 44×44px tap targets, one <h1> per page
 No localStorage/sessionStorage if this is ever rendered as a Claude artifact — use in-memory state only
Reference files
tech_quote_casestudy_spec.md — detailed spec for tech pages, quote modal, case studies
