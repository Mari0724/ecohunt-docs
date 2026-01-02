import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    // --- SECCIONES PÚBLICAS (1 archivo = NO categoría) ---
    'sobre-el-juego',
    'historia',
    'mecanicas',
    'desarrolladores',

    // --- SECCIONES INTERNAS (sí son categorías) ---
    {
      type: 'category',
      label: 'Narrativa',
      items: ['internal-docs/narrativa/narrativa'],
    },
    {
      type: 'category',
      label: 'Marketing',
      items: ['internal-docs/marketing/marketing'],
    },
    {
      type: 'category',
      label: 'Niveles',
      items: ['internal-docs/niveles/niveles'],
    },
    {
      type: 'category',
      label: 'Diseño',
      items: ['internal-docs/diseño/diseno'],
    },
  ],
};

export default sidebars;
