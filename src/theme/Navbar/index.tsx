import React, { useContext } from "react";
import Link from "@docusaurus/Link";
import ColorModeToggle from "@theme/ColorModeToggle";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle"; 
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar"; 
import NavbarLayout from "@theme/Navbar/Layout"; // 👈 Añadimos esto
import { useColorMode } from "@docusaurus/theme-common";
import { AuthContext } from "../../auth/AuthContext";
import { githubLogout } from "../../auth/firebase";
import { allowedUsers } from "../../auth/allowedUsers";

export default function EcoNavbar() {
  const { user, loading } = useContext(AuthContext);
  const { colorMode, setColorMode } = useColorMode();

  if (loading) return null;

  const isAllowed = user && allowedUsers.includes(user.email);

  const publicItems = [
    { label: "Sobre el juego", to: "/docs/sobre-el-juego" },
    { label: "Historia", to: "/docs/historia" },
    { label: "Mecánicas", to: "/docs/mecanicas" },
    { label: "Desarrolladores", to: "/docs/desarrolladores" },
  ];

  const internalItems = [
    { label: "Narrativa", to: "/docs/internal-docs/narrativa/narrativa" },
    { label: "Marketing", to: "/docs/internal-docs/marketing/marketing" },
    { label: "Niveles", to: "/docs/internal-docs/niveles/niveles" },
    { label: "Diseño", to: "/docs/internal-docs/diseño/diseno" },
  ];

  const items = isAllowed ? [...publicItems, ...internalItems] : publicItems;

  const auth = user
    ? { label: "Cerrar sesión", action: async () => { await githubLogout(); window.location.href = "/"; } }
    : { label: "Iniciar sesión", action: () => window.location.href = "/ecohunt-docs/internal/login" };

  // 👈 Envolvemos TODO en NavbarLayout para que el Toggle funcione
  return (
    <NavbarLayout>
      <div className="navbar__inner">
        <div className="navbar__items">
          <NavbarMobileSidebarToggle /> 

          <Link className="navbar__brand" to="/">
            <img src="/img/logo.png" className="navbar__logo" alt="Logo" />
            <b className="navbar__title">EcoHunt</b>
          </Link>

          {items.map((item) => (
            <Link key={item.label} className="navbar__item navbar__link hide-on-mobile" to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navbar__items navbar__items--right">
          <div className="navbar__item">
            <ColorModeToggle
              value={colorMode}
              onChange={(mode) => setColorMode(mode)}
              respectPrefersColorScheme={false}
            />
          </div>

          <button className="navbar__item navbar__link ecoNavButton" onClick={auth.action}>
            {auth.label}
          </button>
        </div>
      </div>
      
      <NavbarMobileSidebar /> 
    </NavbarLayout>
  );
}