import { createContext, ReactNode, useContext } from "react";

type DataContext = {
    links: string[];
};

const LocalStateContext = createContext<DataContext>(null);
const LocalStateProvider = LocalStateContext.Provider;

const DataStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!const [cartOpen, setCartOpen] = useState(false);

    const links = ["Home", "Gallery", "Products", "Support", "Search"];

    return (
        <LocalStateProvider
            value={{
                links,
            }}
        >
            {children}
        </LocalStateProvider>
    );
};

// Write a custom hook for accessing the cart local state

function useData(): DataContext | null {
    // We use a consumer here to access the local state
    const all = useContext(LocalStateContext);
    return all;
}
export { DataStateProvider, useData };
