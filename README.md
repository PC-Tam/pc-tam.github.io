# Phùng Chí Tâm — 3D Portfolio

Website: **https://pc-tam.github.io/**

A static frontend portfolio with a Three.js character, cursor tracking, scroll-driven scenes, project gallery and browser chess game.

## Development

Requires Node.js 22 or later.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4173
```

## Publish updates

```sh
npm run publish:prepare
```

Push your source changes to `main`. The GitHub Actions workflow builds and publishes `docs/` automatically. GitHub Pages uses **GitHub Actions** as its publishing source.

## Source and content boundaries

This is a personalized reproduction of an authorized public production frontend, not the original unbundled React component source. Captured frontend modules live in `public/assets/`. Personal profile reference data lives in `src/profile.json`. The character, lighting, mouse controller and scroll choreography are retained. Original dependency license comments remain in the bundles; this repository does not grant new rights over third-party assets.

The owner's name, contact information, education, languages and academic technical exposure were supplied in the CV. Original project cards, employment timeline and chess ELO 3640 remain **reference/sample content** by explicit request; they are not verified personal employment, projects or a personal rating.

GitHub uses the supplied profile. Other social links lead to platform homepages. The downloadable CV is the owner's supplied PDF.

The private original `/api/chat` backend is unavailable. The static hosting does not implement a working AI chat server. The browser chess engine is local and independent of that API.

The other portfolio previously previewed on port 4176 is separate and is not included here.
