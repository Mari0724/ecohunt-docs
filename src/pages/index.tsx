import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="EcoHunt"
      description="Una aventura educativa sobre reciclaje y sostenibilidad"
    >
      <main className={styles.heroSection}>
        <div className={styles.container}>
          <img
            src={useBaseUrl('/img/logo+nombre.png')}
            alt="EcoHunt Logo"
            className={styles.heroLogo}
          />

          <p className={styles.subtitle}>
            Una aventura educativa donde cada decisión cuenta para salvar la ciudad.
          </p>

          <div className={styles.buttons}>
            <Link className="button button--lg" to="/docs/sobre-el-juego">
              Empezar
            </Link>

            <Link className="button button--secondary button--lg" to="/docs/historia">
              Historia del juego
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
