// pages/create-card.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import cardData, { CardData } from "../../data/cardData";

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
      <h1>Créer une nouvelle carte</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          Contenu:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>

        <button type="submit">Créer la carte</button>
      </form>
    </div>
  );
};

export default CreateCard;
