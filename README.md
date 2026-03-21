# nemanja.dev — Personal Portfolio

Personal portfolio website for Nemanja Nakomčić, Full-Stack Web Developer with 5+ years of experience building enterprise, SaaS, fintech, and headless web platforms.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | JavaScript (React 19) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| i18n | Custom implementation (SR / EN) |
| Package Manager | pnpm |

## Features

- **Bilingual (SR / EN)** — auto-detects language from `Accept-Language` header, manual switcher in the header
- **App Router i18n** — locale-prefixed routes (`/sr`, `/en`) with middleware-based redirect
- **Fully animated** — scroll-triggered section animations and item stagger via Framer Motion
- **SEO optimized** — per-locale metadata, Open Graph tags, sitemap, robots.txt
- **Performance-first** — AVIF/WebP image optimization, immutable asset caching, Gzip compression
- **Security headers** — `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- **Contact form** — server-side API route with email delivery
- **Responsive** — mobile-first layout across all sections

## Project Structure

```
app/
  [locale]/         # Locale-prefixed routes (sr / en)
  api/contact/      # Contact form API route
components/
  layout/           # Header
  sections/         # Page sections (Hero, About, Skills, Experience, Projects, Contact, Footer)
  ui/               # Reusable UI components (Badge, Button, AnimatedSection, etc.)
  icons/            # SVG icon components
hooks/              # useLanguage hook
lib/
  animations/       # Shared Framer Motion variants
  i18n/
    translations/   # sr.js and en.js translation files
public/             # Static assets (CV, OG image, favicon, etc.)
proxy.js            # i18n middleware (locale detection & redirect)
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Run ESLint
pnpm format    # Format with Prettier
```

## i18n

Translations live in `lib/i18n/translations/`. Each locale has a single flat file (`sr.js`, `en.js`) exporting a typed object consumed via the `useLanguage` hook. The middleware in `proxy.js` reads the `Accept-Language` header and redirects to the appropriate locale prefix on first visit.

## Notable Projects Showcased

| Project | Type |
|---|---|
| digitalrealty.com | Enterprise Web Platform |
| vasovic.com | Headless Content Site |
| aviani.se | Headless E-Commerce |
| genny.rs | Headless Showroom Site |
| soca.rs | E-Commerce & Service Platform |

## Deployment

Deployed on **Vercel**. Every push to `main` triggers a production deploy automatically.
