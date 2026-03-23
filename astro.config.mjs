// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import markdoc from "@astrojs/markdoc";
// https://astro.build/config
export default defineConfig({
  site: "https://nahpu.app",
  integrations: [
    starlight({
      title: {
        default: "NAHPU Documentation",
        "en-US": "NAHPU Documentation",
        "pt-BR": "Documentação do NAHPU",
        es: "Documentación de NAHPU",
        id: "Dokumentasi NAHPU",
      },
      customCss: ["./src/styles/global.css"],
      description:
        "Documentation for NAHPU, a digital field catalog for natural history collections.",
      logo: {
        src: "./src/assets/nahpu.svg",
      },
      favicon: "/nahpu.svg",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            href: "/favicon.png", // Fallback PNG
          },
        },
        // Add other icon sizes/formats as needed (e.g., apple-touch-icon.png)
      ],
      // Use BCP 47 language tags,
      // https://gist.github.com/typpo/b2b828a35e683b9bf8db91b5404f1bd1
      defaultLocale: "en",
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
      },
      locales: {
        en: { label: "English (United States)", lang: "en-US" },
        pt: { label: "Portuguese (Brazil)", lang: "pt-BR" },
        es: { label: "Spanish", lang: "es" },
        id: { label: "Indonesian", lang: "id" },
      },
      editLink: {
        baseUrl: "https://github.com/nahpu/nahpu-docs/edit/release/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nahpu",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          link: "/",
          translations: {
            "pt-BR": "Introdução",
            es: "Introducción",
            id: "Pendahuluan",
          },
        },
        {
          label: "Day 1",
          link: "day-one",
          translations: {
            "pt-BR": "Dia 1",
            es: "Día 1",
            id: "Hari 1",
          },
        },
        {
          label: "Best Practices",
          link: "best-practices",
          translations: {
            "pt-BR": "Práticas Recomendadas",
            es: "Prácticas Recomendadas",
            id: "Praktik yang Direkomendasikan",
          },
        },
        {
          label: "Switch to NAHPU",
          link: "switch",
          translations: {
            "pt-BR": "Migrar para NAHPU",
            es: "Cambiar a NAHPU",
            id: "Beralih ke NAHPU",
          },
        },
        {
          label: "Installation",
          link: "installation",
          translations: {
            "pt-BR": "Instalação",
            es: "Instalación",
            id: "Instalasi",
          },
        },
        {
          label: "General Usages",
          autogenerate: { directory: "usages" },
          translations: {
            "pt-BR": "Usos Gerais",
            es: "Usos Generales",
            id: "Penggunaan Umum",
          },
        },
        {
          label: "Curatorial Guidelines",
          autogenerate: { directory: "curatorial-guideline" },
          translations: {
            "pt-BR": "Diretrizes Curatoriais",
            es: "Directrices Curatoriales",
            id: "Pedoman Kuratorial",
          },
          collapsed: true,
        },
        {
          label: "Contributing",
          autogenerate: { directory: "contributing" },
          translations: {
            "pt-BR": "Contribuindo",
            es: "Contribuyendo",
            id: "Berkontribusi",
          },
          collapsed: true,
        },
        {
          label: "Privacy Policy",
          link: "privacy",
          translations: {
            "pt-BR": "Política de Privacidade",
            es: "Política de Privacidad",
            id: "Kebijakan Privasi",
          },
        },
        {
          label: "Terms and Conditions",
          link: "terms",
          translations: {
            "pt-BR": "Termos e Condições",
            es: "Términos y Condiciones",
            id: "Syarat dan Ketentuan",
          },
        },
      ],
    }),
    markdoc(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
