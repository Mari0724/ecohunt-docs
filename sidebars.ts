import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    // --- SECCIONES PÚBLICAS ---
    {
      type: 'category',
      label: 'Sobre el juego',
      collapsed: false,
      items: ['sobre_el_juego/introduccion'],
    },
    {
      type: 'category',
      label: 'Historia',
      collapsed: false,
      items: ['historia/overview'],
    },
    {
      type: 'category',
      label: 'Mecánicas',
      collapsed: false,
      items: ['mecanicas/overview'],
    },
    {
      type: 'category',
      label: 'Desarrolladores',
      collapsed: false,
      items: ['desarrolladores/intro'],
    },

    // --- SECCIONES INTERNAS (Se ocultarán si no hay login) ---
    {
      type: 'category',
      label: 'Narrativa',
      items: ['internal-docs/narrativa/narrativa-y-mecanicas'],
    },
    {
      type: 'category',
      label: 'Marketing',
      items: ['internal-docs/marketing/index'],
    },
    {
      type: 'category',
      label: 'Niveles',
      items: ['internal-docs/niveles/index'],
    },
    {
      type: 'category',
      label: 'Diseño',
      items: ['internal-docs/diseño/index'],
    },
    {
      type: 'category',
      label: 'Planificación',
      items: ['internal-docs/planificacion/index'],
    },
    {
      type: 'category',
      label: 'Prompts',
      items: ['internal-docs/prompts/index'],
    },
  ],
};

export default sidebars;