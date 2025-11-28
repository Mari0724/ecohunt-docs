// src/theme/DocSidebar/index.tsx

import React, { useContext } from 'react'; // 💡 ¡ESTA ES LA LÍNEA CRUCIAL PARA RESOLVER EL ERROR JSX!
import DocSidebar from '@theme-original/DocSidebar';
import type { Props } from '@theme/DocSidebar'; 

// Importa los módulos de autenticación (Asegúrate de que esta ruta sea correcta)
import { AuthContext } from "../../auth/AuthContext";
import { allowedUsers } from "../../auth/allowedUsers";


// Los labels a ocultar si el usuario NO está autorizado
const privateLabels = ['Narrativa', 'Marketing', 'Niveles', 'Diseño'];

// Definimos el tipo de ítem de la barra lateral para un mejor tipado en TypeScript
type SidebarItem = {
    type: string;
    label?: string;
    items?: SidebarItem[];
    // Puedes añadir otros campos necesarios de Docusaurus aquí
};


// Función auxiliar para filtrar el contenido del sidebar
function filterSidebarItems(items: SidebarItem[], isAllowed: boolean): SidebarItem[] {
  if (isAllowed) {
    return items; // Si tiene permisos, devuelve todos los elementos
  }
  
  // Filtra los elementos que tengan etiquetas privadas (solo para usuarios no autorizados)
  return items.filter(item => {
    // Si es un 'category' y el label está en la lista de privados, lo ocultamos.
    if (item.type === 'category' && item.label && privateLabels.includes(item.label)) {
      return false;
    }
    
    // Si es una categoría y no es privada, verificamos recursivamente sus hijos
    if (item.type === 'category' && item.items) {
      // 💡 Se necesita una asignación explícita para asegurar que el filtering sea aplicado
      item.items = filterSidebarItems(item.items, isAllowed);
    }
    
    // Devolvemos el ítem (es público o ya se filtraron sus hijos)
    return true;
  });
}

export default function DocSidebarWrapper(props: Props) {
  const { user, loading } = useContext(AuthContext);
  
  // Clonamos el sidebar original para manipularlo
  // Usamos as any para asegurar que el tipado de TypeScript no interfiera con la clonación
  let sidebarItems = props.sidebar ? (props.sidebar as any[]).map(item => ({...item})) : [];
  
  // Manejo del estado de carga
  if (loading) {
    // Muestra el sidebar original (sin filtrar) mientras carga el estado
    return <DocSidebar {...props} />;
  }

  const isAllowed = user && allowedUsers.includes(user.email);
  
  // 1. Filtra los elementos del sidebar
  sidebarItems = filterSidebarItems(sidebarItems, isAllowed);
  
  // 2. Renderiza el sidebar original con los elementos filtrados
  return <DocSidebar {...props} sidebar={sidebarItems} />;
}