import React, { useContext, useEffect } from "react";
import OriginalLayout from "@theme-original/Layout";
import { AuthContext } from "../../auth/AuthContext";
import { allowedUsers } from "../../auth/allowedUsers";

export default function LayoutWrapper(props) {
  const { user, loading } = useContext(AuthContext);

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isInternal = pathname.startsWith("/docs/internal-docs");

  // ⏳ Mientras carga Firebase
  if (loading) return null;

  // ❌ Si la página es interna pero NO hay login
  if (isInternal && !user) {
    if (typeof window !== "undefined") {
      window.location.replace("/internal/login");
    }
    return null;
  }

  // ❌ Si hay login pero NO tiene permisos
  if (isInternal && !allowedUsers.includes(user.email)) {
    if (typeof window !== "undefined") {
      window.location.replace("/internal/no-access");
    }
    return null;
  }

  return <OriginalLayout {...props} />;
}
