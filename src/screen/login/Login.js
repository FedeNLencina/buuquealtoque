import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const onBackClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div>
      <input placeholder="usuario" />
      <input placeholder="contraseña" />
      <button onClick={onBackClick}>
        <p>Ingresar</p>
      </button>
    </div>
  );
}
