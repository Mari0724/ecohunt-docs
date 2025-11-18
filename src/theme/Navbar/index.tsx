console.log("⚡ OVERRIDE NAVBAR CARGADO");

import React, { useContext } from "react";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import { AuthContext } from "../../auth/AuthContext";
import { githubLogout } from "../../auth/firebase";

export default function EcoNavbar() {
  const { user, loading } = useContext(AuthContext);
  const { colorMode, setColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  if (loading) return null;

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

  const items = user ? internalItems : publicItems;

  const auth = user
    ? { label: "Cerrar sesión", action: async () => { await githubLogout(); window.location.href = "/"; } }
    : { label: "Iniciar sesión", action: () => window.location.href = "/internal/login" };

  return (
    <header className="navbar navbar--dark">
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

          {/* MODO CLARO/OSCURO */}
          <button
            className="navbar__item navbar__link"
            onClick={() => setColorMode(isDark ? "light" : "dark")}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* LOGIN / LOGOUT */}
          <button
            className="navbar__item navbar__link"
            onClick={auth.action}
          >
            {auth.label}
          </button>
        </div>

      </div>
    </header>
  );
}
