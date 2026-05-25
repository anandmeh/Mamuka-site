# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**Mamuka Site** is a modern, multi-page Next.js website showcasing AdTech solutions and case studies. Built with React 19, TypeScript, and dark theme design.

**Location:** `/Users/anandmehrotra/mamuka-site/`

---

## Quick Start

### Run Development Server
```bash
cd /Users/anandmehrotra/mamuka-site
npm run dev
# Opens http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

---

## Architecture

**Technology Stack:**
- Next.js 16.2 (App Router)
- React 19
- TypeScript
- CSS (no framework)
- Dark theme with CSS variables

**Project Structure:**
```
app/
  ├── layout.tsx           # Root layout (nav + footer)
  ├── globals.css          # Global styles + variables
  ├── page.tsx             # Home page
  ├── home.css             # Home page styles
  ├── case-studies/
  │   ├── page.tsx         # Case studies listing
  │   ├── case-studies.css # Listing styles
  │   ├── [id]/
  │   │   └── page.tsx     # Individual case study page
  │   └── case-study-detail.css
  ├── team/
  │   ├── page.tsx         # Team page
  │   └── team.css
  └── data/
      └── caseStudies.ts   # Case study data
```

**Color System:**
- Background: `#000` (pure black)
- Secondary: `#111`, `#1a1a1a`
- Text: `#fff` (white), `#ccc` (light gray)
- Primary Blue: `#3b82f6`
- Hover Blue: `#2563eb`

All colors defined as CSS variables in `globals.css` for easy theming.

---

## Case Studies Data

**Location:** `app/data/caseStudies.ts`

Each case study has:
- `id` — URL slug (e.g., `video`, `pps`, `prebid`)
- `title` — Display title
- `icon` — Emoji icon
- `summary` — One-line description
- `challenge` — Problem statement
- `solution` — Array of solution points
- `results` — Array of result metrics

**Adding New Case Study:**
1. Add object to `caseStudies` array in `caseStudies.ts`
2. Create route at `app/case-studies/[new-id]/page.tsx` (auto-created via `generateStaticParams`)

---

## Common Tasks

### Update Home Page Content
Edit `app/page.tsx` for hero, services, process sections.

### Modify Services List
Edit service cards in `app/page.tsx` (lines ~15-40).

### Add New Case Study
1. Add to `app/data/caseStudies.ts`
2. Route automatically created via dynamic route `[id]`

### Change Color Scheme
Edit CSS variables in `app/globals.css` (lines 1-10).

### Update Navigation
Edit `nav` element in `app/layout.tsx`.

### Adjust Typography
Edit font sizes in respective `.css` files. Most uses:
- H1/H2: `2rem` to `3rem`
- Body: `0.95rem` to `1.1rem`
- CSS variables for color consistency

---

## Styling Notes

- **No CSS frameworks** — Pure CSS with variables
- **Responsive** — Grid uses `auto-fit, minmax()` for breakpoints
- **Dark theme** — All colors use CSS variables
- **Hover effects** — Cards scale/lift on hover
- **Animations** — Subtle transitions (0.3s) for UX

---

## Deployment

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Other Platforms:**
- Netlify: Connect GitHub repo
- GitHub Pages: Use `npm run build` output in `out/`
- Docker: Standard Node.js container with `next start`

---

## Performance Notes

- Static generation for all case study pages via `generateStaticParams`
- CSS variables reduce redundancy
- No external dependencies (lightweight)
- Images lazy-loaded (Next.js default)

---

## Future Enhancements

- Add `<Image>` components for performance
- Implement contact form
- Add testimonials section
- SEO optimization (metadata per page)
- Analytics integration
- Blog or resource section
