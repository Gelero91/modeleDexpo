import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import cardData from "../data/cardData";
import './globals.css';
import styles from "./home.module.css";

const Home: React.FC = () => {
  return (
    <>        
        <div className={styles.pageContainer}>
          <h1>INDEX</h1>
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
        </div>
    </>
  );
};

export default Home;
