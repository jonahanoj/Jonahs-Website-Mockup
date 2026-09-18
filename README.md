# Jonah's Landscaping Mockup Website

Sample landscaping site for York PA outreach (Quince & Clover).

# Quince & Clover Landscaping - Sample Client Site

Static **multi-page** marketing mockup for **Quince & Clover Landscaping**, a fictional York, PA landscaper. Built for Jonah to preview and give feedback.

**Local preview:** `http://127.0.0.1:8765/`  
**Folder:** `/workspace/green-ridge-landscaping/`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home - hero, intro, featured services, trust blurb, CTA |
| `services.html` | Full services (6 cards) + CTA |
| `gallery.html` | Project gallery grid + CTA |
| `about.html` | Why us / trust + testimonials |
| `service-area.html` | York County towns list |
| `contact.html` | Contact details, social links, form |
| `styles.css` | Design system & layout |
| `script.js` | Mobile nav, sticky header, form UI |
| `README.md` | This file |
| `previews/` | Screenshot previews (leave alone) |

## Page map

```
Home (index.html)
├── Services (services.html)     ← featured cards deep-link here
├── Gallery (gallery.html)
├── About (about.html)           ← why us + reviews
├── Service Area (service-area.html)
└── Contact (contact.html)       ← “Get a Quote” CTA
```

Every page shares a sticky header (logo + links; current page via `aria-current`) and footer (nav + social). Mobile hamburger works site-wide.

## How to preview

```bash
cd /workspace/green-ridge-landscaping
python3 -m http.server 8765
```

Open http://127.0.0.1:8765/ (or any `.html` page directly).

## Design choices

- **Palette:** Deep forest greens (`#1a3322`-`#4a8a5c`) + warm cream/sand neutrals - intentionally *not* purple SaaS gradients  
- **Type:** Fraunces (display) + DM Sans (UI) - editorial but approachable for a local trade site  
- **Feel:** Generous whitespace, soft cards, rounded CTAs, sticky frosted nav - 2026 local business polish homeowners trust  
- **Mobile-first:** Hamburger under ~860px; gallery/cards reflow cleanly  

## Where to swap photos

All images are Unsplash URLs in the HTML. Replace `src` on:

| Location | Page | Theme |
|----------|------|-------|
| Hero background | `index.html` | Wide residential lawn |
| Why-us figure | `about.html` | Garden beds / plantings |
| Gallery (4 images) | `gallery.html` | Lawn, beds, pathway, exterior |

Prefer real client photos when available (WebP, ~1200-1600px wide). Keep `alt` text descriptive.

## Edit notes (copy / content for Jonah)

These are intentional placeholders - **no `[EDIT]` marks on the live UI**.

- **Business name / tagline:** “Quince & Clover Landscaping” - rewrite hero H1 and lead to match Jonah’s voice.  
- **Est. year:** Hero says “Est. 2014” and badge says “10+ years” - update to real founding story.  
- **Phone:** `(717) 555-0182` - fake; replace everywhere.  
- **Email:** `hello@quinceandclover.example` - fake `.example` domain.  
- **Address:** `1420 Market Street, York, PA 17401` - fictional.  
- **Testimonials:** Sarah M., Tom & Lisa R., Kevin P. - all fake; swap for real reviews (`about.html`).  
- **Town list:** Adjust on `service-area.html`.  
- **Contact form:** Front-end only. On submit it shows a demo success message and does **not** send. Wire to Formspree, Netlify Forms, or a backend when ready (see `script.js`).  
- **Services:** 6 offerings on `services.html` - drop/rename as needed.  
- **Social:** Footer + contact link to platform homes only (Facebook / Instagram / Yelp / Google Maps) - not fake profiles.  
- **Footer copyright:** Dynamic year via JS; “Sample site for preview” can be removed for a live prospect handoff.

## Accessibility & performance

- Semantic landmarks, skip link, labeled form fields, `aria-live` form status  
- Current page marked with `aria-current="page"` in the primary nav  
- Focus-visible styles on buttons/controls  
- `prefers-reduced-motion` respected  
- Lazy-loaded below-fold images; hero `fetchpriority="high"`  
- No heavy frameworks - static HTML/CSS/JS only  

## Out of scope (by design)

- No git / GitHub / backend / Origin deploy  
- No real form submission or CRM  
- No analytics  

---

*Portfolio-ready mockup for screenshot feedback. Quality over speed.*


## Images

See `IMAGES-LICENSE.md`. Photos are free Unsplash License files in `images/` (local, not hotlinked).
