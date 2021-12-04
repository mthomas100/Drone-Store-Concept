import { createContext, ReactNode, useContext, useState } from "react";

type LayoutContext = {
    mobileNavOpen: boolean;
    setMobileNavOpen: (open: boolean) => void;
    toggleMobileNav: () => void;
    closeMobileNav: () => void;
    openMobileNav: () => void;
    navDesktopWidth: number;
    setNavDesktopWidth: (width: number) => void;
};

const LocalStateContext = createContext<LayoutContext>(null);
const LocalStateProvider = LocalStateContext.Provider;

const LayoutStateProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    // NAV MOBILE RELATED
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    function toggleMobileNav() {
        setMobileNavOpen(!mobileNavOpen);
    }

    function closeMobileNav() {
        setMobileNavOpen(false);
    }

    function openMobileNav() {
        setMobileNavOpen(true);
    }

    // NAV DESKTOP RELATED
    const [navDesktopWidth, setNavDesktopWidth] = useState(0);

    //BREAKPOINT RELATED

    return (
        <LocalStateProvider
            value={{
                mobileNavOpen,
                setMobileNavOpen,
                toggleMobileNav,
                closeMobileNav,
                openMobileNav,
                navDesktopWidth,
                setNavDesktopWidth,
            }}
        >
            {children}
        </LocalStateProvider>
    );
};

function useLayout(): LayoutContext | null {
    // We use a consumer here to access the local state
    const all = useContext(LocalStateContext);
    return all;
}
export { LayoutStateProvider, useLayout };
