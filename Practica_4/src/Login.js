import { useState } from "react";
import { TaskManager } from "./TaskManager";

export const Login = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    alert(
      `Usuario ingresado exitosamente. Su nombre de usuario es: ${username}`
    );
  };

  const handleClick = () => {
    if (username.includes("o" || "O")) {
      alert("Usuario inválido para registrarse");
    } else {
      handleLogin(username);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value.includes("o" || "O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };
  return (
    <>
      <label>Ingrese su nombre de usuario</label>
      <input value={username} onChange={handleUsername} />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Registrarse
      </button>
      <p>El nombre de usuario con el que se va a registrar es: {username}</p>
      <TaskManager />
    </>
  );
};
