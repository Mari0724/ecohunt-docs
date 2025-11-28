/*import React, { useContext } from "react";
import OriginalUseDocsSidebar from "@theme-original/hooks/useDocsSidebar";
import { AuthContext } from "../../auth/AuthContext";
import { allowedUsers } from "../../auth/allowedUsers";

export default function useDocsSidebar(...args) {
  const sidebar = OriginalUseDocsSidebar(...args);
  const { user } = useContext(AuthContext);

  const isAllowed = user && allowedUsers.includes(user.email);

  if (!sidebar) return sidebar;

  // Filtrar recursivamente
  function filter(items) {
    return items
      .map((item) => {
        // Si es categoría → filtrar hijos
        if (item.items) {
          const filtered = filter(item.items);
          if (filtered.length === 0) return null;
          return { ...item, items: filtered };
        }

        // Si es item individual
        if (
          item.id?.startsWith("internal-docs/") ||
          item.href?.startsWith("/docs/internal-docs")
        ) {
          return isAllowed ? item : null;
        }

        return item;
      })
      .filter(Boolean);
  }

  return {
    ...sidebar,
    items: filter(sidebar.items),
  };
}*/
