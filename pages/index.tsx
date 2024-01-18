import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import cardData from "../data/cardData";
import styles from "./index.module.css";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
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
          */}
        </div>
      <Footer />
    </div>
  );
};

export default Home;
