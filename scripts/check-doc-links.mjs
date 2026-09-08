import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

// Run after the site build so fragment checks use the actual rendered IDs,
// including explicit Markdoc IDs and translated headings.
const siteRoot = resolve("dist");
const docsRoot = resolve("src", "content", "docs");
const locales = ["en", "pt", "es", "id"];
const args = process.argv.slice(2);
const infoIndex = args.indexOf("--info-root");
if (infoIndex !== -1 && !args[infoIndex + 1]) {
  throw new Error("--info-root requires the path to NAHPU's assets/docs/info directory");
}
const infoRoot = infoIndex === -1 ? null : resolve(args[infoIndex + 1]);
if (!existsSync(siteRoot)) throw new Error("Run bun run build before checking links.");
if (infoRoot && !existsSync(infoRoot)) throw new Error(`Info directory does not exist: ${infoRoot}`);
const errors = [];
const htmlCache = new Map();
let checked = 0;

for (const locale of locales) {
  const sources = [
    ...documents(join(docsRoot, locale, "how-to-recipes")),
    ...documents(join(docsRoot, locale, "usages")),
    ...documents(join(docsRoot, locale, "best-practices")),
    join(docsRoot, locale, "day-one.mdoc"),
    ...(infoRoot ? documents(join(infoRoot, locale)) : []),
  ];
  for (const file of sources) {
    const source = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");
    const route = relative(docsRoot, file).split(sep).join("/").replace(/\.m(doc|d)$/, "").replace(/(^|\/)index$/, "");
    const base = `https://nahpu.app/${route.replace(/\/$/, "")}/`;
    for (const [, href] of source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
      const url = new URL(href, base);
      if (url.origin !== "https://nahpu.app") continue;
      checked++;
      if (!url.pathname.startsWith(`/${locale}/`) && !url.pathname.startsWith("/en/contributing/code/")) {
        errors.push(`${relative(process.cwd(), file)}: wrong locale: ${href}`);
        continue;
      }
      // URL segments become native filesystem paths only at this boundary.
      const segments = decodeURIComponent(url.pathname).split("/").filter(Boolean);
      if (segments.some((segment) => segment === ".." || segment.includes("\\"))) {
        errors.push(`${file}: invalid local route: ${href}`);
        continue;
      }
      const target = join(siteRoot, ...segments, "index.html");
      if (!existsSync(target)) {
        errors.push(`${relative(process.cwd(), file)}: missing page: ${href}`);
        continue;
      }
      if (url.hash) {
        let ids = htmlCache.get(target);
        if (!ids) {
          ids = new Set([...readFileSync(target, "utf8").matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
          htmlCache.set(target, ids);
        }
        if (!ids.has(decodeURIComponent(url.hash.slice(1)))) {
          errors.push(`${relative(process.cwd(), file)}: missing fragment: ${href}`);
        }
      }
    }
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${checked} Cookbook, Day One, Usage, Best Practices${infoRoot ? ", and Info" : ""} links against built pages and fragment IDs.`);
}

function documents(root) {
  return readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const file = join(root, entry.name);
    return entry.isDirectory() ? documents(file) : /\.m(doc|d)$/.test(entry.name) ? [file] : [];
  });
}
