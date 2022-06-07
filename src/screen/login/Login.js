import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

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
      <Link to={'/register'}><h4>No sos usuario de BuqueAlToque? Registrate ahora!</h4></Link>
    </div>
  );
}
