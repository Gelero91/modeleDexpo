import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/AdCard";
import cardData from "../data/cardData";
import './globals.css';
import styles from "./home.module.css";

const Home: React.FC = () => {
  return (
    <>        
        <main className={styles.pageContainer}>
          <div className={styles.chapeau}>
            <h1>INDEX</h1>
            <div className={styles.separator}></div>
              <p>Page d'accueil</p>
                {/*
                  <ul>
                    {cardData.map((card) => (
                      <li key={card.title}>
                        <Card title={card.title} content={card.content} />
                      </li>
                    ))}
                  </ul>
                */
                }
              <div/>
            </div>
        </main>
    </>
  );
};

export default Home;
