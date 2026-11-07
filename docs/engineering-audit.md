# Engineering Audit & Modernization Report: ZENTLEAF

**Status:** Completed & Verified  
**Date:** 2026-10-10  
**Project:** ZENTLEAF (Custom Digital Solutions & AI Agency Website & Platform)

---

## 1. Executive Summary
ZENTLEAF is a high-performance full-stack agency web application built on **React 19**, **TanStack Start** (SSR with file-based routing via **TanStack Router**), **TanStack React Query**, and **Tailwind CSS v4** with **Radix UI** primitives and **motion/react**.

The codebase has been fully modernized and freed from proprietary vendor dependencies. All features, business logic, responsive UI styling, interactive capabilities engine, career application flows, and project inquiry systems have been strictly preserved and verified.

---

## 2. Standardized Technology Stack

| Layer | Implementation | Notes |
|---|---|---|
| **Framework / SSR** | TanStack Start (`@tanstack/react-start` 1.168.60) | Clean standard Vite plugin integration |
| **Routing** | TanStack Router (`@tanstack/react-router` 1.170.41) | File-based routing in `src/routes/` |
| **Frontend UI** | React 19.2.0 + React DOM 19.2.0 | Standard React 19 architecture |
| **Styling** | Tailwind CSS v4.2.1 + `@tailwindcss/vite` | Modern tokenized CSS system |
| **Component Kit** | Radix UI primitives, Lucide React, Embla Carousel | Headless, accessible primitives |
| **Animations** | Motion (`motion` 13.1.1) | Hardware-accelerated UI transitions |
| **Data Fetching** | `@tanstack/react-query` 5.101.1 | Client & SSR hydration support |
| **Build System** | Vite 8.1.5 + Nitro 3.0 | Standard `defineConfig` from `vite` |
| **Package Manager** | npm (with standard `package-lock.json`) | 0 vulnerabilities, reproducible installs |
| **Server Target** | Nitro (Cloudflare / Node.js / Docker portable) | Portable SSR server bundle |

---

## 3. Clean Directory Structure

```
ZENTLEAF/
├── docs/                     # Engineering documentation & audit reports
│   └── engineering-audit.md  # Comprehensive codebase audit
├── public/                   # Public static assets & favicon icons
├── src/
│   ├── assets/               # Local optimized images
│   ├── components/
│   │   ├── apply/            # Multi-step job application form and canvas
│   │   ├── ui/               # Reusable UI primitives (buttons, dialogs, sheet, etc.)
│   │   ├── Header.tsx        # Navigation header with backdrop blur & mobile menu
│   │   ├── Footer.tsx        # Site footer with social links & sitemap
│   │   ├── CapabilitiesEngine.tsx # Interactive capabilities matrix & filter
│   │   ├── Logo.tsx          # SVG Brand Logo
│   │   └── kit.tsx           # Shared design system components (Reveal, Section, CTA)
│   ├── data/
│   │   ├── site.ts           # Core content (services, case studies, industries)
│   │   └── overhaul.ts       # Extended content, team details, values, time zones
│   ├── hooks/
│   │   └── use-mobile.tsx    # Responsive viewport detection hook
│   ├── lib/
│   │   ├── error-capture.ts  # SSR error capture utility
│   │   ├── error-page.ts     # Standalone fallback HTML error template
│   │   ├── error-reporting.ts# Clean, vendor-independent error reporter
│   │   └── utils.ts          # clsx + twMerge helper
│   ├── routes/               # File-based TanStack routes
│   │   ├── __root.tsx        # Root layout, HTML shell, meta tags, schema.org JSON-LD
│   │   ├── index.tsx         # Homepage (Hero, Services, Case Studies, Testimonials)
│   │   ├── about.*.tsx       # About pages (Story, Team, Values, Tech)
│   │   ├── services.*.tsx    # Service listing and dynamic slug detail pages
│   │   ├── case-studies.*.tsx# Case studies listing and detail pages
│   │   ├── industries.*.tsx  # Industry listing and detail pages
│   │   ├── insights.*.tsx    # Articles / Insights listing and detail pages
│   │   ├── careers.*.tsx     # Careers listing, job detail, and application form
│   │   ├── contact.tsx       # Interactive project inquiry form with validation
│   │   ├── privacy.tsx       # Privacy policy
│   │   └── terms.tsx         # Terms of service
│   ├── routeTree.gen.ts      # Auto-generated route tree
│   ├── router.tsx            # Router instantiation & React Query context setup
│   ├── server.ts             # SSR server entry point with error normalization
│   ├── start.ts              # TanStack Start configuration (CSRF & Error middlewares)
│   └── styles.css            # Tailwind v4 theme, fonts, custom utilities
├── .env.example              # Safe environment variable template
├── .gitignore                # Git ignore rules including .env and build output
├── components.json           # shadcn/ui configuration
├── eslint.config.js          # ESLint flat configuration
├── package-lock.json         # Standard npm lockfile
├── package.json              # Clean dependencies and build scripts
├── tsconfig.json             # TypeScript compiler options
└── vite.config.ts            # Standardized Vite configuration
```

---

## 4. Vendor Decoupling Actions & Disposition

| Item / File | Original Status | Action Taken | Replacement / Verification |
|---|---|---|---|
| `@lovable.dev/vite-tanstack-config` | Proprietary config wrapper in `package.json` and `vite.config.ts` | **Removed** | Replaced with standard `vite.config.ts` using `@tanstack/react-start/plugin/vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`, and `nitro/vite`. Verified with `npm run build`. |
| `src/lib/lovable-error-reporting.ts` | Lovable editor iframe telemetry hooks | **Removed** | Replaced with standard `src/lib/error-reporting.ts` providing standard logging and optional custom event dispatch. |
| `src/routes/__root.tsx` | Imported `reportLovableError` | **Updated** | Updated to import and invoke `reportError` from `../lib/error-reporting`. |
| `.lovable/` folder | Lovable internal JSON metadata | **Removed** | No runtime impact; verified. |
| `bunfig.toml` & `bun.lock` | Bun lockfiles referencing internal registry mirrors | **Removed** | Standardized on npm `package-lock.json` with public npmjs registry. |
| `README.md` | Lovable editor marketing badges & links | **Updated** | Replaced with clean developer guides, architecture documentation, and run commands. |

---

## 5. Security & Configuration Review

1. **Secrets:** No secrets or private keys exist in source control.
2. **Environment Template:** Added `.env.example` documenting optional deployment variables (`PORT`, `VITE_SITE_URL`, `VITE_CONTACT_API_URL`, `VITE_ANALYTICS_ID`).
3. **Git Protection:** `.gitignore` explicitly excludes `.env`, `.env.local`, `.dev.vars`, and build artifacts (`.output`, `dist`, `.wrangler`).
4. **CSRF Protection:** Maintained CSRF protection middleware in `src/start.ts` for server functions.

---

## 6. Verification Results

| Check | Command | Result | Notes |
|---|---|---|---|
| **Package Audit** | `npm audit` | **0 vulnerabilities** | 411 packages audited cleanly |
| **Type Check** | `npm run typecheck` (`tsc --noEmit`) | **Passed (Exit 0)** | 0 type errors across all routes & components |
| **Lint Check** | `npm run lint` (`eslint .`) | **Passed (Exit 0)** | 0 errors |
| **Code Formatting** | `npm run format` (`prettier --write .`) | **Passed (Exit 0)** | Consistent formatting applied |
| **Production Build** | `npm run build` (`vite build`) | **Passed (Exit 0)** | Client bundle & Nitro SSR worker generated cleanly in `.output` |

