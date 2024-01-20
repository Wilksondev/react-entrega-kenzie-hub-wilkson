import { toast } from "react-toastify";
import kenzieHub from "../../../assets/kenzieHub.svg";
import { API } from "../../../services/API";
import { LoginForm } from "../../forms";

export const LoginSection = ({ navigate, setUser }) => {
    const onSubmit = (payload) => {
        userLogin(payload);
    };

      const userLogin = async (payload) => {
        try {
          const { data } = await API.post("/sessions", payload);
          setUser(data.user);
          navigate("/dashboard");
          toast.success("Login feito com sucesso.");
        } catch (error) {
          console.log(error);
          if (error.response.data.message === "Incorrect email / password combination") {
            toast.error("E-mail ou senha incorretos!");
          } if (error.response.data.message === "User not found") {
            toast.error("Usuário não encontrado. Por favor realize seu cadastro.");
          }
        }
      };

    return (
        <>
            <section className="mainContainer">
                <img src={kenzieHub} alt="Kenzie hub"></img>
                <div className="standartContainer">
                    <h1 className="title1">Login</h1>
                    <LoginForm onSubmit={onSubmit} navigate={navigate} />
                </div>
                <p
                    className="headlineBold"
                >
                    Ainda não possui uma conta?
                </p>
                <button
                    className="buttonDisable typoButton"
                    type="submit"
                    onClick={() => navigate("/register")}
                >
                    Cadastre-se
                </button>
            </section>
        </>
    );
};