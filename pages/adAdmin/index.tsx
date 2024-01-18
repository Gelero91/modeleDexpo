import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import cardData from "../../data/cardData"; // Assurez-vous d'importer les données correctes
import styles from "./adAdmin.module.css";

export default function adAdmin() {
    return (
        <div>
        <Header />
            <div className={styles.container}>
                <h1>adAdmin</h1>
                <p>
                    creation/modification des annonces
                </p>
            </div>
        <Footer />
        </div>
    )
    }