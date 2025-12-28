import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "EcoHunt",
  tagline: "Una aventura educativa sobre reciclaje y sostenibilidad",
  favicon: "img/favicon.ico",

  future: { v4: true },

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "facebook",
  projectName: "docusaurus",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          routeBasePath: "/docs",
        },

        blog: { showReadingTime: true },

        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: false,
      defaultMode: "light",
    },

    navbar: {
      title: "EcoHunt",
      logo: {
        alt: "EcoHunt Logo",
        src: "img/logo.png",
      },
      items: [
        // --- LINKS PÚBLICOS ---
        { label: "Sobre el juego", to: "/docs/sobre-el-juego/introduccion", position: "left" },
        { label: "Historia", to: "/docs/historia/overview", position: "left" },
        { label: "Mecánicas", to: "/docs/mecanicas/overview", position: "left" },
        { label: "Desarrolladores", to: "/docs/desarrolladores/intro", position: "left" },

        // --- LINKS PRIVADOS (Usamos 'className' para identificarlos y filtrarlos) ---
        { 
          label: "Narrativa", 
          to: "/docs/internal-docs/narrativa/narrativa-y-mecanicas", 
          position: "left", 
          className: "internal-link" 
        },
        { 
          label: "Marketing", 
          to: "/docs/internal-docs/marketing", 
          position: "left", 
          className: "internal-link" 
        },
        { 
          label: "Niveles", 
          to: "/docs/internal-docs/niveles", 
          position: "left", 
          className: "internal-link" 
        },
        { 
          label: "Diseño", 
          to: "/docs/internal-docs/diseño", 
          position: "left", 
          className: "internal-link" 
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "EcoHunt",
          items: [
            { label: "Sobre el juego", to: "/docs/sobre-el-juego/introduccion" },
            { label: "Historia", to: "/docs/historia/overview" },
            { label: "Mecánicas", to: "/docs/mecanicas/overview" },
          ],
        },
        {
          title: "Privado",
          items: [{ label: "Acceso interno", to: "/internal/login" }],
        },
        {
          title: "Redes",
          items: [{ label: "GitHub", href: "https://github.com/" }],
        },
      ],
      copyright: `© ${new Date().getFullYear()} EcoHunt — Documentación Oficial.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
