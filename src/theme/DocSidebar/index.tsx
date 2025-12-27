import React, { useContext } from 'react';
import DocSidebarOriginal from '@theme-original/DocSidebar';
import { AuthContext } from "../../auth/AuthContext";
import { allowedUsers } from "../../auth/allowedUsers";

export default function DocSidebarWrapper(props) {
  const { user, loading } = useContext(AuthContext);
  const isAllowed = user && allowedUsers.includes(user.email || "");

  if (loading) return null;

  // Si no está permitido, filtramos las categorías antes de que Docusaurus las dibuje
  const privateLabels = ['Narrativa', 'Marketing', 'Niveles', 'Diseño', 'Planificación', 'Prompts'];

  const filteredSidebar = props.sidebar.filter(item => {
    if (item.type === 'category' && privateLabels.includes(item.label)) {
      return isAllowed; // Solo devolver true si isAllowed es true
    }
    return true;
  });

  return <DocSidebarOriginal {...props} sidebar={filteredSidebar} />;
}