// pages/adEdit/[id].tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import cardData, { CardData } from "../../data/cardData";

const EditCard = () => {
  const router = useRouter();
  const { id } = router.query;
  const cardId = typeof id === "string" ? parseInt(id, 10) : NaN;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // Récupérer les détails de la carte existante lors du chargement de la page
    const existingCard = cardData.find((card) => card.id === cardId);

    if (existingCard) {
      setTitle(existingCard.title);
      setContent(existingCard.content);
    }
  }, [cardId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mettre à jour les détails de la carte existante dans les données
    cardData.forEach((card) => {
      if (card.id === cardId) {
        card.title = title;
        card.content = content;
      }
    });

    // Rediriger vers la liste de cartes après la modification
    router.push("/");
  };

  return (
    <div>
      <h1>Modifier la carte</h1>
      <br />        
      <br />
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
        <button type="submit">Modifier la carte</button>
      </form>
    </div>
  );
};

export default EditCard;
