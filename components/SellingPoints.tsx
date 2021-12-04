import React from "react";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { ComponentComponentsSpecification, SellingPoint } from "graphql/types";
// import getSmallCloudinary from "utils/getSmallCloudinary";

type SpecificationProps = {
    specifications: ComponentComponentsSpecification[];
    index: number;
};

const Specifications: React.FC<SpecificationProps> = ({
    specifications,
    index,
}) => {
    const { width: w } = useWindowSize();

    return (
        <div className="mb-6">
            <div
                className={`flex flex-col h-full gap-y-2 ${
                    w >= 300 ? "mx-6" : "mx-2"
                } lg:mx-2 sm:min-w-[6rem] items-start justify-center text-center`}
            >
                <div className="text-2xl font-semibold w-full nowrap overflow-ellipsis">
                    {specifications[index].spec}
                </div>
                <div className="text-sm font-light min-w-[6rem] max-w-[6rem] ">
                    {specifications[index].description}
                </div>
            </div>
        </div>
    );
};

type SellingPointsProps = {
    sellingPoint: SellingPoint;
};

export const SellingPoints: React.FC<SellingPointsProps> = ({
    sellingPoint,
}) => {
    return (
        <div
            id="sellingPointsWrapper"
            className="flex justify-center h-full px-2 sm:px-10"
            style={{ backgroundColor: "#F7F8FA" }}
        >
            <div
                className="flex flex-row flex-wrap items-center w-full text-left py-8 gap-6 h-full"
                style={{ height: "100%" }}
            >
                <div
                    id="imageWrapper"
                    className="min-h-[12rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] text-md w-full sm:min-w-[20rem] max-w-[20rem] relative mb-12 mx-auto"
                >
                    <Image
                        src={sellingPoint.image.url}
                        alt="drone logo"
                        layout="fill"
                        objectFit="contain"
                        className="text-gray-100 min-h-full"
                        // placeholder="blur"
                        // blurDataURL={getSmallCloudinary(sellingPoint.image.url)}
                    />
                </div>
                <div className="max-w-full sm:max-w-[60%] mx-auto px-6 text-center">
                    <div className="text-3xl font-semibold tracking-wider w-auto">
                        {sellingPoint.header}
                    </div>
                    <div className="text-lg leading-loose font-extralight w-auto max-w-[24rem] mx-auto py-8">
                        {sellingPoint.description}
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="flex flex-row justify-between ">
                            {sellingPoint.specifications.map((_, i) => {
                                if (i >= 0 && i < 2) {
                                    return (
                                        <Specifications
                                            key={
                                                sellingPoint.specifications[i]
                                                    ._id
                                            }
                                            specifications={
                                                sellingPoint.specifications
                                            }
                                            index={i}
                                        />
                                    );
                                }
                            })}
                        </div>
                        <div className="flex flex-row justify-between ">
                            {sellingPoint.specifications.map((_, i) => {
                                if (i >= 2 && i < 4) {
                                    return (
                                        <Specifications
                                            key={
                                                sellingPoint.specifications[i]
                                                    ._id
                                            }
                                            specifications={
                                                sellingPoint.specifications
                                            }
                                            index={i}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
