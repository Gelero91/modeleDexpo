// components/Card.tsx
import React from "react";
import styles from './card.module.css'; // Importez le fichier CSS pour ce composant

interface CardProps {
  title: string;
  content: string;
  image: string; // Ajoutez la propriété image
}

const Card: React.FC<CardProps> = ({ title, content, image }) => {
  return (
    <div className={styles.cardContainer}>

      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.additionalContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <h3 className={styles.price}>10€</h3>
      </div>
      
    </div>
  );
};

export default Card;
