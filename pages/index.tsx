import React, { useEffect, useState } from "react";

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

const Home: React.FC = () => {
    return (
        <Container>
            {/* <MobileNav /> */}
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
