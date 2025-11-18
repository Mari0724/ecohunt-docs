import React, { useContext } from "react";
import OriginalDocItem from "@theme-original/DocItem";
import { AuthContext } from "../../auth/AuthContext";

export default function DocItemWrapper(props) {
  const { user, loading } = useContext(AuthContext);

  // Si el documento está dentro de /internal-docs
  const isInternal = props.content.metadata.permalink.startsWith("/docs/internal-docs");

  if (loading) return <p style={{ textAlign: "center" }}>Cargando...</p>;

  if (isInternal && !user) {
    if (typeof window !== "undefined") window.location.href = "/internal/login";
    return null;
  }

  return <OriginalDocItem {...props} />;
}
