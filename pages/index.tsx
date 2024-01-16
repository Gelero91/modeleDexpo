import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import cardData from "../data/cardData";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
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

      <Footer />
    </div>
  );
};

export default Home;
