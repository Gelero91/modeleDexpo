// pages/create-card.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import cardData, { CardData } from "../../data/cardData";
import styles from "./adCreate.module.css";

const CreateCard = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Gérer la création d'une nouvelle carte ici
    const newCard: CardData = {
      id: cardData.length + 1, // Assurez-vous que les IDs sont uniques
      title,
      content,
    };

    // Ajouter la nouvelle carte aux données existantes
    cardData.push(newCard);

    // Rediriger vers la liste de cartes après la création
    router.push("/");
  };

  return (
    <div>
      <div className={styles.chapeau}>
                <h1>Création d'annonce</h1>
      </div>

      <div className={styles.separator}></div>

            {/* Champ de recherche */}
      <div className={styles.paragraph}>

      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <br />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />

        <label>
          Contenu:
          <br />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
      <div/>
      <br/>
        <button type="submit"  className={styles.button}>Créer la carte</button>
        </form>
      </div>
    </div>

  );
};

export default CreateCard;
