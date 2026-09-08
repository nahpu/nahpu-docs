# NAHPU Docs <img src="assets/nahpu-docs.svg" alt="nahpu logo" align="right" width="150"/>

This serves documentation, guides, and project information for [NAHPU](https://nahpu.app). We develop the documentation using [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). The frameworks allow us to create a fast, modern, and multilingual documentation site with support for Markdown content and custom components. It also environmentally friendly by optimizing for performance and minimizing unnecessary re-renders (see details in [Starlight's documentation](https://starlight.astro.build/)).

## Project details

- Purpose: host documentation and informational pages for the NAHPU Digital Catalog.
- Tech stack: Astro (frontend static site generator).
- Main language: TypeScript / JavaScript (Astro components), Markdown for docs.

## Prerequisites

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

See the [contribution guidelines](https://nahpu.app/en/contributing/docs/) for guidance on code and documentation contributions, as well as developer tooling information.

If you'd like to propose changes, open an issue or submit a pull request on the `main` branch.

## Bundled documentation checks

Day One introduces NAHPU concepts and guided first-use practice. How-to recipes
cover individual workflows. Both are bundled in the app; edit them here and
sync the app copies with its `tool/sync_cookbook.dart` command.

Run `bun run check:cookbook` and `bun run build`, then `bun run check:doc-links`.
To include app-only Info links, pass
`--info-root <nahpu-root>/assets/docs/info` to the link check. It validates
actual built pages and section IDs, including translated Markdoc anchors,
for Cookbook, Day One, Usage, Best Practices, and optional Info sources.
Relative links are resolved from their published page routes. English developer
references are allowed when those technical pages have no translation.
