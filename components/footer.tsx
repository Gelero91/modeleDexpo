import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';
import { Button } from './Button';

const Footer = () => {
  return (
    // <footer className={styles.footer}>
    //   <div className={styles.linksContainer}>
    //     <Link href="/rgpd">
    //       <p className={styles.rgpd}>-RGPD</p>
    //     </Link>

    //     <Link href="/cgu">
    //       <p className={styles.rgpd}>- CGU</p>
    //     </Link>

    //     <Link href="/cgu">
    //       <button className={styles.button}>Nous contacter</button>
    //     </Link>
    //   </div>
    // </footer>
    <footer className={styles.footer}>

    <nav className={styles.footerLeft}>
      <Link href='/about' className={styles.rgpd}>-A Propos</Link>
      <Link href='/rgpd' className={styles.rgpd}>-RGPD</Link>
      <Link href='/cgu' className={styles.rgpd}>-CGU</Link>
    </nav>
    <hr />
    <nav className={styles.footerRight}>
      <Button path='/contactUs' text="Contactez nous" className={styles.btnFooter}/>
    </nav>
  </footer>
  );
};

export default Footer;
