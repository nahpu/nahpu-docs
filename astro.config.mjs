// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import markdoc from "@astrojs/markdoc";
// https://astro.build/config
export default defineConfig({
  site: "https://nahpu.app",
  redirects: {
    "/usages/export": "/en/usages/export/",
    "/usages/export-records": "/en/usages/export/export-records/",
    "/usages/export-documents": "/en/usages/export/export-documents/",
    "/usages/export-bundles": "/en/usages/export/export-bundles/",
    "/en/usages/export-records": "/en/usages/export/export-records/",
    "/en/usages/export-documents": "/en/usages/export/export-documents/",
    "/en/usages/export-bundles": "/en/usages/export/export-bundles/",
    "/es/usages/export-records": "/es/usages/export/export-records/",
    "/es/usages/export-documents": "/es/usages/export/export-documents/",
    "/es/usages/export-bundles": "/es/usages/export/export-bundles/",
    "/id/usages/export-records": "/id/usages/export/export-records/",
    "/id/usages/export-documents": "/id/usages/export/export-documents/",
    "/id/usages/export-bundles": "/id/usages/export/export-bundles/",
    "/pt/usages/export-records": "/pt/usages/export/export-records/",
    "/pt/usages/export-documents": "/pt/usages/export/export-documents/",
    "/pt/usages/export-bundles": "/pt/usages/export/export-bundles/",
  },
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
        Footer: "./src/components/Footer.astro",
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
          label: "Best Practices",
          translations: {
            "pt-BR": "Práticas Recomendadas",
            es: "Prácticas Recomendadas",
            id: "Praktik yang Direkomendasikan",
          },
          items: [
            {
              autogenerate: {
                directory: "best-practices",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "Usages",
          translations: {
            "pt-BR": "Usos",
            es: "Usos",
            id: "Penggunaan",
          },
          items: [
            {
              label: "Overview",
              link: "usages",
              translations: {
                "pt-BR": "Visão Geral",
                es: "Resumen",
                id: "Ikhtisar",
              },
            },
            {
              label: "Device Requirements",
              link: "usages/devices",
              translations: {
                "pt-BR": "Requisitos de Dispositivos",
                es: "Requisitos del dispositivo",
                id: "Persyaratan Perangkat",
              },
            },
            {
              label: "Projects",
              link: "usages/projects",
              translations: {
                "pt-BR": "Projetos",
                es: "Proyectos",
                id: "Proyek",
              },
            },
            {
              label: "Settings",
              link: "usages/settings",
              translations: {
                "pt-BR": "Configurações",
                es: "Configuración",
                id: "Pengaturan",
              },
            },
            {
              label: "Narrative",
              link: "usages/narrative",
              translations: {
                "pt-BR": "Narrativa",
                es: "Narrativa",
                id: "Narasi",
              },
            },
            {
              label: "Personnel",
              link: "usages/personnel",
              translations: {
                "pt-BR": "Pessoal",
                es: "Personal",
                id: "Personel",
              },
            },
            {
              label: "Sites",
              link: "usages/sites",
              translations: {
                "pt-BR": "Locais",
                es: "Sitios",
                id: "Situs",
              },
            },
            {
              label: "Events",
              link: "usages/events",
              translations: {
                "pt-BR": "Eventos",
                es: "Eventos",
                id: "Peristiwa",
              },
            },
            {
              label: "Specimens",
              link: "usages/specimens",
              translations: {
                "pt-BR": "Espécimes",
                es: "Especímenes",
                id: "Spesimen",
              },
            },
            {
              label: "Taxon",
              link: "usages/taxon",
              translations: {
                "pt-BR": "Táxon",
                es: "Taxón",
                id: "Takson",
              },
            },
            {
              label: "Export",
              collapsed: true,
              translations: {
                "pt-BR": "Exportar",
                es: "Exportar",
                id: "Ekspor",
              },
              items: [
                {
                  autogenerate: {
                    directory: "usages/export",
                    collapsed: true,
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Curatorial Guidelines",
          translations: {
            "pt-BR": "Diretrizes Curatoriais",
            es: "Directrices Curatoriales",
            id: "Pedoman Kuratorial",
          },
          collapsed: true,
          items: [
            {
              autogenerate: {
                directory: "curatorial-guideline",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "Contributing",
          items: [
            { label: "Become a contributor", link: "contributing" },
            { label: "Documentation", link: "contributing/docs" },
            {
              label: "Code",
              collapsed: true,
              items: [
                {
                  autogenerate: {
                    directory: "contributing/code",
                    collapsed: true,
                  },
                },
              ],
            },
          ],
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
