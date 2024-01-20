import { RegisterSection } from "../../components";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const navigate = useNavigate();

    return (
    <>
     <RegisterSection navigate={navigate} />
    </>
    )
};