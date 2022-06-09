import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Booking() {
  const [acompañante, setAcompañante] = useState(null);
  const [tipoPasajero, setTipoPasajero] = useState(null);
  const [bodega, setBodega] = useState(null);
  const [freeshop, setFreeshop] = useState(null);
  const [registrado, setRegistrado] = useState(null);
  const [acompañado, setAcompañado] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [medioPago, setMedioPago] = useState(null);

  const reservaExitosa = (e) => {
    e.preventDefault();
    if (registrado === "false") {
      alert("Para realizar la reserva debe estar registrado");
      return;
    }
    if (tipoPasajero === "Niño") {
      alert("No se pueden realizar reservas menores de edad");
      return;
    }
    if (acompañado === "NoAcompañado") {
      alert(
        "La persona con discapacidad debe estar acompañada por alguien responsable"
      );
      return;
    }
    if (!cantidad || cantidad === "Cantidad de personas") {
      alert("Se deben seleccionar todos los campos");
      return;
    }
    if (cantidad && tipoPasajero === "Tipo acompañante") {
      alert("Se deben seleccionar todos los campos");
      return;
    }
    if (!tipoPasajero || tipoPasajero === "Tipo acompañante") {
      alert("Se deben seleccionar todos los campos");
      return;
    }
    if (!registrado) {
      alert("Se deben seleccionar todos los campos");
      return;
    }
    if (!medioPago) {
      alert("Se deben seleccionar todos los campos");
      return;
    }
    if (medioPago === "No registro pago") {
      alert("Se debe registrar el medio de pago antes de poder reservar un producto");
      return;
    }
    setTimeout(function () {
      alert(
        "Reserva exitosa. Se enviaron los detalles de la reserva y un archivo adjunto que contenga la tarjeta de embarque via mail."
      );
    }, 5000);
  };

  const reservaCancelada = (e) => {
    e.preventDefault();
    alert("Se ha cancelado la reserva");
  };

  const registrarAcompañante = (e) => {
    e.preventDefault();
    if (!acompañante) {
      alert("Ingrese un nombre valido");
    } else {
      alert("Se han registrados los acompañantes");
    }
  };

  const reservaBodega = (e) => {
    e.preventDefault();
    alert("Se ha realizado la reserva");
  };

  const reservaProductoFree = (e) => {
    e.preventDefault();
    alert("Se ha realizado la reserva");
  };

  return (
    <div>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(event) => setRegistrado(event.target.value)}
      >
        <option selected>Se encuentra registrado?</option>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
      <Link to={"/register"}>
        <h4>Si no se encuentra registrado, registrese ahora!</h4>
      </Link>

      <label>
        Es su primer compra? Registre sus acompañantes para sugerirselos en sus
        proximas reservas!
        <input
          onChange={(event) => setAcompañante(event.target.value)}
          placeholder="Ingrese el nombre"
        />
        <button onClick={registrarAcompañante}>
          <p>Registrar acompañantes</p>
        </button>
      </label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Agregar acompañantes anteriores a la reserva?</option>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(event) => setCantidad(event.target.value)}
      >
        <option selected value="Cantidad de personas">Cantidad de personas:</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(event) => setTipoPasajero(event.target.value)}
      >
        <option selected value="Tipo acompañante">Tipo de acompañante</option>
        <option value="Adulto">Adulto</option>
        <option value="Niño">Niño</option>
        <option value="Discapacitado">Discapacitado</option>
      </select>
      {tipoPasajero === "Discapacitado" ? (
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(event) => setAcompañado(event.target.value)}
        >
          <option selected>
            Se encuentra acompañado por un adulto responsable?
          </option>
          <option value="Acompañado">Si</option>
          <option value="NoAcompañado">No</option>
        </select>
      ) : (
        <></>
      )}
      <select class="form-select" aria-label="Default select example"
        onChange={(event) => setMedioPago(event.target.value)}>
        <option selected>Medio de pago</option>
        <option value="Tarjeta">Tarjeta de credito</option>
        <option value="Mercado Pago">Mercado pago</option>
        <option value="Cuenta Bancaria">Cuenta bancaria</option>
        <option value="No registro pago">Aun no registre mi cuenta</option>
      </select>

      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(event) => setBodega(event.target.value)}
      >
        <option selected>Desea reservar una bodega?</option>
        <option value="SiBodega">Si</option>
        <option value="No">No</option>
      </select>
      {bodega === "SiBodega" ? (
        <select class="form-select" aria-label="Default select example">
          <option selected>Medio de pago</option>
          <option value="Tarjeta">Tarjeta de credito</option>
          <option value="Mercado Pago">Mercado pago</option>
          <option value="Cuenta Bancaria">Cuenta bancaria</option>
          <option value="No registro">Aun no registre mi cuenta</option>
        </select>
      ) : (
        <></>
      )}
      {bodega === "SiBodega" ? (
        <button onClick={reservaBodega}>
          <p>Reservar Bodega</p>
        </button>
      ) : (
        <></>
      )}

      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(event) => setFreeshop(event.target.value)}
      >
        <option selected>Desea reservar una producto de freeshop?</option>
        <option value="SiFree">Si</option>
        <option value="No">No</option>
      </select>
      {freeshop === "SiFree" ? (
        <select class="form-select" aria-label="Default select example">
          <option selected>Medio de pago</option>
          <option value="Tarjeta">Tarjeta de credito</option>
          <option value="Mercado Pago">Mercado pago</option>
          <option value="Cuenta Bancaria">Cuenta bancaria</option>
          <option value="No registro">Aun no registre mi cuenta</option>
        </select>
      ) : (
        <></>
      )}
      {freeshop === "SiFree" ? (
        <button onClick={reservaProductoFree}>
          <p>Reservar producto Freeshop</p>
        </button>
      ) : (
        <></>
      )}

      <button onClick={reservaExitosa}>
        <p>Reservar</p>
      </button>

      <button onClick={reservaCancelada}>
        <p>Cancelar</p>
      </button>
    </div>
  );
}
