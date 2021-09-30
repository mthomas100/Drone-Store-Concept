import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineSearch as Search } from "react-icons/hi";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { useWindowSize, useMeasure } from "react-use";
import { useLayout } from "lib/layoutState";
import { useData } from "lib/dataState";

const DroneIcon: React.FC = () => (
    <div id="iconWrapper" className="text-md min-w-[4rem] relative">
        <Image
            src="/icons/drone2.svg"
            alt="drone logo"
            layout="fill"
            className=""
        />
    </div>
);

export const NavDesktop: React.FC = () => {
    const { setNavDesktopWidth } = useLayout();
    const { links } = useData();
    const [navRef, { width: navWidth }] = useMeasure<HTMLDivElement>();
    setNavDesktopWidth(navWidth + 20);

    return (
        <>
            <div
                id="nav"
                ref={navRef}
                className="flex justify-between gap-5 sm:gap-7 md:gap-14 lg:gap-20"
            >
                <DroneIcon />
                {links.map((link) => (
                    <div key="link" className=" text-md">
                        {link}
                    </div>
                ))}
                <Search className="text-2xl align-self-center h-auto" />
            </div>
        </>
    );
};

export const NavMobile: React.FC = () => {
    const { openMobileNav } = useLayout();
    return (
        <div className="flex justify-between w-full mx-4">
            <DroneIcon />
            <div onClick={openMobileNav}>
                <Hamburger className="text-2xl" />
            </div>
        </div>
    );
};

export const Header: React.FC = () => {
    const windowSize = useWindowSize();
    const { navDesktopWidth, setNavDesktopWidth } = useLayout();

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
