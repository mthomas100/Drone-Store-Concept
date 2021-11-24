import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";

import {
    Container,
    Header,
    Footer,
    MarketingCards,
    SellingPoints,
    Main,
    MobileNav,
    Testimonials,
    NewProducts,
} from "components";
import createApolloClient from "@services/graphql";
import {
<<<<<<< HEAD
    Hero,
=======
>>>>>>> 799a5481abedd6ece0ad7673601722c2ddbe48e9
    MarketingCard,
    Product,
    SellingPoint,
    Testimonial,
} from "graphql/strapiTypes";
import {
    MARKETING_CARDS_QUERY,
    PRODUCTS_QUERY,
    SELLING_POINT_QUERY,
    TESTIMONIALS_QUERY,
<<<<<<< HEAD
    HERO_QUERY,
=======
>>>>>>> 799a5481abedd6ece0ad7673601722c2ddbe48e9
} from "graphql/queries";

type HomeProps = {
    marketingCards: MarketingCard[];
    products: Product[];
    sellingPoint: SellingPoint;
    testimonials: Testimonial[];
<<<<<<< HEAD
    hero: Hero;
=======
>>>>>>> 799a5481abedd6ece0ad7673601722c2ddbe48e9
};

const Home: React.FC<HomeProps> = ({
    marketingCards,
    products,
    sellingPoint,
    testimonials,
<<<<<<< HEAD
    hero,
=======
>>>>>>> 799a5481abedd6ece0ad7673601722c2ddbe48e9
}) => {
    return (
        <Container>
            <MobileNav />
            <Header />
<<<<<<< HEAD
            <Main hero={hero} />
=======
            <Main />
>>>>>>> 799a5481abedd6ece0ad7673601722c2ddbe48e9
            <MarketingCards marketingCards={marketingCards} />
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
<<<<<<< HEAD

    const { data: { hero }} = await createApolloClient.query({
        query: HERO_QUERY,
    });
=======
>>>>>>> 799a5481abedd6ece0ad7673601722c2ddbe48e9
    /* eslint-enable */

    return {
        props: {
            marketingCards,
            products,
            sellingPoint,
            testimonials,
<<<<<<< HEAD
            hero,
=======
>>>>>>> 799a5481abedd6ece0ad7673601722c2ddbe48e9
        },
    };
};
