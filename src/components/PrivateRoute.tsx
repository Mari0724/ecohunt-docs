import React, { useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import { allowedUsers } from "../auth/allowedUsers";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  // Mientras revisa login, no renderizar nada
  if (loading) return null;

  // No está logueado → enviar al login
  if (!user) {
    if (typeof window !== "undefined") {
      window.location.replace("/internal/login");
    }
    return null;
  }

  // Está logueado pero NO tiene acceso
  if (!allowedUsers.includes(user.email)) {
    if (typeof window !== "undefined") {
      window.location.replace("/internal/no-access");
    }
    return null;
  }

  // Todo bien → renderizar contenido interno
  return <>{children}</>;
}
