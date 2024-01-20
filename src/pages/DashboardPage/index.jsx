import { DefaultTemplate, UserSection, ContentSection } from "../../components";

export const DashboardPage = ({ navigate, user, userLogout }) => {

    return (
        <>
            <DefaultTemplate navigate={navigate} userLogout={userLogout} >
                <UserSection user={user} />
                <ContentSection />
            </DefaultTemplate>
        </>
    );
};