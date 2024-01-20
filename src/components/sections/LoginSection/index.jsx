import kenzieHub from "../../../assets/kenzieHub.svg";
import { LoginForm } from "../../forms";

export const LoginSection = ( navigate ) => {
    const onSubmit = (e) => {
        console.log(e);
    };
    
    return (
        <>
            <section className="mainContainer">
                <img src={kenzieHub} alt="Kenzie hub"></img>
                <div className="standartContainer">
                    <h1 className="title1">Login</h1>
                    <LoginForm onSubmit={onSubmit} navigate={navigate}/> 
                </div>
            </section>
        </>
    );
};