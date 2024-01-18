import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>

      <Button path="/rgpd" text="RGPD"/>
      <Button path="/cgu" text="CGU"/>
      2023, Konexio
    </footer>
  );
};

export default Footer;
