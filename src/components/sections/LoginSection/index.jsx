import { toast } from "react-toastify";
import kenzieHub from "../../../assets/kenzieHub.svg";
import { API } from "../../../services/API";
import { LoginForm } from "../../forms";
import { Link } from "react-router-dom";

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
      localStorage.setItem("@TOKEN", JSON.stringify(data.token));
    } catch (error) {
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
          <p
            className="headlineBold"
          >
            Ainda não possui uma conta?
          </p>
          <Link
            className="buttonDisable typoButton"
            to="/register"
          >
            Cadastre-se
          </Link>
        </div>
      </section>
    </>
  );
};