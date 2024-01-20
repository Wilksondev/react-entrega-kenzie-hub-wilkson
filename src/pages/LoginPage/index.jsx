import { LoginSection } from "../../components"; 
import { useNavigate } from "react-router-dom"; 

export const LoginPage = () => {
    const navigate = useNavigate();

    return (
    <>
     <LoginSection navigate={navigate}/>
    </>
    )
}; 