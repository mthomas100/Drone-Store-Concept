import React from "react";
import { GetStaticProps } from "next";

import {
    Footer,
    MarketingCards,
    SellingPoints,
    Main,
    Testimonials,
    NewProducts,
} from "components";
import createApolloClient from "@services/graphql";
import {
    Hero,
    MarketingCard,
    Product,
    SellingPoint,
    Testimonial,
} from "graphql/types";
import {
    MARKETING_CARDS_QUERY,
    PRODUCTS_QUERY,
    SELLING_POINT_QUERY,
    TESTIMONIALS_QUERY,
    HERO_QUERY,
} from "graphql/queries";

type HomeProps = {
    marketingCards: MarketingCard[];
    products: Product[];
    sellingPoint: SellingPoint;
    testimonials: Testimonial[];
    hero: Hero;
};

const Home: React.FC<HomeProps> = ({
    marketingCards,
    products,
    sellingPoint,
    testimonials,
    hero,
}) => {
    return (
        <div id="homePageWrapper" className="bg-black">
            <Main hero={hero} />
            <MarketingCards marketingCards={marketingCards} />
            <SellingPoints sellingPoint={sellingPoint} />
            <NewProducts products={products} />
            <Testimonials testimonials={testimonials} />
            <Footer />
        </div>
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

    const { data: { hero }} = await createApolloClient.query({
        query: HERO_QUERY,
    });
    /* eslint-enable */

    return {
        props: {
            marketingCards,
            products,
            sellingPoint,
            testimonials,
            hero,
        },
    };
};
