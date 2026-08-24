import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const locales = ["en", "pt", "es", "id"];
const headings = {
  en: ["## Steps", "## Learn more"],
  pt: ["## Etapas", "## Saiba mais"],
  es: ["## Pasos", "## Más información"],
  id: ["## Langkah", "## Pelajari lebih lanjut"],
};
const contentRoot = join(process.cwd(), "src/content/docs");
const errors = [];
const metadataByLocale = new Map();

for (const locale of locales) {
  const root = join(contentRoot, locale, "how-to-recipes");
  const paths = documentationFiles(root).map((path) => relative(root, path));
  const metadata = new Map();

  for (const path of paths) {
    const source = readFileSync(join(root, path), "utf8").replaceAll("\r\n", "\n");
    const parsed = parseDocument(source, `${locale}/${path}`);
    if (!parsed) continue;
    metadata.set(path, { title: parsed.title, order: parsed.order });
    if (isIndexPath(path)) continue;
    checkRecipe(locale, path, parsed.body);
  }
  metadataByLocale.set(locale, metadata);
}

const english = metadataByLocale.get("en");
const englishRecipes = [...english.keys()].filter(
  (path) => !isIndexPath(path),
);
if (englishRecipes.length !== 29) {
  errors.push(`en: expected 29 recipes, found ${englishRecipes.length}`);
}
for (const [path, order] of Object.entries({
  "prepare/index.md": 1,
  "collect/index.md": 2,
  "protect-and-collaborate/index.md": 3,
  "export-and-print/index.md": 4,
})) {
  if (english.get(path)?.order !== order) {
    errors.push(`en/${path}: expected sidebar.order ${order}`);
  }
}

for (const locale of locales.slice(1)) {
  const localized = metadataByLocale.get(locale);
  const englishPaths = [...english.keys()].sort();
  const localizedPaths = [...localized.keys()].sort();
  if (JSON.stringify(localizedPaths) !== JSON.stringify(englishPaths)) {
    errors.push(`${locale}: Cookbook paths do not match English`);
  }
  for (const path of englishPaths) {
    if (!localized.has(path)) continue;
    if (localized.get(path).order !== english.get(path).order) {
      errors.push(`${locale}/${path}: sidebar.order differs from English`);
    }
    if (!localized.get(path).title) {
      errors.push(`${locale}/${path}: localized title is empty`);
    }
  }
}

checkNavigation();

if (errors.length > 0) {
  console.error("Cookbook validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("Cookbook structure, recipes, links, and navigation are valid.");
}

function documentationFiles(root) {
  const result = [];
  for (const name of readdirSync(root)) {
    const path = join(root, name);
    if (statSync(path).isDirectory()) {
      result.push(...documentationFiles(path));
    } else if (path.endsWith(".md") || path.endsWith(".mdoc")) {
      result.push(path);
    }
  }
  return result.sort();
}

function isIndexPath(path) {
  return path === "index.md" || path.endsWith("/index.md");
}

function parseDocument(source, label) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (!match) {
    errors.push(`${label}: missing or invalid YAML front matter`);
    return null;
  }
  const titleLine = match[1].match(/^title:\s*(.+)$/m)?.[1]?.trim();
  const order = Number(match[1].match(/^\s*order:\s*(\d+)\s*$/m)?.[1]);
  const title = titleLine?.replace(/^(["'])(.*)\1$/, "$2") ?? "";
  if (!title) errors.push(`${label}: missing title`);
  if (!Number.isInteger(order)) errors.push(`${label}: missing sidebar.order`);
  return { title, order, body: match[2].trim() };
}

function checkRecipe(locale, path, body) {
  const label = `${locale}/${path}`;
  if (!path.endsWith(".mdoc")) {
    errors.push(`${label}: recipes with Markdoc tags must use .mdoc`);
  }
  const firstParagraph = body.split("\n\n", 1)[0];
  if (firstParagraph.includes("\n") || !/[.!?]$/.test(firstParagraph)) {
    errors.push(`${label}: purpose must be one sentence paragraph`);
  }
  for (const heading of headings[locale]) {
    if (!body.includes(heading)) errors.push(`${label}: missing ${heading}`);
  }
  const stepBlocks = [...body.matchAll(/{% steps %}([\s\S]*?){% \/steps %}/g)];
  if (stepBlocks.length !== 1) {
    errors.push(`${label}: expected exactly one steps block`);
  }
  const stepContent = stepBlocks[0]?.[1] ?? "";
  const stepCount = [...stepContent.matchAll(/^\d+\.\s/gm)].length;
  if (stepCount < 3 || stepCount > 8) {
    errors.push(`${label}: expected 3–8 numbered steps, found ${stepCount}`);
  }
  const asides = [...body.matchAll(/{% aside([^%]*)%}/g)];
  if (asides.length > 1) errors.push(`${label}: more than one aside`);
  for (const aside of asides) {
    checkAsideAttributes(label, aside[1]);
  }
  const closingAsides = [...body.matchAll(/{% \/aside %}/g)].length;
  if (closingAsides !== asides.length) {
    errors.push(`${label}: unbalanced aside tags`);
  }
  checkMarkdocTags(label, body);
  if (/^> \*\*.+?:\*\*/m.test(body)) {
    errors.push(`${label}: legacy blockquote callout must use an aside`);
  }
  if (body.includes("<Tabs")) {
    errors.push(`${label}: unsupported component`);
  }
  if (/^\|/m.test(body) || body.includes("![")) {
    errors.push(`${label}: tables and screenshots are not Cookbook content`);
  }
  const links = [...body.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(
    (match) => match[1],
  );
  if (links.length !== 1 || !links[0].startsWith(`https://nahpu.app/${locale}/`)) {
    errors.push(`${label}: expected one locale-matched detailed-guide link`);
  }
}

function checkAsideAttributes(label, source) {
  const attributes = new Map();
  const remainder = source.replace(
    /\s+([a-z]+)="([^"]*)"/g,
    (_, name, value) => {
      if (attributes.has(name)) errors.push(`${label}: duplicate aside ${name}`);
      attributes.set(name, value);
      return "";
    },
  );
  if (remainder.trim()) errors.push(`${label}: invalid aside attributes`);
  for (const name of attributes.keys()) {
    if (name !== "type" && name !== "title") {
      errors.push(`${label}: unsupported aside attribute ${name}`);
    }
  }
  if (!["note", "caution", "tip"].includes(attributes.get("type"))) {
    errors.push(`${label}: aside type must be note, caution, or tip`);
  }
}

function checkMarkdocTags(label, body) {
  const stack = [];
  const tagPattern = /^\s*{%\s*(\/)?([a-z][a-z-]*)(.*?)%}\s*$/gm;
  for (const match of body.matchAll(tagPattern)) {
    const [, closing, name] = match;
    if (name !== "steps" && name !== "aside") {
      errors.push(`${label}: unsupported Markdoc tag ${name}`);
      continue;
    }
    if (!closing) {
      if (stack.length > 0) {
        errors.push(`${label}: nested Markdoc tags are unsupported`);
      }
      stack.push(name);
    } else if (stack.pop() !== name) {
      errors.push(`${label}: mismatched closing Markdoc tag ${name}`);
    }
  }
  if (stack.length > 0) {
    errors.push(`${label}: unclosed Markdoc tag ${stack.at(-1)}`);
  }
  if (body.replace(tagPattern, "").includes("{%")) {
    errors.push(`${label}: malformed Markdoc tag`);
  }
}

function checkNavigation() {
  const config = readFileSync(join(process.cwd(), "astro.config.mjs"), "utf8");
  const installation = config.indexOf('label: "Installation"');
  const cookbook = config.indexOf('label: "How-to recipes"');
  const bestPractices = config.indexOf('label: "Best Practices"');
  if (!(installation < cookbook && cookbook < bestPractices)) {
    errors.push("astro.config.mjs: How-to recipes must follow Installation and precede Best Practices");
  }
  for (const label of ["Guias práticos", "Guías prácticas", "Panduan praktis"]) {
    if (!config.includes(label)) errors.push(`astro.config.mjs: missing ${label}`);
  }
  if (!config.includes('directory: "how-to-recipes/collect"')) {
    errors.push("astro.config.mjs: How-to recipes navigation is missing explicit category generation");
  }
}
