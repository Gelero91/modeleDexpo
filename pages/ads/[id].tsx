// pages/ads/[id].
import React from "react";
import { useRouter } from "next/router";
import cardData from "../../data/cardData";

const CardDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const selectedCard = cardData.find((card) => card.id === parseInt(id, 10));

    if (!selectedCard) {
        return <div>Card not found</div>;
    }

    return (
        <div>
            <h1>{selectedCard.title}</h1>
            <p>{selectedCard.content}</p>
        </div>
    );
};

export default CardDetails;
