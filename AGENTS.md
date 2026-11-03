# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Portfolio target boundary

This folder is the Three.js portfolio served on port 4173. C:/Users/pct2k/PCT_Portfolio is a separate portfolio served on port 4176. Never edit or build the other portfolio while updating this one. Confirm the URL and project root before any modification.

Personal information is supplied in src/profile.json. The user explicitly requested preserving original sample project cards, work-history timeline and chess ELO 3640. Those retained values are reference content, not verified personal credentials. Ask about other missing personal facts.


The user approved the white 3D P favicon with lavender lighting on a near-black rounded tile on 2026-11-04. Keep this approved identity for the 4173 portfolio and its GitHub Pages publication.
