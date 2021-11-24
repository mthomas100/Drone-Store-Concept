import React, { useEffect } from "react";
import { useLayout } from "../lib/layoutState";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose as Close } from "react-icons/ai";
import styled from "styled-components";
import { useData } from "lib/dataState";
import { useWindowSize } from "react-use";

const MobileNavStyles = styled(motion.div)`
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 101%;
    height: 101%;
    background-color: black;
`;

export const MobileNav: React.FC = () => {
    const { mobileNavOpen, closeMobileNav, navDesktopWidth } = useLayout();
    const { links } = useData();
    const window = useWindowSize();

    useEffect(() => {
        if (window.width > navDesktopWidth) {
            closeMobileNav();
        }
    }, [window]);

    return (
        <AnimatePresence>
            {mobileNavOpen && (
                <MobileNavStyles
                    initial={{ transform: "translateX(100%)" }}
                    animate={{ transform: "translateX(0%)" }}
                    exit={{ transform: "translateX(100%)" }}
                    transition={{
                        type: "spring",
                        bounce: 0.25,
                    }}
                >
                    <AnimatePresence>
                        {mobileNavOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    delay: 0.5,
                                }}
                            >
                                <div className="flex flex-col justify-center gap-4 items-center h-screen w-screen text-gray-100 text-4xl">
                                    <Close
                                        onClick={closeMobileNav}
                                        className=""
                                    />
                                    {links.map((link, i) => (
                                        <div key={link}>{links[i]}</div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </MobileNavStyles>
            )}
        </AnimatePresence>
    );
};
