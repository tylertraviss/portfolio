# Tyler Travis Portfolio

Modern single-page portfolio built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. It highlights experience, projects, and contact info with smooth animations powered by Framer Motion.

## Getting Started

```bash
pnpm install  # or npm install / bun install
pnpm dev      # start Vite dev server on http://localhost:5173
```

Useful scripts (`package.json`):

- `dev` – run the development server.
- `build` – create an optimized production bundle in `dist/`.
- `preview` – serve the production bundle locally.
- `lint`, `test`, `test:watch` – quality checks powered by ESLint and Vitest.

## Project Structure

- `src/components` – UI sections such as Hero, About, Projects, and Contact.
- `src/assets` – static images (e.g., `tyler-headshot.png`).
- `public` – public assets copied as-is.
- `vite.config.ts`, `tailwind.config.ts` – tooling configuration.

## Deployment

The site is optimized for static hosting:

1. Run `pnpm build`.
2. Deploy the `dist/` folder to your host (Vercel, Netlify, Cloudflare Pages, etc.).
3. When using Vercel, set the build command to `pnpm build` (or `npm run build`) and output directory to `dist`. Add custom domains in the project’s Domain settings and point your registrar’s DNS records to Vercel’s values.

## Customization Tips

- Update content in the components under `src/components`.
- Tailwind styles are defined via utility classes and the `tailwind.config.ts` theme.
- For new icons, import from `lucide-react`. For new sections, follow the existing motion + Tailwind pattern.

## License

This codebase is private to Tyler Travis. Contact Tyler for reuse permissions.
