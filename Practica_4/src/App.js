import "./App.css";
import { Login } from "./Login";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <>
      {!login && <button onClick={handleLogin}>Iniciar sesion</button>}
      {login && (
        <div>
          <button onClick={handleLogin}>Cerrar sesion </button> <Login />
        </div>
      )}
    </>
  );
}

export default App;
