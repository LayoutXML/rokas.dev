# AGENTS.md

Personal website for Rokas Jankunas (rokas.dev / rokasjankunas.com): a single page with an intro, personal projects, resume and contacts. It is a static [Astro](https://astro.build) site deployed to GitHub Pages.

## Commands

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve dist/
npm run check    # astro check (types for .astro/.ts); must report 0 errors
```

There is no test suite. Before finishing a change, run `npm run check` and `npm run build`, and look at the result in a browser at desktop and phone widths.

## Layout

| Path | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, intro text, meta description, email, social links |
| `src/data/resume.ts` | Experience, education, awards (`ResumeEntry[]`) |
| `src/content/projects/*.md` | One file per project; frontmatter schema in `src/content.config.ts` |
| `src/components/` | Page sections: `Navbar`, `Hero`, `Projects` (+ `ProjectCard`, `ProjectDialog`), `Resume` (+ `ResumeEntries`), `Contact`, `Footer`, `Icon` |
| `src/pages/index.astro` | The site; assembles the sections in order |
| `src/pages/projects/[slug].astro` | Redirect stubs: old `/projects/<id>/` URLs → `/#<id>` |
| `src/pages/404.astro` | Not-found page |
| `src/scripts/site.ts` | The only client JS: mobile nav, active-section highlight, project popups |
| `src/styles/global.css` | Design tokens (`:root` variables), reset, shared classes (`.container`, `.btn`, `.card`, `.icon`, `.no-print`) |
| `src/icons/*.svg` | Font Awesome 5 SVGs, inlined with `<Icon name="…" />` |
| `src/assets/` | Images processed by `astro:assets` (served as WebP) |
| `public/` | Copied as-is: favicons, `CNAME`, `sitemap.xml`, `robots.txt` |
| `astro.config.mjs` | Site URL and redirects for old section URLs (`/about` → `/#about`, etc.) |

## Conventions

- **Content belongs in data files, not markup.** Edit `site.ts`, `resume.ts` or the project Markdown. Don't hard-code text in components.
- **Adding a project:** create `src/content/projects/<id>.md` and put its logo in `src/assets/logos/`. The file name is the id, used in `/#<id>` and in the redirect. `featured: true` gives it a big card in the Featured group (only for projects with press coverage, 10k+ users or a notable technical achievement); everything else goes in "More projects". `status` is `active` or `retired` (no longer maintained or available, shown as a "Retired" label); optional `year`/`stat` show on the card; `order` sets position within the group. Removed projects keep a redirect stub in `[slug].astro`. `externalUrl` makes the card link out instead of opening a popup. The README has a full frontmatter example.
- **Keep it static and light.** No UI framework, no CSS framework, no new runtime dependencies without a strong reason. Prefer CSS and native HTML (`<dialog>`, anchors) over JS. Client JS lives only in `src/scripts/site.ts`.
- **Styling:** use the CSS variables in `global.css` and scoped `<style>` blocks per component. SVGs from `<Icon>` and HTML rendered from Markdown are not scoped, so target them with `:global(...)`.
- **Visual identity:** the look intentionally matches the earlier Bootstrap 4 version: dark `#343a40` navbar and footer, mountain background, rounded corners, `#007bff` primary. Preserve it unless asked to redesign.
- **Print:** add `.no-print` to anything that shouldn't appear when the resume is printed.
- **URLs:** don't break existing URLs. Keep the redirects in `astro.config.mjs` and `[slug].astro`, and keep project ids stable.
- **Images:** import them from `src/assets/` and render with `<Image>` or `getImage()`. Don't put content images in `public/`.
- Code style: 2-space indent, single quotes, match surrounding code.

## Generated files (never commit)

`dist/`, `.astro/`, `node_modules/`, and local tool config such as `.claude/launch.json`.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds with `withastro/action` and publishes with `actions/deploy-pages`. GitHub Pages must be set to deploy from GitHub Actions.
