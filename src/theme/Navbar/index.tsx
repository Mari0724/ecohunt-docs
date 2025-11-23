console.log("⚡ NAVBAR OVERRIDE CARGADO");

import ColorModeToggle from "@theme/ColorModeToggle";
import React, { useContext } from "react";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import { AuthContext } from "../../auth/AuthContext";
import { githubLogout } from "../../auth/firebase";
import { allowedUsers } from "../../auth/allowedUsers";

export default function EcoNavbar() {
  const { user, loading } = useContext(AuthContext);
  const { colorMode, setColorMode } = useColorMode();

  if (loading) return null;

  const isAllowed = user && allowedUsers.includes(user.email);

  // 🔵 Públicos
  const publicItems = [
    { label: "Sobre el juego", to: "/docs/sobre-el-juego/introduccion" },
    { label: "Historia", to: "/docs/historia/overview" },
    { label: "Mecánicas", to: "/docs/mecanicas/overview" },
    { label: "Desarrolladores", to: "/docs/desarrolladores/intro" },
  ];

  // 🔴 Internos (solo si isAllowed)
  const internalItems = [
    { label: "Narrativa", to: "/docs/internal-docs/narrativa/narrativa-y-mecanicas" },
    { label: "Marketing", to: "/docs/internal-docs/marketing" },
    { label: "Niveles", to: "/docs/internal-docs/niveles" },
    { label: "Diseño", to: "/docs/internal-docs/diseño" },
  ];

  // 👑 Lógica correcta:
  // - NO autenticado → solo públicos
  // - Autenticado PERO no permitido → solo públicos
  // - Autenticado + permitido → internos
  const items = isAllowed ? [...publicItems, ...internalItems] : publicItems;

  const auth = user
    ? { label: "Cerrar sesión", action: async () => { await githubLogout(); window.location.href = "/"; } }
    : { label: "Iniciar sesión", action: () => window.location.href = "/internal/login" };

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* IZQUIERDA */}
        <div className="navbar__items">
          <Link className="navbar__brand" to="/">
            <img src="/img/logo.png" className="navbar__logo" />
            <b className="navbar__title">EcoHunt</b>
          </Link>

          {items.map((item) => (
            <Link key={item.label} className="navbar__item navbar__link" to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* DERECHA */}
        <div className="navbar__items navbar__items--right">

          <a
            className="navbar__item navbar__link"
            href="https://github.com/"
            target="_blank"
          >
            GitHub
          </a>

          {/* MODO OSCURO */}
          <div className="navbar__item">
            <ColorModeToggle
              value={colorMode}
              onChange={(mode) => setColorMode(mode)}
              respectPrefersColorScheme={false}
            />
          </div>

          {/* LOGIN / LOGOUT */}
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
