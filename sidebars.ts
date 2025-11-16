import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Sobre el juego',
      collapsed: false,
      items: [
        'sobre_el_juego/introduccion',
      ],
    },
    {
      type: 'category',
      label: 'Historia',
      collapsed: false,
      items: [
        'historia/overview',
      ],
    },
    {
      type: 'category',
      label: 'Mecánicas',
      collapsed: false,
      items: [
        'mecanicas/overview',
      ],
    },
    {
      type: 'category',
      label: 'Desarrolladores',
      collapsed: false,
      items: [
        'desarrolladores/intro',
      ],
    },
  ],
};

export default sidebars;
