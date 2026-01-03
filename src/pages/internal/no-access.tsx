import React, { useContext } from "react";
import Layout from "@theme/Layout";
import { AuthContext } from "../../auth/AuthContext";
import { githubLogout } from "../../auth/firebase";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "../internal/css/no-access.css";

export default function NoAccessPage() {
  const { user } = useContext(AuthContext);

  return (
    <Layout title="Acceso denegado">
      <main className="noAccessPage">
        <div className="noAccessCard">
          <img
            src={useBaseUrl("/img/pixel-warning.png")}
            alt="Acceso denegado"
            className="noAccessImg"
          />

          <h1 className="noAccessTitle">Acceso Denegado</h1>

          <p className="noAccessText">
            {user
              ? "Tu cuenta no está autorizada para acceder a la documentación interna."
              : "Debes iniciar sesión primero."}
          </p>

          {user ? (
            <button
              className="button button--primary button--lg"
              onClick={async () => {
                await githubLogout();
                window.location.href = "/";
              }}
            >
              Cerrar sesión
            </button>
          ) : (
            <button
              className="button button--primary button--lg"
              onClick={() => (window.location.href = "/internal/login")}
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </main>
    </Layout>
  );
}
