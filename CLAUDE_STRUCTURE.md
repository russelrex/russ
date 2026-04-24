# Claude Design Reference

This document describes the structure of this portfolio site so Claude (or any AI assistant) can quickly understand where to make changes.

## Project Snapshot

- Framework: Next.js 13 App Router
- Language: TypeScript + React
- Styling: Tailwind CSS + global CSS
- Content: Contentlayer + MDX for project detail pages
- Runtime model: Mostly static pages with selective `revalidate = 60`

## Directory Structure

```txt
russ/
  app/                     # App Router pages and shared UI
    layout.tsx             # Root HTML/body wrapper + global metadata/fonts
    page.tsx               # Landing page
    about/
      layout.tsx
      page.tsx
    contact/
      page.tsx
    projects/
      page.tsx             # Main projects listing (cards + videos)
      article.tsx
      layout.tsx
      [slug]/
        page.tsx           # Dynamic MDX project page
        header.tsx
        view.tsx
        mdx.css
    components/            # Reusable UI pieces
      nav.tsx
      card.tsx
      mdx.tsx
      particles.tsx
      analytics.tsx
  pages/
    api/
      incr.ts              # API route (view increment tracking)
  public/                  # Static assets (images/videos/fonts/icons)
  types/
    mdx.d.ts               # Type defs for MDX/contentlayer
  util/
    mouse.ts               # Utility helper(s)
  global.css               # Global styles + Tailwind layers
  contentlayer.config.js   # MDX/content schema and processing
  mdx-components.tsx       # Shared MDX component mapping
  next.config.mjs
  tailwind.config.js
  postcss.config.js
  tsconfig.json
  package.json
```

## Route Map

- `/` -> `app/page.tsx`
- `/about` -> `app/about/page.tsx`
- `/contact` -> `app/contact/page.tsx`
- `/projects` -> `app/projects/page.tsx`
- `/projects/[slug]` -> `app/projects/[slug]/page.tsx` (MDX-backed dynamic route)
- `/api/incr` -> `pages/api/incr.ts`

## Key Architecture Notes

- Global shell lives in `app/layout.tsx`:
  - Loads `global.css`
  - Sets metadata (`title`, OpenGraph, robots, twitter)
  - Registers Inter and local CalSans fonts
- Project content flow:
  - Contentlayer generates `allProjects`
  - `app/projects/page.tsx` renders cards and featured sections
  - `app/projects/[slug]/page.tsx` renders MDX body using `Mdx` component
  - `generateStaticParams()` prebuilds published slugs
- UI composition:
  - `app/components/nav.tsx` handles top navigation
  - `app/components/card.tsx` standardizes card visuals
  - `app/components/particles.tsx` powers animated landing background

## Where To Edit (By Intent)

- Update SEO/site-wide metadata -> `app/layout.tsx`
- Change homepage hero/navigation -> `app/page.tsx`
- Edit project listing cards/videos -> `app/projects/page.tsx`
- Change project detail MDX rendering -> `app/components/mdx.tsx` and `mdx-components.tsx`
- Adjust dynamic project page layout -> `app/projects/[slug]/page.tsx`, `header.tsx`, `mdx.css`
- Tune global theme/utilities -> `global.css`, `tailwind.config.js`
- Update MDX/content rules -> `contentlayer.config.js`, `types/mdx.d.ts`

## Claude Prompting Tips For This Repo

When asking Claude to modify this codebase, include:

1. Target page/route (for example: "`/projects` card section")
2. Exact file if known (for example: `app/projects/page.tsx`)
3. Desired behavior change + visual expectation
4. Whether the change should affect all pages or one route only

Example prompt:

> "In `app/projects/page.tsx`, refactor the RecipeStash section into smaller components without changing visual output. Keep Tailwind classes and existing content."

