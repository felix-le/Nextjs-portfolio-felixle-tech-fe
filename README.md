# Felix Le — Portfolio (Next.js + TypeScript + Strapi)

Personal portfolio website built with **Next.js** and **TypeScript**, with project content managed in a **Strapi** headless CMS and rendered on the frontend.

**Live site:** https://felixle.tech (backend: `portfolio-felixle-tech-be`)

## Features

- Project showcase rendered from CMS content (`@strapi/blocks-react-renderer`)
- Project sorting/filtering and detail modals
- Shared app state via React providers (projects, sidebar)
- Responsive layout with Tailwind CSS + Headless UI

## Tech stack

- Next.js, React, TypeScript
- Strapi (headless CMS) + axios
- Tailwind CSS, Headless UI, Heroicons
- styled-components / react-jss where component-scoped styles fit better

## Project structure

```
src/
├─ app/         # routes
├─ components/  # UI components
├─ lib/         # helpers
├─ modules/     # feature modules
├─ services/    # API calls to the Strapi backend
└─ styles/      # global styles
```

## Getting started

```bash
npm install
npm run dev     # develop
npm run build   # production build
npm start       # serve the build
```

The frontend expects the Strapi backend (`portfolio-felixle-tech-be`) to be running; configure its URL in a `.env` file.
