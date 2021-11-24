import React from "react";
import Image from "next/image";
import { Hero } from "graphql/strapiTypes";

type MainProps = {
    hero: Hero;
};

export const Main: React.FC<MainProps> = ({ hero }) => {
    
    return (
        <div className="text-center font-light px-10 py-20 bg-black">
            <div id="info" className="w-full sm:w-[65%] mx-auto">
                <h1 className="text-gray-100 text-3xl">{hero.header}</h1>

                <div className="text-lg text-gray-400 my-8 font-light">
                    {hero.description}
                </div>

                <div className="button bg-indigo-600 text-xs mx-auto w-full sm:w-[60%] font-semibold  ">
                    {hero.buttonText}
                </div>
            </div>

            <div
                id="image"
                className="text-md min-h-[10rem] sm:min-h-[24rem]  min-w-full relative "
            >
                <Image
                    src="/images/Hero Image 1.png"
                    alt="drone logo"
                    layout="fill"
                    objectFit="contain"
                    className="text-gray-100"
                />
            </div>
        </div>
    );
};
