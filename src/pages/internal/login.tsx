import React from "react";
import Layout from "@theme/Layout";
import { auth, githubProvider } from "../../auth/firebase";
import { signInWithPopup, browserPopupRedirectResolver } from "firebase/auth";

export default function LoginPage() {

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider, browserPopupRedirectResolver);

      if (typeof window !== "undefined") {
        window.location.assign("/internal");
      }

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Revisa la consola para más detalles.");
    }
  };

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
        <p>Inicia sesión con tu cuenta autorizada.</p>

        <button
          className="button button--primary button--lg"
          style={{ marginTop: "20px" }}
          onClick={handleLogin}
        >
          Iniciar sesión con GitHub
        </button>
      </main>
    </Layout>
  );
}
