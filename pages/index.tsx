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
import createApolloClient from "@services/graphql";
import {
    MarketingCardsTypes,
    MARKETING_CARDS_QUERY,
    ProductsTypes,
    PRODUCTS_QUERY,
    SellingPointsTypes,
    SELLING_POINT_QUERY,
    TestimonialsTypes,
    TESTIMONIALS_QUERY,
} from "graphql/queries";

type gqlProps = {
    marketingCards: MarketingCardsTypes[];
    products: ProductsTypes[];
    sellingPoint: SellingPointsTypes;
    testimonials: TestimonialsTypes[];
};

const Home: React.FC<gqlProps> = ({
    marketingCards,
    products,
    sellingPoint,
    testimonials,
}) => {
    return (
        <Container>
            <MobileNav />
            <Header />
            <Main />
            <Cards marketingCards={marketingCards} />
            <SellingPoints sellingPoint={sellingPoint} />
            <NewProducts products={products} />
            <Testimonials testimonials={testimonials} />
            <Footer />
        </Container>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    /* eslint-disable */
    const { data: { marketingCards }} = await createApolloClient.query({
        query: MARKETING_CARDS_QUERY,
    });
    
    const { data: { products }} = await createApolloClient.query({
        query: PRODUCTS_QUERY,
    });

    const { data: { sellingPoint }} = await createApolloClient.query({
        query: SELLING_POINT_QUERY,
    });

    const { data: { testimonials }} = await createApolloClient.query({
        query: TESTIMONIALS_QUERY,
    });
    /* eslint-enable */

    return {
        props: {
            marketingCards,
            products,
            sellingPoint,
            testimonials,
        },
    };
};
