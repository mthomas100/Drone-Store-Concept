import React, { useEffect } from "react";
import Image from "next/image";
import { HiOutlineSearch as Search } from "react-icons/hi";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { useWindowSize, useMeasure } from "react-use";
import { useLayout } from "lib/layoutState";
import { useData } from "lib/dataState";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const DroneIcon: React.FC = () => (
    <div
        id="iconWrapper"
        className="text-md min-w-[4rem] relative min-h-full cursor-pointer"
    >
        <Image
            src="/icons/drone2.svg"
            alt="drone logo"
            layout="fill"
            className="h-full"
        />
    </div>
);

export const NavDesktop: React.FC = () => {
    const { setNavDesktopWidth } = useLayout();
    const { links } = useData();
    const [navRef, { width: navWidth }] = useMeasure<HTMLDivElement>();

    useEffect(() => {
        setNavDesktopWidth(navWidth + 20);
    });

    return (
        <>
            <div
                id="nav"
                ref={navRef}
                className="flex justify-between gap-5 sm:gap-7 md:gap-14 lg:gap-20"
            >
                <Link href="/">
                    <a>
                        <DroneIcon />
                    </a>
                </Link>
                {links.map((link) => (
                    <div key={uuidv4()} className="text-md cursor-pointer">
                        {link}
                    </div>
                ))}
                <Search className="text-2xl align-self-center h-auto cursor-pointer" />
            </div>
        </>
    );
};

export const NavMobile: React.FC = () => {
    const { openMobileNav } = useLayout();
    return (
        <div className="flex justify-between w-full mx-4">
            <Link href="/">
                <a>
                    <DroneIcon />
                </a>
            </Link>
            <div onClick={openMobileNav}>
                <Hamburger className="text-2xl" />
            </div>
        </div>
    );
};

export const Header: React.FC = () => {
    const windowSize = useWindowSize();
    const { navDesktopWidth } = useLayout();

    // const navDesktopWidthIsGreaterThanWindowWidth =
    //     navDesktopWidth > windowSize.width;

    // console.log({
    //     windowWidth: windowSize.width,
    //     navDesktopWidth,
    //     navDesktopWidthIsGreaterThanWindowWidth,
    // });

    return (
        <div
            id="navWrapper"
            className="text-gray-100 flex justify-center mx-auto py-4 min-w-full"
        >
            {navDesktopWidth > windowSize.width ? (
                <NavMobile />
            ) : (
                <NavDesktop />
            )}
        </div>
    );
};
