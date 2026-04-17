# AGENTS.md

## Dev Commands

```bash
pnpm dev          # Dev server on port 4680 (not default 4321)
pnpm build        # Build to ./dist/
pnpm preview      # Preview production build
pnpm format       # Format with Prettier
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
```

## Project Structure

- **Framework**: Astro 6.x with static output
- **Adapter**: Netlify
- **Package manager**: pnpm
- **i18n**: English (`en`) and Spanish (`es`), default locale prefix enabled (`/en/`, `/es/`)
- **Styling**: Tailwind CSS 4.x via Vite

## Key Directories

- `src/pages/` - Route pages
- `src/components/` - Astro components
- `src/data/blog/YYYYMMDD-slug/` - Blog posts (must include both `en.mdx` and `es.mdx`)
- `src/layouts/` - Layout components
- `src/i18n/` - Translation utilities
- `src/services/` - Business logic (blog.ts for content fetching)

## Blog Posts

- Create date-prefixed folders: `src/data/blog/YYYYMMDD-slug/`
- Required files per post: `en.mdx` and `es.mdx`
- Frontmatter schema in `src/content.config.ts`

## Code Quality

Run before committing: `pnpm format && pnpm lint`
