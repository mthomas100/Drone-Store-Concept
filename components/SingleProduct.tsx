import { Product } from "graphql/strapiTypes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";

type SingleProductProps = {
    product: Product;
};

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
    const windowSize = useWindowSize();
    const imageRef = useRef(null);
    const [imageLeftOffset, setImageLeftOffset] = useState(0);

    useEffect(() => {
        setImageLeftOffset(imageRef.current.getBoundingClientRect().left);
        console.log(imageLeftOffset);
    }, [windowSize]);

    //if top of description is below the bottom of picture, then picture must be full width
    return (
        <div className="bg-white h-screen px-6 md:px-10 relative">
            {/* tailwind flexbox two columns. picture on left hand side and info on the right hand side */}
            <div className="pt-10 flex flex-wrap item justify-center">
                <div
                    className={`mt-10 mr-10 w-full md:w-[500px] h-[410px] relative `}
                    ref={imageRef}
                >
                    <Image
                        src={product.image.url}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md md:rounded-none"
                    />
                </div>
                <div className="mt-10 w-[15rem]">
                    <h1 className="text-xl font-bold tracking-wider">
                        {product.name}
                    </h1>
                    <div className="mt-5 text-3xl">$4,500</div>
                    <div className="mt-10 font-bold text-base">
                        Drone Features:
                    </div>
                    <ul className="mt-5 text-lg font-thin">
                        <li className="mt-4">4K Camera Resolution</li>
                        <li className="mt-4">2 TB Storage</li>
                        <li className="mt-4">20 m/s Speed</li>
                        <li className="mt-4">5000 mAh Battery</li>
                    </ul>
                    <div className="button indigo mt-10 text-center">
                        Order it Now
                    </div>
                </div>
                <div className="py-10">
                    <h1 className="font-semibold text-base">Description</h1>
                    <p className="mt-5 text-lg font-thin leading-loose">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
