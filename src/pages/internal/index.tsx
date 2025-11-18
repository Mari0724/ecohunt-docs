import React, { useContext } from "react";
import Layout from "@theme/Layout";
import { AuthContext } from "../../auth/AuthContext";

export default function InternalHome() {
  const { user, loading } = useContext(AuthContext);

  const allowed = [
    "ximenadelgadom07@gmail.com",
    "emiliagalloalzate85@gmail.com"
  ];

  if (loading) return <p>Cargando...</p>;

  if (!user) {
    if (typeof window !== "undefined") window.location.href = "/internal/login";
    return null;
  }

  if (!allowed.includes(user.email)) {
    alert("No tienes permiso para acceder.");
    if (typeof window !== "undefined") window.location.href = "/internal/login";
    return null;
  }

  return (
    <Layout title="EcoHunt - Interno">
      <main
        style={{
          minHeight: "100vh",
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(180deg, #4CAF50, #72C74C 35%, #3CB1D3 100%)",
          color: "white",
        }}
      >

        <h2 style={{ marginBottom: "20px", fontSize: "1.6rem" }}>
          Estás en el Área Interna de Documentación
        </h2>

        <img
          src="/img/logo+nombre.png"
          alt="EcoHunt Logo"
          style={{ width: "380px", marginBottom: "20px" }}
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
