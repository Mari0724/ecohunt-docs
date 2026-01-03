import React, { useContext } from "react";
import Layout from "@theme/Layout";
import { AuthContext } from "../../auth/AuthContext";
import { allowedUsers } from "../../auth/allowedUsers";
import { BASE } from "../../config/baseUrl";

export default function InternalHome() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Layout>
        <main style={{ padding: 40, textAlign: "center" }}>
          <p>Cargando...</p>
        </main>
      </Layout>
    );
  }

  // ❌ No autenticado → login
  if (!user) {
    if (typeof window !== "undefined") {
      window.location.href = `${BASE}/internal/login`;
    }
    return null;
  }

  // ❌ No autorizado → no-access
  if (!allowedUsers.includes(user.email)) {
    if (typeof window !== "undefined") {
      window.location.href = `${BASE}/internal/no-access`;
    }
    return null;
  }

  return (
    <Layout title="Área Interna • EcoHunt">
      <main
        style={{
          minHeight: "100vh",
          padding: "80px 20px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, #4CAF50, #72C74C 35%, #3CB1D3 100%)",
          color: "white",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "1.8rem" }}>
          Estás en el Área Interna de Documentación
        </h2>

        <img
          src={`${BASE}/img/Logo.png`}
          alt="EcoHunt Logo"
          style={{ width: "300px", marginBottom: "20px" }}
        />

        <p style={{ fontSize: "1.3rem", marginBottom: "40px" }}>
          Bienvenida, {user.email}
        </p>

        <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
          Usa el menú superior para navegar por la documentación privada.
        </p>
      </main>
    </Layout>
  );
}
