import { toast } from "react-toastify";
import kenzieHub from "../../../assets/kenzieHub.svg";
import { API } from "../../../services/API";
import { RegisterForm } from "../../forms";
import { Link } from "react-router-dom";

export const RegisterSection = ({ navigate }) => {
  const onSubmit = (payload) => {
    userRegister(payload);
  };

  const userRegister = async (payload) => {
    try {
      const { data } = await API.post("/users", payload);
      console.log(data);
        toast.success("E-mail cadastrado com sucesso.");
        navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Email already exists") {
        toast.error("E-mail já cadastrado.");
      }
    };
  };

    return (
      <>
        <section className="mainContainer">
          <div className="topContainer">
            <img src={kenzieHub} alt="Kenzie hub"></img>
            <Link className="headlineBold buttonDisableMin" to="/">Voltar</Link>
          </div>
          <div className="standartContainer">
            <h1 className="title1">Crie sua conta</h1>
            <RegisterForm onSubmit={onSubmit} />
          </div>
        </section>
      </>
    );
  }; 