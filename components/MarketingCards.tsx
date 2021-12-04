import React from "react";
import Image from "next/image";
import { MarketingCard as MarketingCardTypes } from "graphql/types";
import getSmallCloudinary from "utils/getSmallCloudinary";

type CardProps = {
    marketingCard: MarketingCardTypes;
};

const MarketingCard: React.FC<CardProps> = ({ marketingCard }) => {
    return (
        <div className="text-md h-96 w-full relative bg-gray-500 flex-col justify-center">
            <div
                id="textContainer"
                className="absolute inset-0 z-10 w-3/4 mt-8 mx-auto text-center"
            >
                <div
                    className={`${marketingCard.headerDarkness.darkness} text-3xl font-semibold tracking-wider mb-4 whitespace-nowrap`}
                >
                    {marketingCard.header}
                </div>
                <div
                    className={`${marketingCard.descriptionDarkness.darkness} text-lg font-light tracking-wider`}
                >
                    {marketingCard.description}
                </div>
            </div>

            <Image
                src={marketingCard.image.url}
                alt="drone picture]"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 70%"
                className="absolute inset-0 z-0"
                id="image"
                priority
                placeholder="blur"
                blurDataURL={getSmallCloudinary(marketingCard.image.url)}
            />
        </div>
    );
};

type CardsProps = {
    marketingCards: MarketingCardTypes[];
};

export const MarketingCards: React.FC<CardsProps> = ({ marketingCards }) => {
    return (
        <div className="flex-1 container max-w-screen-lg mx-auto py-3 bg-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {marketingCards.map((marketingCard) => (
                    <MarketingCard
                        key={marketingCard.id}
                        marketingCard={marketingCard}
                    />
                ))}
            </div>
        </div>
    );
};
