// pages/search.tsx
import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import cardData from "../../data/cardData";
import styles from "./search.module.css";

const cardsPerPage = 10;

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCardData = cardData.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCardData.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cardsForCurrentPage = filteredCardData.slice(startIndex, endIndex);

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1>Recherche d'annonces</h1>
                <input
                    type="text"
                    placeholder="Entrez votre critère de recherche"
                    value={searchTerm}
                    onChange={(e) => {
                        setCurrentPage(1);
                        setSearchTerm(e.target.value);
                    }}
                />

                {searchTerm && cardsForCurrentPage.length > 0 ? (
                    <div className={styles.listContainer}>
                            {cardsForCurrentPage.map((card) => (
                                <div className={styles.cardContainer} key={card.title}>
                                        <Link href={`/ads/${card.id}`}>
                                            <Card title={card.title} content={card.content} />
                                        </Link>
                                        <Link href={`/adEdit/${card.id}`}>
                                            Modifier
                                        </Link>
                                </div>
                            ))}

                        <div>
                            <p>Page {currentPage} sur {totalPages}</p>
                            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                Précédent
                            </button>
                            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                                Suivant
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>{searchTerm ? "Aucun résultat trouvé." : "Veuillez entrer un critère de recherche."}</p>
                )}
            <br></br>
            </div>
            <Footer />
        </div>
    );
}
