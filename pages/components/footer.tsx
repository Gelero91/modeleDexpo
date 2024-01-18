import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css'; // Importez le fichier CSS pour ce composant

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        <Link href="/rgpd">
          <button className={styles.button}>RGPD</button>
        </Link>
        <br/>
        <Link href="/cgu">
          <button className={styles.button}>CGU</button>
        </Link>
        <br/>
          2023, Konexio
      </div>
    </footer>
  );
};

export default Footer;
