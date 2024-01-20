export const UserSection = ({ user }) => {
    return (
        <>
            <section className="userContainer">
                <h1 className="title1">Olá, {user?.name}</h1>
                <p className="headline">{user?.course_module}</p>
            </section>
        </>
    );
};