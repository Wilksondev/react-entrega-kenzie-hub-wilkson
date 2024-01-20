import kenzieHub from "../../assets/kenzieHub.svg";

export const Header = () => {
  return (
    <>
      <header className="headerConteiner">
        <img src={kenzieHub} alt="Kenzie hub"></img>
        <button className="headlineBold buttonDisableMin" >
          Sair
        </button>
      </header>
    </>
  )
}