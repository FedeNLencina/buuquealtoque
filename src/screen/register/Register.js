import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Register(props) {
    const navigate = useNavigate();
    const onBackClick = (e) => {
      e.preventDefault();
      navigate("/login");
    };
  
    return (
      <div>
        <label>
            Nombre:
            <input placeholder="nombre" />
        </label>
        <label>
            Apellido:
            <input placeholder="apellido" />
        </label>
        <label>
            DNI:
            <input placeholder="DNI" />
        </label>
        <label>
            Domicilio:
            <input placeholder="domicilio" />
        </label>
        <label>
            Fecha de nacimiento:
            <input type="date" name="fecha de nacimiento" />
        </label>
        <label>
            Domicilio:
            <input placeholder="domicilio" />
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Medio de pago</option>
          <option value="Tarjeta">Tarjeta de credito</option>
          <option value="Mercado Pago">Mercado pago</option>
          <option value="Cuenta Bancaria">Cuenta bancaria</option>
        </select>
        <label>
            Email:
            <input placeholder="email" />
        </label>
        <button onClick={onBackClick}>
          <p>Registrar</p>
        </button>
        <Link to={'/'}><h4>Sos usuario de BuqueAlToque? Ingresa ahora!</h4></Link>
      </div>
    );
}
