import { DefaultTemplate, UserSection, ContentSection } from "../../components";

export const DashboardPage = ({ navigate, user }) => {

    return (
        <>
            <DefaultTemplate navigate={navigate}>
                <UserSection user={user} />
                <ContentSection />
            </DefaultTemplate>
        </>
    );
};