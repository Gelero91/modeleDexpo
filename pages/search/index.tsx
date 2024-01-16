import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import cardData from "../../data/cardData"; // Assurez-vous d'importer les données correctes

const cardsPerPage = 10;

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Filtrer les données en fonction du terme de recherche
    const filteredCardData = cardData.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(filteredCardData.length / cardsPerPage);

    // Calculer l'index de début et de fin des cartes à afficher sur la page actuelle
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Sélectionner les cartes pour la page actuelle
    const cardsForCurrentPage = filteredCardData.slice(startIndex, endIndex);

    return (
        <div>
            <Header />
            <h1>Recherche d'annonces</h1>

            {/* Champ de recherche */}
            <input
                type="text"
                placeholder="Entrez votre critère de recherche"
                value={searchTerm}
                onChange={(e) => {
                    setCurrentPage(1); // Réinitialiser la page à la première lorsqu'un nouveau terme de recherche est saisi
                    setSearchTerm(e.target.value);
                }}
            />

            {/* Liste filtrée en fonction du terme de recherche et de la pagination */}
            {searchTerm && cardsForCurrentPage.length > 0 ? (
                <div>
                    <ul>
                        {cardsForCurrentPage.map((card) => (
                            <li key={card.title}>
                                <Card title={card.title} content={card.content} />
                            </li>
                        ))}
                    </ul>

                    {/* Pagination */}
                    <div>
                        <p>Page {currentPage} sur {totalPages}</p>
                        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Précédent</button>
                        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Suivant</button>
                    </div>
                </div>
            ) : (
                <p>{searchTerm ? "Aucun résultat trouvé." : "Veuillez entrer un critère de recherche."}</p>
            )}

            <Footer />
        </div>
    );
}
