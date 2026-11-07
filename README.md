# Aya Ben Hmida – Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide. Bilingual (FR default / EN), light/dark theme, both saved in localStorage.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # preview the build
```
Requires Node.js 18+.

## Update content
| What | File |
|---|---|
| Contact info, links, languages, qualities | `src/data/profile.ts` |
| Projects (add `image`, `demo`) | `src/data/projects.ts` |
| Internships | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Skills | `src/data/skills.ts` |
| All interface text | `src/i18n/fr.ts` and `src/i18n/en.ts` |

Every bilingual field is `{ fr: "...", en: "..." }`.

## Replace images and CVs
- Portrait: replace `public/images/aya.webp` (square, ≥ 720 px, WebP recommended).
- Project screenshots: put files in `public/images/projects/` (e.g. `smartwash.webp`, 1280×720) and set `image: "/images/projects/smartwash.webp"` on the project. Without `image`, an illustrated cover is shown.
- Live demo: add `demo: "https://..."` to a project; the button appears automatically.
- CVs: replace `public/cv/CV_Aya_Ben_Hmida_FR.pdf` and `public/cv/CV_Aya_Ben_Hmida_EN.pdf` (keep the names).
- Social preview: in `index.html`, change `og:image` to an absolute URL once deployed (e.g. `https://your-site.app/images/aya.webp`).

## Contact form
No backend is included, so by default a valid form opens the visitor's email app with the message prefilled (the interface says so). To send for real, create a Formspree (or similar) endpoint and set `VITE_CONTACT_ENDPOINT` in `.env` (see `.env.example`), or in your host's environment variables.

## Deploy
**Vercel:** push to GitHub → vercel.com → *Add New Project* → import the repo. Framework: Vite (auto-detected). Build `npm run build`, output `dist`. Add `VITE_CONTACT_ENDPOINT` under *Environment Variables* if used.

**Netlify:** push to GitHub → app.netlify.com → *Add new site → Import from Git*. `netlify.toml` already sets build `npm run build` and publish `dist`.
