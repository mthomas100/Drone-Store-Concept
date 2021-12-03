import { Product } from "graphql/strapiTypes";
import SingleProduct from "@components/SingleProduct";
import { PRODUCTS_QUERY } from "graphql/queries";
import createApolloClient from "@services/graphql";

type SingleProductPageProps = {
    product: Product;
};

const SingleProductPage: React.FC<SingleProductPageProps> = ({ product }) => {
    return <SingleProduct product={product} />;
};

export default SingleProductPage;

// This function gets called at build time
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticPaths() {
    // Call an external API endpoint to get posts

    /* eslint-disable */
    const { data: { products }} = await createApolloClient.query({
        query: PRODUCTS_QUERY,
    });
    /* eslint-enable */

    // Get the paths we want to pre-render based on posts
    const paths = products.map(({ slug }: { slug: string }) => ({
        params: { slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

// This also gets called at build time

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps({
    params: { slug },
}: {
    params: { slug: string };
}) {
    /* eslint-disable */
    const { data: { products } } = await createApolloClient.query({
        query: PRODUCTS_QUERY,
        variables: {
            slug
        },
    });
    /* eslint-enable */

    const product = products[0];

    return {
        props: {
            product,
        },
    };
}
