// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: {
        default: "NAHPU Documentation",
        "en-US": "NAHPU Documentation",
        "pt-BR": "Documentação do NAHPU",
        es: "Documentación de NAHPU",
        id: "Dokumentasi NAHPU",
      },
      description:
        "Documentation for NAHPU, a digital field catalog for natural history collections.",
      logo: {
        src: "./src/assets/nahpu.svg",
      },
      favicon: "./src/assets/nahpu.svg",
      // Use BCP 47 language tags,
      // https://gist.github.com/typpo/b2b828a35e683b9bf8db91b5404f1bd1
      defaultLocale: "en",
      locales: {
        en: { label: "English (United States)", lang: "en-US" },
        pt: { label: "Portuguese (Brazil)", lang: "pt-BR" },
        es: { label: "Spanish", lang: "es" },
        id: { label: "Indonesian", lang: "id" },
      },
      editLink: {
        baseUrl: "https://github.com/nahpu/nahpu-docs/edit/main/",
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
          link: "intro",
          translations: {
            "pt-BR": "Introdução",
            es: "Introducción",
            id: "Pendahuluan",
          },
        },
        {
          label: "NAHPU Day 1",
          link: "day_one",
          translations: {
            "pt-BR": "NAHPU Dia 1",
            es: "NAHPU Día 1",
            id: "NAHPU Hari 1",
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
          label: "Data Management",
          autogenerate: { directory: "data-management" },
          translations: {
            "pt-BR": "Gerenciamento de Dados",
            es: "Gestión de Datos",
            id: "Manajemen Data",
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
        },
        {
          label: "Developer Guidelines",
          autogenerate: { directory: "developer-guide" },
          translations: {
            "pt-BR": "Diretrizes para Desenvolvedores",
            es: "Directrices para Desarrolladores",
            id: "Pedoman Pengembang",
          },
        },
        {
          label: "Contributing",
          autogenerate: { directory: "contributing" },
          translations: {
            "pt-BR": "Contribuindo",
            es: "Contribuyendo",
            id: "Berkontribusi",
          },
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
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
