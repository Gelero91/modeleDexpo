import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import cardData from "../../data/cardData"; // Assurez-vous d'importer les données correctes

export default function adAmin() {
    return (
        <div>
        <Header />
            <h1>adDetail</h1>
            <p>
                détail d'un produit
            </p>
        <Footer />
        </div>
    )
    }