import React from "react";
import Layout from "@theme/Layout";

export default function InternalHome() {
  return (
    <Layout title="Área Interna • EcoHunt">
      <main
        style={{
          padding: "40px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1>Documentación Interna de EcoHunt</h1>
        <p>
          Aquí estará todo el contenido privado del proyecto: narrativa completa,
          marketing, niveles, planificación y prompts internos.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <p style={{ opacity: 0.7 }}>
            (Aún no está activado el inicio de sesión)
          </p>
        </div>
      </main>
    </Layout>
  );
}
