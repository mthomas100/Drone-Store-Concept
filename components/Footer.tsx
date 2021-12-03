import React from "react";
import Image from "next/image";

const links = {
    explore: ["Our Services", "Specification", "Refund", "Playlist"],
    account: ["My Account", "Top Benefit", "How-to Tutorials", "Moment"],
    office: [
        "+021 2208 1996",
        "SCBD, Jakarta",
        "No. 2 (Autodrone)",
        "support@autodrone.id",
    ],
};

type FooterColumnProps = {
    category: string;
    links: Array<string>;
};

const FooterBrand: React.FC = () => {
    return (
        <div className="flex flex-col items-start px-2 gap-4 w-56 mb-8">
            <div
                id="top"
                className="flex flex-row justify-between items-center text-gray-100 min-w-full pr-2"
            >
                <div className="text-md h-12 w-16 relative">
                    <Image
                        src="/icons/drone2.svg"
                        alt="drone logo"
                        layout="fill"
                    />
                </div>
                <div className="text-2xl font-semibold tracking-wider">
                    autodrone
                </div>
            </div>
            <div id="bottom">
                <div className="text-gray-200 text-sm font-light tracking-wide">
                    Look up the sky and beautiful world easily
                </div>
            </div>
        </div>
    );
};

const FooterColumn: React.FC<FooterColumnProps> = ({ category, links }) => {
    return (
        <div className="text-sm tracking-wide px-2 mt-4 w-full justify-self-stretch">
            <div className="mb-6 font-semibold text-gray-100">{category}</div>
            <ul className="leading-10 font-light text-gray-200">
                {links.map((link) => (
                    <li key={link} className="cursor-pointer">
                        {/* <Link href="">{link}</Link> */}
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const Footer: React.FC = () => {
    return (
        <div className="bg-black py-12 flex flex-row flex-wrap items-start justify-center gap-4 px-2">
            <FooterBrand />
            <div className="flex flex-row flex-wrap w-56 sm:w-auto sm:flex-nowrap items-stretch ">
                <FooterColumn category="Explore" links={links.explore} />
                <FooterColumn category="Account" links={links.account} />
                <FooterColumn category="Office" links={links.office} />
            </div>
        </div>
    );
};
