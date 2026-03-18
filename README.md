# NAHPU Docs

This serves documentation, guides, and project information for [NAHPU](https://nahpu.app). We develop the documentation using [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). The frameworks allow us to create a fast, modern, and multilingual documentation site with support for Markdown content and custom components. It also environmentally friendly by optimizing for performance and minimizing unnecessary re-renders (see details in [Starlight's documentation](https://starlight.astro.build/)).

## Project details

- Purpose: host documentation and informational pages for the NAHPU Digital Catalog.
- Tech stack: Astro (frontend static site generator).
- Main language: TypeScript / JavaScript (Astro components), Markdown for docs.

## Prerequisites

- Node.js >= 18 (Astro 5+ works best with recent Node versions).  
- [Bun](https://bun.sh/).

If you need to install [bun](https://bun.sh/), you can do so with the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Quick start

Install dependencies:

```fish
bun install
```

Run the development server (hot reload):

```fish
bun run dev
```

Build the site for production:

```fish
bun run build
```

To preview the production build locally:

```fish
bun run preview
```

These scripts map to the entries in `package.json`:

- `dev` -> `astro dev`
- `build` -> `astro build`
- `preview` -> `astro preview`

## Project structure (important paths)

- `src/pages/` - site pages and routes
- `src/layouts/` - page layout components (e.g. `Layout.astro`)
- `src/content/docs/` - Markdown documentation used by the site
- `src/components/` - reusable UI components
- `public/` - static assets (images, favicon, etc.)

## Contributing

See the documentation in `src/content/docs/contributing/` for contribution guidance, code & doc contribution workflows, and developer tooling.

If you'd like to propose changes, open an issue or submit a pull request on the `main` branch.
