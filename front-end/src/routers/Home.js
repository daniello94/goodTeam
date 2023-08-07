import React from "react";
import Container from "../components/Container";
/* components */
import MainProfessions from "./MainProfessions";
import BecomePartner from "./BecomePartner";
import OurOfferPage from "./OurOfferPage";
import Heder from "./Heder";

export default function Home() {
    return (
        <>
            <Container heder={true}>
                <Heder />
            </Container>
            <BecomePartner />
            <OurOfferPage />
            <MainProfessions />
        </>
    )
}