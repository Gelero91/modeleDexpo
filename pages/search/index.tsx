// pages/search.tsx
import React, { useState } from "react";
import Card from '../../components/AdCard';
import cardData from "../../data/cardData"; // Assurez-vous d'importer les données correctes
import styles from "./search.module.css";
import Link from "next/link";

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
            <div className={styles.chapeau}>
                <h1>Recherche d'annonces</h1>
                <p>ajouter filtre : type, lieu, ordonner selon prix...</p>
            </div>

            <div className={styles.separator}></div>

            {/* Champ de recherche */}
            <div className={styles.recherche}>

                <p>mots-clés :</p>
                <input
                    type="text"
                    placeholder="Entrez votre critère de recherche"
                    value={searchTerm}
                    onChange={(e) => {
                        setCurrentPage(1); // Réinitialiser la page à la première lorsqu'un nouveau terme de recherche est saisi
                        setSearchTerm(e.target.value);
                    }}
                />
                <br/>
            </div>
            <div className={styles.separator}></div>

            <br />
            <br />

            {/* Liste filtrée en fonction du terme de recherche et de la pagination */}
            {searchTerm && cardsForCurrentPage.length > 0 ? (
                <div>
                    <ul> 
                        {cardsForCurrentPage.map((card) => (

                            <Link href={`/ads/${card.id}`}>
                            <div key={card.id} className={styles.card}>
                                <li key={card.title}>
                                    <Card title={card.title} content={card.content} image={card.image}/>
                                </li>
                            </div>
                            </Link>
                        ))}
                    </ul>


                    {/* Pagination */}
                    <br />
                    <div className={styles.pagination}>
                        <p>Page {currentPage} sur {totalPages}</p>
                        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={styles.boutonPagination}>Précédent</button>
                        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className={styles.boutonPagination}>Suivant</button>
                    </div>
                    <br/>
                </div>
            ) : (
                <p className={styles.paragraph}>{searchTerm ? "Aucun résultat trouvé." : "Veuillez entrer un critère de recherche."}</p>
            )}
        </div>
    );
}
