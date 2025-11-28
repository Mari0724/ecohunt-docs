console.log("⚡ NAVBAR OVERRIDE CARGADO");

import React, { useContext } from "react";
import Link from "@docusaurus/Link";
import ColorModeToggle from "@theme/ColorModeToggle";

// 💡 Importamos los hooks necesarios de Docusaurus.
import { useColorMode } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal"; 

import { AuthContext } from "../../auth/AuthContext";
import { githubLogout } from "../../auth/firebase";
import { allowedUsers } from "../../auth/allowedUsers";

// --- Componente interno para el Toggle (Botón de Hamburguesa) ---
// Recreamos el componente usando el hook oficial que sí está expuesto.
function MobileNavbarToggle() {
  const mobileSidebar = useNavbarMobileSidebar();
  
  return (
    <button
      aria-label="Abrir menú de navegación"
      aria-expanded={mobileSidebar.shown}
      className="navbar__toggle clean-btn"
      type="button"
      onClick={mobileSidebar.toggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        role="img"
        focusable="false"
      >
        <title>Menú</title>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M4 7h22M4 15h22M4 23h22"
        />
      </svg>
    </button>
  );
}
// ------------------------------------------

export default function EcoNavbar() {
  const { user, loading } = useContext(AuthContext);
  const { colorMode, setColorMode } = useColorMode();

  if (loading) return null;

  const isAllowed = user && allowedUsers.includes(user.email);

  const publicItems = [
    { label: "Sobre el juego", to: "/docs/sobre-el-juego/introduccion" },
    { label: "Historia", to: "/docs/historia/overview" },
    { label: "Mecánicas", to: "/docs/mecanicas/overview" },
    { label: "Desarrolladores", to: "/docs/desarrolladores/intro" },
  ];

  const internalItems = [
    { label: "Narrativa", to: "/docs/internal-docs/narrativa/narrativa-y-mecanicas" },
    { label: "Marketing", to: "/docs/internal-docs/marketing" },
    { label: "Niveles", to: "/docs/internal-docs/niveles" },
    { label: "Diseño", to: "/docs/internal-docs/diseño" },
  ];

  const items = isAllowed ? [...publicItems, ...internalItems] : publicItems;

  const auth = user
    ? { label: "Cerrar sesión", action: async () => { await githubLogout(); window.location.href = "/"; } }
    : { label: "Iniciar sesión", action: () => window.location.href = "/internal/login" };

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* IZQUIERDA → hamburguesa + logo + LINKS DE NAVEGACIÓN */}
        <div className="navbar__items navbar__items--left">
          <MobileNavbarToggle /> {/* Usamos el componente creado */}
          
          <Link className="navbar__brand" to="/">
            <img src="/img/logo.png" className="navbar__logo" />
            <b className="navbar__title">EcoHunt</b>
          </Link>

          {/* 🎯 CORRECCIÓN DE LAYOUT: Los ITEMS DE NAVEGACIÓN están aquí */}
          {items.map((item) => (
            <Link key={item.label} className="navbar__item navbar__link" to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* ❌ ELIMINADA LA SECCIÓN CENTRAL VACÍA */}

        {/* DERECHA (GitHub, ColorMode, Auth Button) */}
        <div className="navbar__items navbar__items--right">
          <a className="navbar__item navbar__link" href="https://github.com/" target="_blank">
            GitHub
          </a>

          <ColorModeToggle
            value={colorMode}
            onChange={setColorMode}
            respectPrefersColorScheme={false}
          />

          <button
            className="navbar__item navbar__link ecoNavButton"
            onClick={auth.action}
          >
            {auth.label}
          </button>
        </div>
      </div>
    </header>
  );
}