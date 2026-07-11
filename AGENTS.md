# Repository Guidelines

## Project Structure & Module Organization

This is the multilingual NAHPU documentation site, built with Astro and
Starlight. Put documentation in `src/content/docs/<locale>/`; supported
locales are `en`, `pt`, `es`, and `id`. Keep matching paths aligned across
locales, such as `en/usages/specimens.mdoc` and `pt/usages/specimens.mdoc`.
Use `.mdoc` for Markdoc tags and `.md` for plain Markdown.

Site routes live in `src/pages/`, shared Astro components in
`src/components/`, layouts in `src/layouts/`, and global styles in
`src/styles/global.css`. Store imported images and illustrations in
`src/assets/`; use `public/` for files served unchanged. Navigation, locales,
and site metadata are configured in `astro.config.mjs`; custom Markdoc tags
are registered in `markdoc.config.mjs`.

## Build, Test, and Development Commands

Use Bun, which is also used by the deployment workflow:

```bash
bun install       # install dependencies
bun run dev       # start the local Astro server with hot reload
bun run build     # validate content and produce the production site in dist/
bun run preview   # serve the built site locally
```

There is no separate test, lint, or formatter script. Run `bun run build`
before every submission; it is the primary content and integration check.

## Coding Style & Naming Conventions

Follow the surrounding file's indentation and quote style; Astro and config
files currently use two spaces, while some content front matter uses four.
Use descriptive, lowercase, hyphenated document names such as
`export-records.mdoc`. Begin content with valid YAML front matter, including a
`title`; retain existing `sidebar` metadata. Prefer concise Markdown and use
Starlight/Markdoc tags exactly as documented: spacing within `{% ... %}` tags
is significant. Reuse existing components rather than duplicating markup.

## Documentation, Commits & Pull Requests

Write the English page first, then update translations for shared guidance,
navigation, or terminology. Verify links, images, and desktop/mobile rendering
locally. Do not modify generated `dist/` output.

Recent commits use short, imperative summaries, for example `Add disclaimer.`
or `Fix specimen records.` Keep commits focused. Pull requests target
`release`, the deployment branch; explain changes, link issues, include visual
screenshots, and confirm the GitHub Actions build before merge.

## Agent-Specific Instructions

Preserve user changes and avoid unrelated refactors. Always spell the product
name `NAHPU`. Do not create commits, branches, pushes, or pull requests; Git
remains under user control. This repository has no Flutter bridge or
`pubspec.yaml`; in NAHPU projects that do, regenerate bindings only after Rust
code changes, then run analysis, `cargo check`, and `cargo clippy`. Add assets to
`pubspec.yaml` only when the application needs them.
