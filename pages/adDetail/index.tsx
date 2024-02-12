import React, { useState } from "react";
import Card from '../../components/AdCard';
import cardData from "../../data/cardData"; // Assurez-vous d'importer les données correctes
import styles from "./adDetail.module.css";

export default function adAmin() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.chapeau}>
                <h1>INDEX</h1>
                <div className={styles.separator}></div>
                <p>Page d'accueil</p>
                <div />
                <p>
                    détail d'un produit
                </p>
            </div>
        </div>
    );
}
