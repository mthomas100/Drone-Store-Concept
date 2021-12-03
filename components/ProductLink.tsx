import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Product } from "graphql/strapiTypes";

type ProductProps = {
    children: React.ReactNode;
    product: Product;
};

const ProductLink: React.FC<ProductProps> = ({ children, product }) => {
    const slug = product.slug;
    return (
        <Link
            href={{
                pathname: "/product/[slug]",
                query: { slug },
            }}
        >
            <a>{children}</a>
        </Link>
    );
};

export default ProductLink;
