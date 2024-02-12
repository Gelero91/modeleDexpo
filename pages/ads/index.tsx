// pages/index.tsx
import React, { useState } from "react";
import Link from "next/link";
import Card from '../../components/AdCard';
import cardData from "../../data/cardData";
import styles from "./ads.module.css";
import FilterBar from "../../components/FilterBar";
import AdCard from "../../components/AdCard";

const cardsPerPage = 10;

const AdList = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const cardsForCurrentPage = cardData.slice(startIndex, endIndex);

    return (
        <div>
            <FilterBar />

            <h1 className={styles.chapeau}>Toutes les annonces</h1>

            <hr className={styles.separator}></hr>

                        {/* <div key={card.id} className={styles.cardContent}>
                            <Link href={`/ads/${card.id}`}>
                                <Card title={card.title} content={card.content}  image={card.image} />
                            </Link>
                        </div> */}


            <section className={styles.cardList}>

                { cardsForCurrentPage.map((card: CardData) => (
                    <AdCard 
                        key={card.id}
                        title={card.title}
                        image={card.image}                                              
                        storeName={card.storeName}
                        storeCity={card.storeCity}
                        discountPrice={card.discountPrice}
                        realPrice={card.realPrice}
                        content={card.content} 
                    />
                ))}
            </section>

            

            <div className={styles.pagination}>
                <p>Page {currentPage} sur {totalPages}</p>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={styles.boutonPagination}>Précédent</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className={styles.boutonPagination}>Suivant</button>
            </div>
        </div>
    );
};

export default AdList;
