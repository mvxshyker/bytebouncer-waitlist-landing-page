# Waitlist Landing Page — Starter Stack

A high-converting waitlist landing page built with React + Vite + Tailwind. Clone it, swap the copy, and ship in under an hour.

**Live demo:** https://bytebouncer-waitlist-landing-page.vercel.app

---

## Tech Stack

| Layer | Tool | Why |
|-------|------|-----|
| Framework | React 18 | Component-based, fast to iterate |
| Build | Vite | Near-instant HMR, optimized prod builds |
| Styling | Tailwind CSS v3 | Utility-first, mobile-first by default |
| Font | Inter via Google Fonts | Clean, modern, free |
| Forms | Formspree | Zero-backend email capture, free tier |
| Hosting | Vercel | Auto-deploy on git push, free, global CDN |

---

## Page Structure

```
Hero          → Hook + CTA + social proof stats
Problem       → Dramatize the villain (why it matters)
HowItWorks    → 3-step plan (removes fog of uncertainty)
Features      → Benefits, not features
SocialProof   → Testimonials + stats
FAQ           → Objection handling
Footer CTA    → Final push with email form
```

Each section is its own component in `src/components/`.

---

## Quick Start

```bash
git clone https://github.com/mvxshyker/bytebouncer-waitlist-landing-page.git my-waitlist
cd my-waitlist
npm install
npm run dev
```

---

## Customisation Checklist

### 1. Branding — `tailwind.config.js`
```js
colors: {
  'bb-black': '#0A0A0A',   // page background
  'bb-lime': '#BEFF00',    // primary accent — change this to your brand color
  'bb-red': '#FF3B3B',     // problem section accent
  // ...
}
```

### 2. Copy — edit each component directly
- **Hero headline** → `src/components/Hero.jsx`
- **Problem stats + leak list** → `src/components/Problem.jsx`
- **3-step plan** → `src/components/HowItWorks.jsx`
- **Feature cards** → `src/components/Features.jsx`
- **Testimonials** → `src/components/SocialProof.jsx`
- **FAQ answers** → `src/components/FAQ.jsx`
- **CTA + footer** → `src/components/Footer.jsx`

### 3. Email capture — `src/components/Footer.jsx`
1. Create a free form at https://formspree.io
2. Replace the endpoint:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })
```

### 4. OG / Social preview — `index.html` + `public/og-image.png`
- Update the `og:url` meta tag to your domain
- Edit `public/og-image.svg` with your headline + branding
- Re-export to PNG (on macOS: `qlmanage -t -s 1200 -o public public/og-image.svg && mv public/og-image.svg.png public/og-image.png`)

### 5. Deploy
```bash
# Push to GitHub, then import on vercel.com
# Vercel auto-detects Vite — no config needed
# Every git push = auto redeploy
git add . && git commit -m "my brand" && git push
```

---

## Conversion Principles Baked In

This template follows **StoryBrand + Direct Response** structure:

- **5-second test** — hero makes it clear what it is and who it's for instantly
- **Hero = customer** — copy positions the user as the hero, the product as the guide
- **The villain** — Problem section dramatizes the pain before pitching the solution
- **3-step plan** — removes decision paralysis with a simple path forward
- **Social proof** — testimonials + stats lower perceived risk
- **Objection handling** — FAQ addresses the "but wait..." moments before they kill the conversion
- **Multiple CTAs** — hero, mid-page anchor, and final footer form

---

## Performance

- Mobile-first Tailwind classes throughout (`base → sm → md → lg`)
- Phone mockup hidden on mobile (`hidden lg:flex`) — no render cost
- `will-change: opacity, transform` on scroll-reveal elements — GPU compositing
- `-webkit-overflow-scrolling: touch` — native momentum scroll on iOS
- `prefers-reduced-motion` support — no animations for users who opt out

---

## File Structure

```
src/
  components/
    Hero.jsx          # Above-the-fold hook
    AppMockup.jsx     # Product screenshot / mockup
    Problem.jsx       # The villain section
    HowItWorks.jsx    # 3-step plan
    Features.jsx      # Benefits grid
    SocialProof.jsx   # Testimonials + stats
    FAQ.jsx           # Accordion objection handler
    Footer.jsx        # Final CTA + email form + nav
  App.jsx             # Root — wires sections + IntersectionObserver
  index.css           # Global styles, reveal animations, Tailwind layers
  main.jsx            # React entry point
public/
  og-image.png        # Social preview image (1200×630)
  og-image.svg        # Editable source for OG image
index.html            # Meta tags, OG tags, font import
tailwind.config.js    # Color tokens, font config
```
