import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import SearchBar from './SearchBar';
import Image from 'next/image'
import Logo from '../public/assets/logo.png'
import { Button } from './Button';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerLeft}> 
       <Link href="/">
          <Image
            src={Logo}
            width={134}
            height={40}
            alt="Logo de modeExpo"
          />
        </Link>
      </nav>

      

      <nav className={styles.headerRight}>
          <SearchBar />
          <Button text='Se connecter' path='/signin' className={styles.btnHeader}/>
          <Button text="S'inscrire" path='/signup' className={styles.btnHeader}/>
          <Button text='Annonces' path='/ads' className={styles.btnHeader}/>
      </nav>

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

    </header>
  );
};

export default Header;