import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

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
    // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!const [cartOpen, setCartOpen] = useState(false);

    // NAV BAR RELATED
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

    // LAYOUT RELATED
    const [navDesktopWidth, setNavDesktopWidth] = useState(20);

    useEffect(() => {
        console.log({ mobileNavOpen });
    }, [mobileNavOpen]);

    useEffect(() => {
        console.log(navDesktopWidth);
    }, [navDesktopWidth]);

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

// Write a custom hook for accessing the cart local state

function useLayout(): LayoutContext | null {
    // We use a consumer here to access the local state
    const all = useContext(LocalStateContext);
    return all;
}
export { LayoutStateProvider, useLayout };
