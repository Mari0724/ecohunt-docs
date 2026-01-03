import React, { useContext } from "react";
import OriginalDocItem from "@theme-original/DocItem";
import { AuthContext } from "../../auth/AuthContext";
import { allowedUsers } from "../../auth/allowedUsers";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function DocItemWrapper(props) {
  const { user, loading } = useContext(AuthContext);

  const source = props.content?.metadata?.source || "";
  const permalink = props.content?.metadata?.permalink || "";

  const isInternal = source.includes("internal-docs");

  const loginUrl = useBaseUrl("/internal/login");
  const noAccessUrl = useBaseUrl("/internal/no-access");

  if (loading) return null;

  // No logueado → login
  if (isInternal && !user) {
    if (typeof window !== "undefined") {
      window.location.replace(loginUrl);
    }
    return null;
  }

  // Logueado pero no autorizado
  if (isInternal && !allowedUsers.includes(user.email)) {
    if (typeof window !== "undefined") {
      window.location.replace(noAccessUrl);
    }
    return null;
  }

  return <OriginalDocItem {...props} />;
}
