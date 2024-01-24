import React from 'react';
import styles from './footer.module.css';
import baseStyle from '../baseStyle.module.css';
import { Button } from './button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <section className={styles.footerLeft}>
        <Link href='/rgpd' className={baseStyle.link}>RGPD</Link>
        <Link href='/cgu' className={baseStyle.link}>CGU</Link>
      </section>
      <hr />
      <section className={styles.footerRight}>
        <Button path='/contactUs' text="Contactez nous" className={styles.btnFooter}/>
      </section>
    </footer>
  );
};

export default Footer;
