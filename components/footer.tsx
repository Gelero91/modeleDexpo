import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css'; // Importez le fichier CSS pour ce composant

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksContainer}>
        <Link href="/rgpd">
          <p className={styles.rgpd}>-RGPD</p>
        </Link>

        <Link href="/cgu">
          <p className={styles.rgpd}>- CGU</p>
        </Link>

        <Link href="/cgu">
          <button className={styles.button}>Nous contacter</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
