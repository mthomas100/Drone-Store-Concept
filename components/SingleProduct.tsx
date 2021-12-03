import { Product } from "graphql/strapiTypes";
import Image from "next/image";

type SingleProductProps = {
    product: Product;
};

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
    return (
        <div className="bg-white h-screen">
            {/* tailwind flexbox two columns. picture on left hand side and info on the right hand side */}
            <div className="pt-20 px-10 flex justify-center">
                <div className="w-1/2">
                    <Image
                        src={product.image.url}
                        alt={product.image.alt}
                        layout="responsive"
                        width={200}
                        height={200}
                        objectFit="cover"
                    />
                </div>
                <div className="w-1/2 px-10">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="mt-5 text-3xl">$4,500</div>
                    <div className="mt-10 font-bold">Drone Features:</div>
                    <ul className="mt-5 text-xl font-thin">
                        <li className="mt-4">4K Camera Resolution</li>
                        <li className="mt-4">2 TB Storage</li>
                        <li className="mt-4">20 m/s Speed</li>
                        <li className="mt-4">5000 mAh Battery</li>
                    </ul>
                    <div className="button indigo mt-10 text-center">
                        Order it Now
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
