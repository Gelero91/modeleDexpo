// pages/ads/[id].
import React from "react";
import { useRouter } from "next/router";
import cardData from "../../data/cardData";
import styles from "./ads.module.css"

const CardDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const selectedCard = cardData.find((card) => card.id === parseInt(id, 10));

    if (!selectedCard) {
        return <div>Card not found</div>;
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.chapeau}>
                <h1>{selectedCard.title}</h1>
            <div className={styles.separator}></div>

            <p>{selectedCard.content}</p>
            </div>
        </div>
    );
};

export default CardDetails;
