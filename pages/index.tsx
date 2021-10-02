import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";

import {
    Container,
    Header,
    Footer,
    Testimonials,
    Cards,
    NewProducts,
    SellingPoints,
    Main,
    MobileNav,
} from "components";
import gql from "graphql-tag";
import createApolloClient from "@services/graphql";
import client from "../lib/apollo-client";
import { MarketingCards, marketingCardsQuery } from "graphql/marketingCards";

const Home: React.FC<{ marketingCards: MarketingCards[] }> = ({
    marketingCards,
}) => {
    {
        marketingCards.map((card) => console.log(card.header));
    }
    return (
        <Container>
            <MobileNav />
            <Header />
            <Main />
            <Cards />
            <SellingPoints />
            <NewProducts />
            <Testimonials />
            <Footer />
        </Container>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await createApolloClient.query({
        query: marketingCardsQuery,
    });

    return {
        props: {
            marketingCards: data.marketingCards,
        },
    };
};
