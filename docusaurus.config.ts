import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EcoHunt',
  tagline: 'Una aventura educativa sobre reciclaje y sostenibilidad',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: false,
      defaultMode: 'light', // puedes poner 'dark' si quieres que arranque oscuro
    },

 
    navbar: {
      title: 'EcoHunt',
      logo: {
        alt: 'EcoHunt Logo',
        src: 'img/logo.png',
      },
      // items deben quedar VACÍOS para que el override tome control
      items: [],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'EcoHunt',
          items: [
            { label: 'Sobre el juego', to: '/docs/sobre-el-juego/introduccion' },
            { label: 'Historia', to: '/docs/historia/overview' },
            { label: 'Mecánicas', to: '/docs/mecanicas/overview' },
          ],
        },
        {
          title: 'Privado',
          items: [
            { label: 'Acceso interno', to: '/internal/login' },
          ],
        },
        {
          title: 'Redes',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} EcoHunt — Documentación Oficial.`
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
