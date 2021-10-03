import React from "react";
import Image from "next/image";
import { MarketingCards } from "generated/apolloComponents";

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    titleColor?: string;
    descriptionColor?: string;
};

const Card: React.FC<CardProps> = ({
    title,
    description,
    imageUrl,
    titleColor,
    descriptionColor,
}) => {
    return (
        <div className="text-md h-96 w-full relative bg-gray-500 flex-col justify-center">
            <div
                id="textContainer"
                className="absolute inset-0 z-10 w-3/4 mt-8 mx-auto text-center"
            >
                <div
                    className={`${titleColor} text-3xl font-semibold tracking-wider mb-4 whitespace-nowrap`}
                >
                    {title}
                </div>
                <div
                    className={`${descriptionColor} text-gray-500 text-lg font-extralight tracking-wide`}
                >
                    {description}
                </div>
            </div>

            <Image
                src={imageUrl}
                alt="drone picture]"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 70%"
                className="absolute inset-0 z-0"
                id="image"
            />
        </div>
    );
};

type CardsProps = {
    marketingCards: MarketingCards[];
};

export const Cards: React.FC<CardsProps> = ({ marketingCards }) => {
    console.log(marketingCards);
    return (
        <div className="flex-1 container max-w-screen-lg mx-auto py-3 bg-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {marketingCards.map((marketingCard) => (
                    <Card
                        key={marketingCard.id}
                        title={marketingCard.header}
                        titleColor={marketingCard.headerColor}
                        description={marketingCard.description}
                        descriptionColor={marketingCard.descriptionColor}
                        imageUrl={marketingCard.image.url}
                    />
                ))}
            </div>
        </div>
    );
};
