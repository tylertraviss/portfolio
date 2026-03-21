# Project context for Claude

## What this project does
This is Tyler Travis's personal portfolio website — a single-page React app showcasing his software engineering experience, projects, and skills. It features smooth scroll navigation across five sections: Hero, About, Experience, Projects, and Contact. The primary audience is potential employers and collaborators.

## Tech stack
- Language: TypeScript 5
- Framework: React 18 + Vite 5
- Styling: Tailwind CSS 3 + shadcn/ui (Radix UI primitives)
- Animation: Framer Motion
- Routing: React Router v6
- Tests: Vitest + @testing-library/react
- Linter: ESLint 9 (typescript-eslint)

## How to run tests
```
npm test
```

## How to run linting
```
npm run lint
```

## How to verify the build
```
npm run build
```
Always run this after changes — it catches TypeScript errors that tests may miss.

## Project structure
```
src/
├── components/         # Section components + shadcn/ui primitives
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   ├── Navbar.tsx
│   ├── NavLink.tsx
│   └── ui/             # shadcn/ui — do not hand-edit generated files here
├── pages/
│   ├── Index.tsx       # Main page (composes all sections)
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
├── lib/
│   └── utils.ts        # Utility functions (cn, etc.)
├── assets/             # Static images
└── test/               # Vitest setup and test files
```

## Code style rules
- Use TypeScript throughout — no `.js` files in `src/`
- Use Tailwind utility classes for styling; avoid inline styles
- Use the `cn()` helper from `src/lib/utils.ts` for conditional class names
- Use Framer Motion for all animations — keep them consistent with existing section patterns
- Path alias `@/` resolves to `src/` — prefer it over relative imports
- Avoid adding new npm dependencies without noting it clearly in the PR

## What Claude must NOT do
- Do not commit directly to `main`
- Do not modify files in `src/components/ui/` unless the issue is specifically about a shadcn component
- Do not change `package.json` dependency versions without asking
- Do not delete files — move or rename if needed
- Do not add new dependencies without calling it out explicitly in the PR description

## When in doubt
Post a comment on the issue explaining what clarification you need.
Keep changes small and focused — if a task would touch more than 5 files, flag it and ask before proceeding.
