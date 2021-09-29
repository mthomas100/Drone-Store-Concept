import React from "react";
import Image from "next/image";

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
                alt="drone flying on beach"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 70%"
                className="absolute inset-0 z-0"
                id="image"
            />
        </div>
    );
};

export const Cards: React.FC = () => {
    return (
        <div className="flex-1 container max-w-screen-lg mx-auto py-3 bg-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Card
                    title="Ultra Light"
                    titleColor="text-gray-900"
                    description="Drone move faster with weighing component under 200 g"
                    descriptionColor="text-gray-500"
                    imageUrl="/images/beachDrone.png"
                />
                <Card
                    title="Best Resolution"
                    titleColor="text-gray-100"
                    description="Take a beautiful view with best camera
                    up to 4K Camera Resolution"
                    descriptionColor="text-gray-100"
                    imageUrl="/images/boat.png"
                />
            </div>
        </div>
    );
};
