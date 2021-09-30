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
import { useQuery } from "@apollo/client";
// import createApolloClient from "@services/graphql";

export const MARKETING_CARDS_QUERY = gql`
    query MARKETING_CARDS_QUERY {
        marketingCards {
            header
            description
            image {
                url
            }
        }
    }
`;

const Home: React.FC = (props) => {
    const { data, error, loading } = useQuery(MARKETING_CARDS_QUERY);

    console.log({ data, error, loading });

    if (loading) return <p>Loading..</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

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

// export async function getStaticProps()  {}

// export const getStaticProps: GetStaticProps = async () => {
//     console.log("getStaticProps");
//     const { data: marketingCardsData } = await createApolloClient.query({
//         query: gql`
//             query ALL_MARKETING_CARDS_QUERY {
//                 marketingCards {
//                     header
//                     description
//                     image {
//                         url
//                     }
//                 }
//             }
//         `,
//     });

//     return {
//         props: {
//             marketingCards: marketingCardsData || {},
//         },
//     };
// };
