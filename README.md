# Universal Car Detailing Studio — Website

Exact rebuild of the BlackShield-style detailing studio site, rebranded for
**Universal Car Detailing Studio** (Thane), using your real uploaded logo and
studio photos in place of the stock images.

## Stack
- React 18 + React Router 6
- Tailwind CSS
- CRACO (for Tailwind/PostCSS integration on top of Create React App)
- lucide-react icons

## Run it locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Build for production

```bash
npm run build
```

Outputs a static site to `build/` — deployable to Vercel, Netlify, or any
static host.

## What's real vs. placeholder

- **Logo** (navbar, footer, hero): your uploaded Universal Car Detailing
  Studio shield logo.
- **Hero slides, service cards, About page, Gallery**: your uploaded studio
  photos (shopfront banners, the Kia in-bay shots, and the "Universal PPF
  Studio" promotional posters).
- **Testimonials, brand names, process steps, FAQs**: carried over unchanged
  from the original site structure — replace with your real client
  quotes/brand list whenever you're ready.
- Phone/WhatsApp/email/address in `src/data/mock.js` are placeholders —
  update them to your real studio contact details before publishing.

## Where things live

- `src/data/mock.js` — all site content (brand info, services, testimonials,
  FAQs, gallery) in one place.
- `src/assets/` — your real uploaded images.
- `src/pages/` — one file per route (Home, About, Services, ServiceDetail,
  Gallery, Contact).
- `src/components/` — Navbar, Footer, WhatsApp floating button, StatsRow,
  BeforeAfter slider (available if you want to wire it into a page later).
