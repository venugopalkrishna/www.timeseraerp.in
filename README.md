# Timesera website — classic edition

Clean, minimal redesign. Palette: **navy `#1c1078`** + **mint `#52bd91`** + soft neutrals (from the Timesera logo).
Type: Instrument Serif (headings) + Plus Jakarta Sans (body). Animations: `motion` (Framer Motion). Icons: `lucide-react`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Folder structure
```
src/
├─ main.jsx, App.jsx            entry + routes
├─ styles/                      tokens.css (colours, fonts, shadows) · base.css (reset, shared classes)
├─ data/                        ALL text content lives here — edit without touching UI
│  ├─ site.js                   phones, emails, address, nav, socials, client brands
│  ├─ softwares.js              8 industry softwares + pricing tiers
│  ├─ services.js               6 services + 18 capabilities
│  └─ content.js                stats, process, about, portfolio, reviews, legal text
├─ services/inquiry.js          contact-form API call (swap for your real endpoint)
├─ utils/                       icons.js (string → icon), format.js (₹, tel links)
├─ components/
│  ├─ layout/                   Layout, Navbar, Footer
│  ├─ ui/                       Button, Card, Reveal, Counter, Marquee, Logo, PageHero, SectionHeading, Icon
│  └─ sections/                 HeroVisual, TestimonialSlider, ContactForm, CTA
└─ pages/                       Home, About, Softwares, Services, Portfolio, Testimonials, Contact, Legal
```
Each component/page has its own `.css` file next to it.

## Change colours
Edit only `src/styles/tokens.css`.
