import { MutationUpdateProductArgs, Product } from "graphql/strapiTypes";
import Image from "next/image";

type CardProps = {
    product: Product;
    buttonColor: string;
};

const Card: React.FC<CardProps> = ({ product, buttonColor }) => {
    return (
        <div className="rounded-md flex flex-col gap-4 min-w-[20rem] max-w-[20rem]  p-8  bg-white border-2 border-gray-200 text-center">
            <div
                id="image"
                className="min-h-[10rem] w-full relative flex flex-1"
            >
                <Image
                    src={product.image.url}
                    alt="drone logo"
                    layout="fill"
                    objectFit="cover"
                    className="text-gray-100 rounded-2xl"
                />
            </div>

            <h3 className="flex-1 font-semibold text-lg leading-tight sm:leading-normal">
                {product.name}
            </h3>

            <div className="flex flex-col text-md items-center justify-self-start w-full h-full leading-loose tracking-wide">
                {product.description}
            </div>
            <div className={`button ${buttonColor}`}>Get Now</div>
        </div>
    );
};

type NewProductsProps = {
    products: Product[];
};

export const NewProducts: React.FC<NewProductsProps> = ({ products }) => {
    return (
        <>
            <div id="info" className="bg-white pt-12">
                <div
                    id="header"
                    className="flex flex-col items-center text-center mb-4"
                >
                    <div
                        id="title"
                        className="text-2xl font-semibold tracking-wide"
                    >
                        New Products
                    </div>
                    <div
                        id="description"
                        className="mt-6 text-md font-light text-gray-500 tracking-wide"
                    >
                        <div>New innovation, best quality than before.</div>
                        <div>
                            Make every moment flying operation become
                            unforgettable.
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="bg-white flex flex-col gap-6 sm:flex-row justify-between items-center sm:items-stretch px-5 py-10 overflow-x-scroll">
                    {products.map((product, i) => {
                        return (
                            <Card
                                key={product.id}
                                product={product}
                                buttonColor={i % 2 === 0 ? "indigo" : "green"}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
