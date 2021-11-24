type PageProps = {
    children: React.ReactNode;
};

export const Page: React.FC<PageProps> = ({ children }) => (
    <div className="bg-black min-w-[230px]">{children}</div>
);
