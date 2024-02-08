// pages/index.tsx
import React, { useState } from "react";
import Link from "next/link";
import Card from '../../components/card';
import cardData from "../../data/cardData";
import styles from "./ads.module.css";
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
            <div className={styles.chapeau}>
                <h1>Liste d'annonces</h1>
                <p>ajouter filtre : type, lieu, ordonner selon prix...</p>
            </div>

            <div className={styles.separator}></div>
            <br/>
            <ul>
                {cardsForCurrentPage.map((card: CardData) => (
                <div key={card.id} className={styles.card}>
                    <div key={card.id} className={styles.cardContent}>
                        <Link href={`/ads/${card.id}`}>
                            <Card title={card.title} content={card.content}  image={card.image} />
                        </Link>

  {/*   fonction de modification, ajouter condition administrateur
                        
                        <br/>
                        <Link href={`/adEdit/${card.id}`}>
                            Modifier
                        </Link>
 */}
                    </div>
                </div>
                ))}
            </ul>

            <div className={styles.pagination}>
                <p>Page {currentPage} sur {totalPages}</p>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={styles.boutonPagination}>Précédent</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className={styles.boutonPagination}>Suivant</button>
            </div>
        </div>
    );
};

export default AdList;
