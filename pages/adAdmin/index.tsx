import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import cardData from "../../data/cardData"; // Assurez-vous d'importer les données correctes

export default function adAdmin() {
    return (
        <div>
        <Header />
            <h1>adAdmin</h1>
            <p>
                creation/modification des annonces
            </p>
        <Footer />
        </div>
    )
    }