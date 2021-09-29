type ContainerProps = {
    children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div
            className="min-h-screen flex flex-col mx-auto relative"
            style={{ maxWidth: "1000px" }}
        >
            {children}
        </div>
    );
};
