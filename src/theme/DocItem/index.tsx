import React, { useContext } from "react";
import OriginalDocItem from "@theme-original/DocItem";
import { AuthContext } from "../../auth/AuthContext";
import { allowedUsers } from "../../auth/allowedUsers";

export default function DocItemWrapper(props) {
  const { user, loading } = useContext(AuthContext);

  const source = props.content?.metadata?.source || "";
  const permalink = props.content?.metadata?.permalink || "";

  // Nuevo método correcto
  const isInternal = source.includes("internal-docs");

  console.log("DOCITEM ejecutándose:", {
    source,
    permalink,
    isInternal,
    userEmail: user?.email,
    allowedUsers
  });

  if (loading) return null;

  // No logueado → login
  if (isInternal && !user) {
    if (typeof window !== "undefined") {
      window.location.replace("/internal/login");
    }
    return null;
  }

  // Logueado pero no autorizado
  if (isInternal && !allowedUsers.includes(user.email)) {
    if (typeof window !== "undefined") {
      window.location.replace("/internal/no-access");
    }
    return null;
  }

  return <OriginalDocItem {...props} />;
}
