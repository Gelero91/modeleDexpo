// pages/index.tsx
import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import cardData from "../../data/cardData";
import styles from "./ads.module.css";

const cardsPerPage = 10;

const AdList = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const cardsForCurrentPage = cardData.slice(startIndex, endIndex);

    return (
        <div>
            <Header />
                <div className={styles.container}>
                    <br></br>
                    <h1>Liste d'annonces</h1>
                        <div className={styles.listContainer}>
                            {cardsForCurrentPage.map((card) => (
                                <div className={styles.cardContainer} key={card.id}>
                                    <Link href={`/ads/${card.id}`}>
                                        <Card title={card.title} content={card.content} />
                                    </Link>

                                    <Link href={`/adEdit/${card.id}`}>
                                        Modifier
                                    </Link>
                                </div>
                            ))}
                        </div>
                    <div>
                        <p>Page {currentPage} sur {totalPages}</p>
                        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Précédent</button>
                        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Suivant</button>
                    </div>
                    <br></br>
                </div>

            <Footer />
        </div>
    );
};

export default AdList;
