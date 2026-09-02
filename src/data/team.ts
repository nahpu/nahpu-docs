import type { CollectionEntry } from "astro:content";

export type TeamEntry = CollectionEntry<"team">;
type TeamData = TeamEntry["data"];

export type ProfileIcon =
  | "website"
  | "github"
  | "scholar"
  | "orcid"
  | "linkedin"
  | "researchgate";

export interface ProfileLink {
  icon: ProfileIcon;
  label: string;
  href: string;
}

/// Profile links in the order they are shown; the first one is also the primary
/// link used for the member's name.
export function profileLinks(data: TeamData): ProfileLink[] {
  const links: ProfileLink[] = [];

  if (data.website) {
    links.push({ icon: "website", label: "Website", href: data.website });
  }
  if (data.scholar) {
    links.push({ icon: "scholar", label: "Google Scholar", href: data.scholar });
  }
  if (data.github) {
    links.push({
      icon: "github",
      label: "GitHub",
      href: `https://github.com/${data.github}`,
    });
  }
  if (data.researchgate) {
    links.push({
      icon: "researchgate",
      label: "ResearchGate",
      href: data.researchgate,
    });
  }
  if (data.linkedin) {
    links.push({ icon: "linkedin", label: "LinkedIn", href: data.linkedin });
  }
  if (data.orcid) {
    links.push({
      icon: "orcid",
      label: "ORCID",
      href: `https://orcid.org/${data.orcid}`,
    });
  }

  return links;
}

export function primaryUrl(data: TeamData): string | undefined {
  return profileLinks(data)[0]?.href;
}

/// Pinned members first in their given order, then everyone else alphabetically.
export function byOrderThenName(a: TeamEntry, b: TeamEntry): number {
  const rank = (a.data.order ?? Infinity) - (b.data.order ?? Infinity);
  return rank !== 0 ? rank : a.data.name.localeCompare(b.data.name);
}

export function byName(a: TeamEntry, b: TeamEntry): number {
  return a.data.name.localeCompare(b.data.name);
}

/// Honorifics and suffixes that are not part of a member's name and must not
/// contribute an initial. Compared lowercased and without a trailing period.
const NON_NAME_PARTS = new Set([
  "dr",
  "prof",
  "mr",
  "mrs",
  "ms",
  "mx",
  "phd",
  "md",
  "jr",
  "sr",
  "ii",
  "iii",
  "iv",
]);

/// Initials shown on the avatar when a member has no photo.
export function nameInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter((part) => !NON_NAME_PARTS.has(part.toLowerCase().replace(/\.$/, "")))
    .filter((part) => /[A-Za-zÀ-ÿ]/.test(part[0] ?? ""))
    .map((part) => part[0])
    .join("")
    .slice(0, 3);
}
