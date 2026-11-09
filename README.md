# Ralph Dyakugha: portfolio

Personal portfolio at https://ralphs-website.netlify.app, built with React 18 and Vite and deployed on Netlify.

## Run it

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build into build/
npm run preview   # serve the production build locally
```

## Editing content

All text lives in `src/data/`, so you shouldn't need to touch the components:

| File | What it holds |
| --- | --- |
| `site.js` | Name, title, hero specialties, About paragraphs and focus areas, links, CV path |
| `skills.js` | Skill groups and tags |
| `education.js` | Degrees and certificates |
| `projects.js` | Featured projects (with galleries) and compact projects |

To replace the CV, overwrite `public/cv/Ralph_Dyakugha_CV.pdf`.

## Adding project screenshots

1. Put the original PNG or JPG files in `assets-src/<project-folder>/` (for example `assets-src/ocean-vr/08-new-scene.png`). This folder is gitignored.
2. Run `npm run images`. It writes a 1600px WebP and a 320px thumbnail to `src/assets/projects/<project-folder>/`.
3. Add the image to that project's `gallery(...)` list in `src/data/projects.js` with a caption.

## Structure

```
index.html              page shell, meta tags, fonts
public/                 favicon, link-preview image, CV, Netlify redirects
scripts/                image optimiser
src/main.jsx            app entry and section order
src/components/         one component + CSS file per section (Gallery is the image viewer)
src/styles/             design tokens and the starfield background
```
