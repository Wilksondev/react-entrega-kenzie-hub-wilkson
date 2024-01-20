import { Header } from "../header";

export const DefaultTemplate = ({ children, navigate, userLogout }) => {
    return (
        <>
            <Header navigate={navigate} userLogout={userLogout} />
            {children}
        </>
    );
};