import React from "react";
import Layout from "@theme/Layout";

export default function LoginPage() {
  return (
    <Layout title="Acceso Interno">
      <main
        style={{
          padding: "40px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1>Acceso Interno</h1>
        <p>Pronto podrás iniciar sesión para acceder a la documentación privada.</p>

        <button className="button button--primary" disabled>
          Iniciar sesión (deshabilitado)
        </button>
      </main>
    </Layout>
  );
}
