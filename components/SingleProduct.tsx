import { Product } from "graphql/strapiTypes";
import Image from "next/image";
import { useMeasure } from "react-use";

type SingleProductProps = {
    product: Product;
};

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
    const [detailsRef, { height: detailsHeight }] = useMeasure();
    console.log(detailsHeight);
    return (
        <div className="bg-white h-screen px-6 md:px-10">
            {/* tailwind flexbox two columns. picture on left hand side and info on the right hand side */}
            <div className="pt-10  grid grid-cols-1 md:grid-cols-2 justify-center">
                <div
                    className={`mt-10 relative w-full min-h-[20rem] md:h-[${
                        detailsHeight || 0
                    }px]`}
                >
                    <Image
                        src={product.image.url}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md md:rounded-none"
                    />
                </div>
                <div className="mt-10 md:px-10" ref={detailsRef}>
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
            <div className="py-10">
                <h1 className="font-semibold">Description</h1>
                <p className="mt-5 text-base font-thin leading-loose">
                    {product.description}
                </p>
            </div>
        </div>
    );
};

export default SingleProduct;
