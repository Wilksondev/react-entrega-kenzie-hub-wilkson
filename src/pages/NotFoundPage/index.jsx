import style from "./style.module.scss";

export const NotFoundPage = () => {
    return (
    <>
    <main className={style.container}>
        <h1 className="title1">Error: 404</h1>
        <p className="paragraph">Não foi possível encontrar a página!</p>
    </main>
    </>
    );
};