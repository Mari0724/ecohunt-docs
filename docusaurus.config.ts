import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "EcoHunt",
  tagline: "Una aventura educativa sobre reciclaje y sostenibilidad",
  favicon: "img/Logo.png",

  future: { v4: true },

  url: 'https://mari0724.github.io',
  baseUrl: '/ecohunt-docs/',

  organizationName: 'Mari0724',
  projectName: 'ecohunt-docs',

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
    image: "img/Logo.png",

    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: false,
      defaultMode: "light",
    },

    navbar: {
      title: "EcoHunt",
      logo: {
        alt: "EcoHunt Logo",
        src: "img/Logo.png",
      },
      items: [
        // --- LINKS PÚBLICOS ---
        { label: "Sobre el juego", to: "/docs/sobre-el-juego" },
        { label: "Historia", to: "/docs/historia" },
        { label: "Mecánicas", to: "/docs/mecanicas" },
        { label: "Desarrolladores", to: "/docs/desarrolladores" },

        // --- LINKS PRIVADOS (Usamos 'className' para identificarlos y filtrarlos) ---
        { 
          label: "Narrativa", 
          to: "/docs/internal-docs/narrativa/narrativa", 
          position: "left", 
          className: "internal-link" 
        },
        { 
          label: "Marketing", 
          to: "/docs/internal-docs/marketing/marketing", 
          position: "left", 
          className: "internal-link" 
        },
        { 
          label: "Niveles", 
          to: "/docs/internal-docs/niveles/niveles", 
          position: "left", 
          className: "internal-link" 
        },
        { 
          label: "Diseño", 
          to: "/docs/internal-docs/diseño/diseno", 
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
            { label: "Sobre el juego", to: "/docs/sobre-el-juego" },
            { label: "Historia", to: "/docs/historia" },
            { label: "Mecánicas", to: "/docs/mecanicas" },
            { label: "Desarrolladores", to: "/docs/desarrolladores" },
          ],
        },
        {
          title: "Privado",
          items: [{ label: "Acceso interno", to: "/ecohunt-docs/internal/login" }],
        },
        {
          title: "Redes", // Espacio listo para cuando lances el juego
          items: [
            { label: "Instagram", href: "https://instagram.com/" },
            { label: "TikTok", href: "https://tiktok.com/" },
            { label: "YouTube", href: "https://youtube.com/" },
            { label: "Discord", href: "https://discord.com/" },
          ],
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
