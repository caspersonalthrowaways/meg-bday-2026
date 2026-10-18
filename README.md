# meg-bday-2026

React + Tailwind CSS v4, built with Vite, deployed to GitHub Pages.

## Scripts

- `npm run dev` – local dev server (http://localhost:5173/meg-bday-2026/)
- `npm run build` – production build to `dist/`
- `npm run preview` – serve the production build locally
- `npm run deploy` – build and publish `dist/` to the `gh-pages` branch

## Structure

```
src/
  assets/
    images/
    audio/
  components/   reusable UI pieces
  pages/        full-page views
  App.jsx
  main.jsx
  index.css     Tailwind entry
```

## Deploying

1. Push this project to a GitHub repo named `meg-bday-2026` (or update `base` in `vite.config.js` to match the repo name).
2. Run `npm run deploy`.
3. In the repo's Settings → Pages, set the source to the `gh-pages` branch.
