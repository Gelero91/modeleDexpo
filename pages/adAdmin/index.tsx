import React, { useState } from "react";
import Card from '../../components/AdCard';
import cardData from "../../data/cardData"; // Assurez-vous d'importer les données correctes
import styles from "./adAdmin.module.css";

export default function adAdmin() {
    return (
        <div>
            <h1>adAdmin</h1>
            <br />
            <br />
            <p>
                creation/modification des annonces
            </p>
        </div>
    )
    }