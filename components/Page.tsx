import { Container, MobileNav, Header } from "@components";
import Head from "next/head";

type PageProps = {
    children: React.ReactNode;
};

export const Page: React.FC<PageProps> = ({ children }) => (
    <>
        <Head>
            <title>Drone Store Concept</title>
        </Head>
        <div className="bg-black min-w-[230px]">
            <MobileNav />
            <Header />
            <Container>{children}</Container>
        </div>
    </>
);
