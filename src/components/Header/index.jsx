import { Link } from "react-router-dom";
import kenzieHub from "../../assets/kenzieHub.svg";

export const Header = ({ navigate, userLogout }) => {
  return (
    <>
      <header className="headerConteiner">
        <img src={kenzieHub} alt="Kenzie hub"></img>
        <Link
          className="headlineBold buttonDisableMin"
          onClick={userLogout}
          to="/"
        >
          Sair
        </Link>
      </header>
    </>
  )
}