import { Header } from "../header";

export const DefaultTemplate = ({ children, navigate }) => {
    return (
        <>
            <Header navigate={navigate} />
            {children}
        </>
    );
};