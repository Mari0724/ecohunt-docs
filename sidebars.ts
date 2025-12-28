import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  publicSidebar: [
    {
      type: 'category',
      label: 'Sobre el juego',
      items: ['sobre_el_juego/introduccion'],
    },
    {
      type: 'category',
      label: 'Historia',
      items: ['historia/overview'],
    },
    {
      type: 'category',
      label: 'Mecánicas',
      items: ['mecanicas/overview'],
    },
    {
      type: 'category',
      label: 'Desarrolladores',
      items: ['desarrolladores/intro'],
    },
  ],

  internalSidebar: [
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
