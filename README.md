# zepierno.com

Zé Pierno's personal site — CV/portfolio ("Career") + blog ("Articles"),
built with Next.js + Tailwind.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  page.tsx                 → Home (split-screen hero)
  career/page.tsx           → CV / experience timeline
  articles/page.tsx         → Articles list
  articles/[slug]/page.tsx  → Single article page
content/
  articles/*.md              → Each article is a Markdown file
components/
  Header.tsx, Footer.tsx, Sparkmark.tsx (visual signature)
lib/
  posts.ts                   → Reads and parses the Markdown files
```

## Adding a new article

Create a `.md` file in `content/articles/`, for example
`content/articles/my-new-article.md`:

```markdown
---
title: "Article title"
date: "2026-07-01"
excerpt: "1-2 line summary shown in the list."
tags: ["tag1", "tag2"]
---

Article content in regular Markdown.

## Subheading

Text...
```

The article automatically appears on `/articles`, ordered by date.

## Editing the CV

Edit `app/career/page.tsx` — the `roles` array at the top controls the
experience timeline, and `skills` controls the tool tags.

For the "Download CV (PDF)" button to work, place a `cv-ze-pierno.pdf` file
inside the `public/` folder.

## Production build

```bash
npm run build
npm run start
```

## Deploying

### Option A — Vercel (recommended, simplest for Next.js)
1. Create an account at vercel.com and connect your GitHub.
2. Push this project to a GitHub repository.
3. Import the repository on Vercel — deploys happen automatically on every commit.
4. Set up the `zepierno.com` domain in the project settings on Vercel
   (Settings → Domains), pointing your DNS as instructed there.

### Option B — GitHub Pages
GitHub Pages serves purely static sites. Since some pages are generated
dynamically from Markdown, you'd need to export as a static site (the
article pages already use `generateStaticParams`, compatible with static
export). Consider Option A first — it's more straightforward for Next.js
projects.

## Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- Self-hosted fonts via @fontsource (Fraunces, Inter, IBM Plex Mono) — no
  dependency on fetching fonts from Google at build time, which makes the
  project more portable across environments.
- Markdown + gray-matter + remark for the articles.
