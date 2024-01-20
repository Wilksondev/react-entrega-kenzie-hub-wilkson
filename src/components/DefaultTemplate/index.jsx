import { Header } from "../header";

export const DefaultTemplate = ({children}) => {
    return (
        <>
        <Header />
        {children}
        </>
    );
};