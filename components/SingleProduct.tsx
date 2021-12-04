import { Product } from "graphql/types";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useMeasure, useWindowSize } from "react-use";

type SingleProductProps = {
    product: Product;
};

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
    const [detailsRef, { width: detailsWidth }] = useMeasure();
    const { width: windowWidth } = useWindowSize();
    const imageRef = useRef(null);

    useEffect(() => {
        console.log(imageRef.current.getBoundingClientRect().left);
    }, [windowWidth]);
    return (
        <>
            <section className="text-gray-700 body-font overflow-hidden bg-white min-h-screen">
                <div className="container px-5 py-12 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
                        <div
                            className="block w-full rounded border-gray-200"
                            ref={imageRef}
                        >
                            <Image
                                src={product.image.url}
                                alt={product.name}
                                width={detailsWidth}
                                height={detailsWidth * 0.75}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className="w-full lg:py-6 mt-6 lg:mt-0"
                            ref={detailsRef}
                        >
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {product.name}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">
                                        4 Reviews
                                    </span>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                {product.description}
                            </p>
                            <ul className="mt-5 text-lg font-thin">
                                <li className="mt-4">4K Camera Resolution</li>
                                <li className="mt-4">2 TB Storage</li>
                                <li className="mt-4">20 m/s Speed</li>
                                <li className="mt-4">5000 mAh Battery</li>
                            </ul>
                            <div className="mt-5 title-font font-medium text-2xl text-gray-900">
                                $4,500
                            </div>
                            <div className="mt-10 md:mt-14 button indigo text-center">
                                Order it Now
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
