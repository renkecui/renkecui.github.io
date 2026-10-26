# Renke Cui | Personal Portfolio

Live site: **https://renkecui.github.io**

A single-page portfolio with my skills, work experience, and projects, plus a contact form.

## Tech stack
- **React 18** (Create React App)
- **Bootstrap 5 / React-Bootstrap** for layout, with per-component CSS in `src/Styles/`
- **EmailJS** REST API (through axios) for the contact form, so there's no backend
- **GitHub Pages** for hosting, deployed by GitHub Actions

## Project structure
```
public/            static files (index.html, resume PDF, favicon, OG image)
src/
  App.js           page layout: NavBar → Banner → Skills → Experience → Projects → Contact → Footer
  components/      one component per section
  Styles/          CSS per component
  assets/          images (WebP)
.github/workflows/ CI build + deploy
```

## Development
```bash
npm install
npm start          # dev server at http://localhost:3000
npm test           # run tests
npm run build      # production build in ./build
```

## Deployment
Every push to `main` runs `.github/workflows/deploy.yml`. It installs dependencies, runs the tests, builds the site and publishes `build/` to the `gh-pages` branch, which GitHub Pages serves.

To deploy by hand instead, run `npm run deploy`.

## Editing content
- Skills: `src/components/Skills.js` (`skillsData`)
- Experience: `src/components/Experience.js` (`experiences`)
- Projects: `src/components/ProjectCards.js` (`projectData`)
- Resume: replace `public/assets/Renke_Resume.pdf`
