# rokas.dev and rokasjankunas.com

My personal website: an intro, personal projects, resume and contacts on a single page. Built with [Astro](https://astro.build) as a static site with almost no JavaScript, hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve the build
npm run check    # type-check .astro and .ts files
```

## Editing content

| What | Where |
| --- | --- |
| Name, intro, email, social links, location | `src/data/site.ts` |
| Experience, education, awards | `src/data/resume.ts` |
| Personal projects | `src/content/projects/*.md` |
| Images (background, profile, project logos, press badges) | `src/assets/` |
| Favicons, CNAME, sitemap, robots.txt | `public/` |

### Adding a project

Create `src/content/projects/<id>.md`. The file name is the project's id: its popup opens at `/#<id>`, and the old `/projects/<id>/` URL redirects there. The frontmatter is validated by `src/content.config.ts`:

```markdown
---
title: My Project
order: 11                      # position in the grid
type: Java, Android (app)      # optional
summary: Short text shown on the card.
logo: ../../assets/logos/my-project.png
links:                         # kind: github | google-play | docker-hub | website
  - kind: github
    url: https://github.com/LayoutXML/my-project
playBadgeUrl: https://play.google.com/...   # optional "Get it on Google Play" badge
publications:                  # optional "As featured in"
  - outlet: Gizmodo
    badge: ../../assets/badges/gizmodo.png
    article: Article title
    url: https://...
    archive: https://web.archive.org/...    # optional
externalUrl: https://...       # optional: card links here instead of opening a popup
---

Markdown description shown in the popup.
```

## Deployment

Every push to `master` builds and deploys the site via `.github/workflows/deploy.yml`. In the repository settings, **Pages → Source** must be set to **GitHub Actions**.
