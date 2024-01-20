import "./styles/index.scss";
import { RouterMain } from "./routes/RouterMain/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <RouterMain />
      <ToastContainer autoClose={5 * 1000} theme="dark"/>
    </>
  )
}

export default App
