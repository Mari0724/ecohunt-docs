import React, { useContext } from 'react';
import DocSidebarOriginal from '@theme-original/DocSidebar';
import { AuthContext } from "../../auth/AuthContext";
import { allowedUsers } from "../../auth/allowedUsers";

export default function DocSidebarWrapper(props) {
  const { user, loading } = useContext(AuthContext);
  const isAllowed = user && allowedUsers.includes(user.email || "");

  // Mientras carga la sesión, no mostramos nada para evitar que lo privado
  // "parpadee" un segundo antes de ocultarse.
  if (loading) return null;

  // Si eres tú (admin logueada), te entregamos la barra original sin filtros.
  if (isAllowed) {
    return <DocSidebarOriginal {...props} />;
  }

  // --- LÓGICA PARA EL PÚBLICO (No logueados) ---
  const privateLabels = ['Narrativa', 'Marketing', 'Niveles', 'Diseño', 'Planificación', 'Prompts'];

  // Filtramos el array de la sidebar para quitar las categorías privadas
  const publicSidebar = props.sidebar.filter(item => {
    // Si el nombre de la categoría está en nuestra lista negra, la quitamos (false)
    return !privateLabels.includes(item.label);
  });

  // Retornamos la versión original de la barra pero solo con los items públicos
  return <DocSidebarOriginal {...props} sidebar={publicSidebar} />;
}