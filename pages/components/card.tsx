// components/Card.tsx
import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
