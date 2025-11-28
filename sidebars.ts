import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    // --- CATEGORÍAS PÚBLICAS (Ajustadas a los IDs disponibles) ---
    {
      type: 'category',
      label: 'Sobre el juego',
      collapsed: false,
      items: [
        'sobre_el_juego/index',        // ✅ Disponible
        // 'sobre_el_juego/introduccion', // ❌ Eliminado: ¡Causa el error!
      ],
    },
    {
      type: 'category',
      label: 'Historia',
      collapsed: false,
      items: [
        'historia/index', // ✅ Disponible
        // 'historia/overview', // ❌ Eliminado: ¡Causa el error!
      ],
    },
    {
      type: 'category',
      label: 'Mecánicas',
      collapsed: false,
      items: [
        'mecanicas/index', // ✅ Disponible
        // 'mecanicas/overview', // ❌ Eliminado: ¡Causa el error!
      ],
    },
    {
      type: 'category',
      label: 'Desarrolladores',
      collapsed: false,
      items: [
        'desarrolladores/index', // ✅ Disponible
        'desarrolladores/intro', // ✅ Disponible
      ],
    },

    // --- CATEGORÍAS INTERNAS (Estas ya están correctas según el log) ---
    {
      type: 'category',
      label: 'Diseño', 
      items: ['internal-docs/diseño/index'],
    },
    {
      type: 'category',
      label: 'Marketing', 
      items: ['internal-docs/marketing/index'],
    },
    {
      type: 'category',
      label: 'Narrativa', 
      items: [
        'internal-docs/narrativa/index', 
        'internal-docs/narrativa/narrativa-y-mecanicas',
      ],
    },
    {
      type: 'category',
      label: 'Niveles', 
      items: ['internal-docs/niveles/index'],
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