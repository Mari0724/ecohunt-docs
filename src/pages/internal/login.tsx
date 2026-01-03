import React from "react";
import Layout from "@theme/Layout";
import { auth, githubProvider } from "../../auth/firebase";
import { signInWithPopup, browserPopupRedirectResolver } from "firebase/auth";
import styles from "../internal/css/login.module.css";
import { BASE } from "../../config/baseUrl";

export default function LoginPage() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(
        auth,
        githubProvider,
        browserPopupRedirectResolver
      );

      // ✅ REDIRECCIÓN CORRECTA PARA GITHUB PAGES
      window.location.assign(`${BASE}/internal`);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Revisa la consola para más detalles.");
    }
  };

  return (
    <Layout title="Acceso Interno">
      <main className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h1 className={styles.loginTitle}>Acceso Interno</h1>

          <p className={styles.loginSubtitle}>
            Ingresa con tu cuenta autorizada para acceder a la documentación.
          </p>

          <button
            className={`button button--primary button--lg ${styles.loginButton}`}
            onClick={handleLogin}
          >
            Iniciar sesión con GitHub
          </button>
        </div>
      </main>
    </Layout>
  );
}
