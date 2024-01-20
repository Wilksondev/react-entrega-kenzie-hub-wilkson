import kenzieHub from "../../../assets/kenzieHub.svg";
import { RegisterForm } from "../../forms";

export const RegisterSection = ({ navigate }) => {
    const onSubmit = (e) => {
        console.log(e);
    };
    
      const userRegister = async (payload) => {
        try {
          const { data } = await api.post("/users", payload);
          navigate("/user");
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <>
            <section className="mainContainer">
                <div className="topContainer">
                    <img src={kenzieHub} alt="Kenzie hub"></img>
                    <button className="headlineBold buttonDisableMin" type="submit" onClick={() => navigate("/")}>Voltar</button>
                </div>
                <div className="standartContainer">
                    <h1 className="title1">Login</h1>
                    <RegisterForm onSubmit={onSubmit}/>
                </div>
            </section>
        </>
    );
}; 