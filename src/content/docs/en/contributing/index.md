---
title: "Become a contributor"
sidebar:
  order: 1
---

NAHPU is a collaborative natural-history project. Contributions can improve
the software, the data workflows, or the experience of the people who use it
in the field, laboratory, museum, and archive. You do not need to be a
programmer to contribute: practical domain knowledge and careful testing are
just as valuable as code.

## Choose your contribution path

| Contributor | Useful contributions | Coding required | First step |
| --- | --- | :---: | --- |
| Scientist or domain expert | Field testing, taxonomy review, data-model feedback, and workflow validation | No | Use NAHPU with a realistic workflow and report your findings |
| Programmer | Flutter, Rust API, documentation tooling, bug fixes, and features | Usually | Choose the repository and read its setup guide |
| Documentation contributor | Corrections, examples, and usage guidance | No | Follow the [documentation contribution guide](./docs) |
| Tester or reviewer | Platform testing, regression reports, sample files, and accessibility feedback | No | Test a supported workflow and report reproducible results |
| Tool or design contributor | Utilities, integrations, and UI or accessibility improvements | Varies | Open a proposal before building a separate tool |

## Scientists, curators, and domain experts

Your knowledge of natural-history work can shape NAHPU even if you never write
code. Try NAHPU during fieldwork, laboratory cataloging, or museum curation and
tell us where the software matches—or fails to match—your real workflow.

Useful contributions include:

- reviewing terminology, taxonomy, required fields, units, controlled
  vocabularies, and specimen workflows;
- validating exports, backups, templates, Darwin Core mappings, and data-import
  behavior;
- providing synthetic or anonymized sample datasets and realistic workflow
  scenarios;
- proposing new taxon groups or domain-specific workflows; and
- identifying confusing screens, missing information, or steps that are hard
  to complete in the field.

Start with the [usage guides](../usages), [curatorial guidelines](../curatorial-guideline),
and [data import and export contributor guidance](./code/data-import-export-overview).
Domain experts who are collaborating on a new catalog format should also read
[Adding a taxon group](./code/adding-a-taxon-group).

When reporting a problem, include the platform, NAHPU version, a short
description of the workflow, steps to reproduce it, the expected result, and
the actual result. Screenshots or sample files are helpful when they do not
expose sensitive information.

Please do not publish private information, protected locality coordinates,
permit-restricted data, personal information, or identifiable specimen records.
Use synthetic or anonymized data and remove sensitive metadata before sharing a
sample or screenshot.

## Programmers

Choose the repository that owns the behavior you want to change. Some features
cross repository boundaries, so read the architecture guidance before moving
logic between them.

- **[NAHPU app](https://github.com/nahpu/nahpu)** — Flutter screens and
  services, Riverpod providers, Drift persistence, Flutter Rust Bridge
  wrappers, and platform behavior. Begin with the [app code setup guide](./code/setup).
- **[NAHPU API](https://github.com/nahpu/nahpu_api)** — reusable Rust crates
  for archives, databases, GIS, exports, data packages, configuration, and
  document rendering. Read the [NAHPU API contribution guide](./code/nahpu-api).
- **[NAHPU documentation](https://github.com/nahpu/nahpu-docs)** — Astro,
  Starlight, Markdoc, navigation, content, and build validation. Follow the
  [documentation contribution guide](./docs).

### Programmer workflow

1. Search existing issues and open an issue or proposal before substantial
   work.
2. Select the repository and read its contribution and setup instructions.
3. Create a focused branch from the repository's documented target branch.
4. Keep the change narrow and preserve the repository's architectural
   boundaries.
5. Add or update tests and documentation.
6. Run the checks specific to the repository and the files you changed.
7. Submit a pull request describing the problem, approach, tests, and
   screenshots where relevant.
8. Respond to review feedback and update the documentation when behavior or a
   workflow changes.

Use the existing [architecture](./code/architecture),
[code conventions](./code/conventions), [persistence guidance](./code/database),
[NAHPU API guidance](./code/nahpu-api), [troubleshooting guide](./code/troubleshooting),
and [responsible LLM development guidance](./code/llm-assisted-development)
rather than duplicating their details in an issue or pull request.

## Supporting contribution routes

### Documentation

Correct errors, improve examples, clarify usage instructions, and document
workflows that are difficult to discover. Follow the
[documentation contribution guide](./docs) for editing pages, local
development, and review. This contributor guidance is intentionally English-only.

### Translation

Translation contributions should target usage documentation so that people can
learn to use NAHPU in their preferred language. Keep contributor guidance in
English; do not translate this contributor hub or create localized contributor
pages as part of a translation contribution.

### Testing and review

Test supported platforms and realistic field, laboratory, and collection
workflows. Regression testing, accessibility checks, import and export
validation, and sample files that reproduce a problem are all useful. Report
reproducible results with the platform, app version, steps, expected result,
actual result, and relevant screenshots or anonymized files.

### Tools

Build standalone utilities, taxonomy resources, integrations, or other
supporting software. See the [tools guidance](./code/tools) before starting,
especially when a tool may belong in the [NAHPU GitHub organization](https://github.com/nahpu).
Open a proposal first if the tool would duplicate or substantially affect an
existing NAHPU workflow.

### Design and accessibility

Contribute responsive layouts, readable labels, clear error messages,
localization-ready content, keyboard and screen-reader support, and accessible
workflows across supported devices. A short recording, screenshot, or concrete
example can make a design or accessibility issue much easier to evaluate.

## A shared contribution lifecycle

Every contribution can follow the same basic path:

1. Choose a contribution path.
2. Read the relevant guide.
3. Try to reproduce or describe the problem using a concrete workflow.
4. Open an issue or proposal, or contact the maintainer when the work is
   scientific or collaborative rather than a direct code change.
5. Prepare a focused contribution.
6. Validate it with tests, sample data, screenshots, or a documentation build.
7. Submit it for review.
8. Update the affected documentation when behavior or a workflow changes.

GitHub issues and pull requests are the normal path for repository changes.
Use the [project maintainer's contact page](https://hhandika.com/) for research
collaborations, domain-review coordination, institutional data, or proposals
that do not yet map cleanly to an issue.

## Collaboration expectations

- Keep reviews and communication respectful, specific, and constructive.
- Take human responsibility for every submitted change, including AI-assisted
  work; review and understand the result before submitting it.
- Follow permits, institutional policies, data licenses, and collection ethics.
- Use synthetic or anonymized test data whenever real data could expose
  sensitive information.
- Prefer focused changes supported by reproducible evidence.
- Scientists are welcome to contribute without becoming programmers first.
