import kenzieHub from "../../assets/kenzieHub.svg";

export const Header = ({ navigate, userLogout }) => {
  return (
    <>
      <header className="headerConteiner">
        <img src={kenzieHub} alt="Kenzie hub"></img>
        <button
          className="headlineBold buttonDisableMin"
          onClick={userLogout}
        >
          Sair
        </button>
      </header>
    </>
  )
}