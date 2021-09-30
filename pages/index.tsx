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

const Home: React.FC = (props) => {
    console.log(props);
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
    console.log("getStaticProps");
    const { data } = await createApolloClient.query({
        query: gql`
            query ALL_CATEGORIES_QUERY {
                marketingCards {
                    header
                    description
                    image {
                        url
                    }
                }
            }
        `,
    });

    return {
        props: {
            data,
        },
    };
};
