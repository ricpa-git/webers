<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Webers — Agent Guidelines

## Adding New Sections
1. Create component in `src/components/` with `"use client"` directive
2. Follow existing pattern: Framer Motion `whileInView` animations, section header with badge pill
3. Import and add to `src/app/page.tsx` in the correct order
4. Use design tokens from `globals.css` (primary, accent, surface, etc.)

## Adding New Pages
1. Create folder under `src/app/` (e.g., `src/app/blog/page.tsx`)
2. Import shared components (Navbar, Footer) or extract them to a shared layout

## Styling Rules
- Use Tailwind utility classes exclusively — no custom CSS except in `globals.css`
- Use the defined color tokens: `text-primary`, `bg-surface`, `border-border`, etc.
- For brand/social icons, use inline SVGs — lucide-react v1+ dropped brand icons

## Quality Checks
- Run `npm run build` after any change to verify compilation
- Run `npm run lint` to check for ESLint issues
- Verify all imports resolve (especially lucide-react icon names)
