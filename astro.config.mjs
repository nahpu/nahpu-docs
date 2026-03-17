// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "NAHPU Documentation",
      logo: {
        src: "./src/assets/houston.webp",
      },
      // Use BCP 47 language tags,
      // https://gist.github.com/typpo/b2b828a35e683b9bf8db91b5404f1bd1
      defaultLocale: "en",
      locales: {
        en: { label: "English (United States)", lang: "en-US" },
        pt: { label: "Portuguese (Brazil)", lang: "pt-BR" },
        es: { label: "Spanish", lang: "es" },
        id: { label: "Indonesian", lang: "id" },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nahpu",
        },
      ],
      sidebar: [
        { label: "Introduction", link: "intro" },
        { label: "NAHPU Day 1", link: "day_one" },
        { label: "Switch to NAHPU", link: "switch" },
        { label: "Installation", link: "installation" },
        {
          label: "General Usages",
          autogenerate: { directory: "usages" },
        },
        {
          label: "Data Management",
          autogenerate: { directory: "data-management" },
        },
        {
          label: "Curatorial Guidelines",
          autogenerate: { directory: "curatorial-guideline" },
        },
        {
          label: "Developer Guidelines",
          autogenerate: { directory: "developer-guide" },
        },
        {
          label: "Contributing",
          autogenerate: { directory: "contributing" },
        },
        {
          label: "Privacy Policy",
          link: "privacy",
        },
        {
          label: "Terms and Conditions",
          link: "terms",
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
