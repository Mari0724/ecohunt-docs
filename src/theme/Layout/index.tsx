import React, { useContext } from "react";
import OriginalLayout from "@theme-original/Layout";
import { AuthContext } from "../../auth/AuthContext";
import { allowedUsers } from "../../auth/allowedUsers";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function LayoutWrapper(props) {
  const { user, loading } = useContext(AuthContext);

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isInternal = pathname.startsWith("/docs/internal-docs");

  const loginUrl = useBaseUrl("/internal/login");
  const noAccessUrl = useBaseUrl("/internal/no-access");

  // ⏳ Mientras carga Firebase
  if (loading) return null;

  // ❌ Página interna sin login
  if (isInternal && !user) {
    if (typeof window !== "undefined") {
      window.location.replace(loginUrl);
    }
    return null;
  }

  // ❌ Logueado pero sin permisos
  if (isInternal && !allowedUsers.includes(user.email)) {
    if (typeof window !== "undefined") {
      window.location.replace(noAccessUrl);
    }
    return null;
  }

  return <OriginalLayout {...props} />;
}
