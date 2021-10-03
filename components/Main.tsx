import React from "react";
import Image from "next/image";

export const Main: React.FC = () => {
    return (
        <div className="text-center font-light py-20 bg-black">
            <div className="mx-auto flex flex-col justify-between items-center px-8 gap-y-4 w-full">
                <h1 className="text-gray-100 text-3xl mb-2">
                    Introducing Drone Light
                </h1>
                <p className="text-lg text-gray-400 mb-3 max-w-[5rem]">
                    Look up the sky and beautiful world with simple navigation.
                    Just record and get a lot memories to share, lightly and
                    fast like a lightning
                </p>
                <div className="bg-indigo-700 w-auto rounded-full py-2 px-8 text-gray-100 tracking-wider font-semibold uppercase text-xs bold ">
                    Get Now
                </div>
                <div
                    id="mainImage"
                    className="text-md min-h-[16rem] sm:min-w-[24rem] min-w-full relative "
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
        </div>
    );
};
