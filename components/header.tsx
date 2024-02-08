import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Importez le fichier CSS pour ce composant

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/">
          <button className={styles.button}>Homepage</button>
        </Link>

        <Link href="/ads">
          <button className={styles.button}>
            Annonces
          </button>
        </Link>
        
        <Link href="/adCreate">
          <button className={styles.button}>
            Créer annonce
          </button>
        </Link>

        <Link href="/search">
          <button className={styles.button}>
            Recherche
          </button>
        </Link>  
          
      {/* 
      <Link href="/register">
            <button>
                Inscription---
            </button>
        </Link>

        <Link href="/login">
            <button>
                Login---
            </button>
        </Link>

        <Link href="/account">
            <button>
                Mon Compte---
            </button>
        </Link>

        <Link href="/messenger">
            <button>
                Messagerie---
            </button>
        </Link> 
        */}

    </nav>
    <br/>
    </header>
  );
};

export default Header;