// pages/ads/[id].
import React from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";
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
            <Header />
            <h1>{selectedCard.title}</h1>
            <p>{selectedCard.content}</p>
            <Footer />
        </div>
    );
};

export default CardDetails;
