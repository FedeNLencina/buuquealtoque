import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./booking.css";

export default function Booking() {
  const [acompañante, setAcompañante] = useState(null);
  const [tipoPasajero, setTipoPasajero] = useState(null);
  const [registrado, setRegistrado] = useState(null);
  const [acompañado, setAcompañado] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [medioPago, setMedioPago] = useState(null);
  const [reservado, setReservado] = useState(false);

  const reservaExitosa = (e) => {
    e.preventDefault();
    if (registrado === "false") {
      alert("Para realizar la reserva debe estar registrado");
      return;
    }
    if (acompañado === "Si") {
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
      setReservado(true);
    }, 5000);
    
  };

  const reservaCancelada = (e) => {
    e.preventDefault();
    alert("Se ha cancelado la reserva");
    setReservado(false);
  };

  const registrarAcompañante = (e) => {
    e.preventDefault();
    const validateName = /^[A-Z][a-z]{1,13}$/;
    if (!validateName.test(acompañante)) {
      alert("Ingrese un nombre valido sin numeros, caracteres especiales y un maximo de 15 letras");
    }
    else {
      alert("Se han registrados los acompañantes");
    }
  };


  return (
    <>
      <NavBar />
      <div className="mainBooking ">
        <div className="container searchContainer p-5 ">
          <div className="container options my-3">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setRegistrado(event.target.value)}
            >
              <option selected className="text-center">
                Se encuentra registrado?
              </option>
              <option value="true" className="text-center">
                Si
              </option>
              <option value="false" className="text-center">
                No
              </option>
            </select>
          </div>
          <div className="container options my-3">
            <Link to={"/register"}>
              <p className="text-center my-3">
                Si no se encuentra registrado, registrese ahora!
              </p>
            </Link>
          </div>
          <div className="d-flex justify-content-center container  my-3">
            <label className="text-center">
              Es su primer compra? Registre sus acompañantes para sugerirselos
              en sus proximas reservas!
            </label>
          </div>
          <div className="d-flex justify-content-center container textoRegistrar my-3">
            <input
              onChange={(event) => setAcompañante(event.target.value)}
              placeholder="Ingrese el nombre"
              className="textoRegistrar text-center"
            />
          </div>
          <div className="d-flex justify-content-center container options my-3">
            <button
              onClick={registrarAcompañante}
              className="btn btn-primary boton"
            >
              <p>Registrar acompañantes</p>
            </button>
          </div>
          <div className="d-flex justify-content-center container options my-3">
            <select class="form-select" aria-label="Default select example">
              <option selected className="text-center">
                Agregar acompañantes anteriores a la reserva?
              </option>
              <option value="Si" className="text-center">
                Si
              </option>
              <option value="No" className="text-center">
                No
              </option>
            </select>
          </div>
          <div className="d-flex justify-content-center container options my-3">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setAcompañado(event.target.value)}
            >
              <option selected className="text-center">
                Desea agregar nuevos acompañantes a esta compra?
              </option>
              <option value="Si" className="text-center">
                Si
              </option>
              <option value="No" className="text-center">
                No
              </option>
            </select>
          </div>
          {acompañado === "Si" ? (
            <div className="d-flex justify-content-center container options my-3">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(event) => setCantidad(event.target.value)}
              >
                <option
                  selected
                  value="Cantidad de personas"
                  className="text-center"
                >
                  Cantidad de personas:
                </option>
                <option value="1" className="text-center">
                  1
                </option>
                <option value="2" className="text-center">
                  2
                </option>
                <option value="3" className="text-center">
                  3
                </option>
                <option value="4" className="text-center">
                  4
                </option>
                <option value="5" className="text-center">
                  5
                </option>
                <option value="6" className="text-center">
                  6
                </option>
                <option value="7" className="text-center">
                  7
                </option>
                <option value="8" className="text-center">
                  8
                </option>
                <option value="9" className="text-center">
                  9
                </option>
                <option value="10" className="text-center">
                  10
                </option>
              </select>
            </div>
          ) : (
            <></>
          )}
          {acompañado === "Si" ? (
            <div className="d-flex justify-content-center container options my-3">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(event) => setTipoPasajero(event.target.value)}
              >
                <option
                  selected
                  value="Tipo acompañante"
                  className="text-center"
                >
                  Tipo de acompañante
                </option>
                <option value="Adulto" className="text-center">
                  Adulto
                </option>
                <option value="Niño" className="text-center">
                  Niño
                </option>
                <option value="Discapacitado" className="text-center">
                  Discapacitado
                </option>
              </select>
            </div>
          ) : (
            <></>
          )}

          {tipoPasajero === "Discapacitado" ? (
            <div className="d-flex justify-content-center container options my-3">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(event) => setAcompañado(event.target.value)}
              >
                <option selected className="text-center">
                  Se encuentra acompañado por un adulto responsable?
                </option>
                <option value="Acompañado" className="text-center">
                  Si
                </option>
                <option value="NoAcompañado" className="text-center">
                  No
                </option>
              </select>
            </div>
          ) : (
            <></>
          )}
          <div className="d-flex justify-content-center container options my-3">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setMedioPago(event.target.value)}
            >
              <option selected className="text-center">
                Medio de pago
              </option>
              <option value="Tarjeta" className="text-center">
                Tarjeta de credito
              </option>
              <option value="Mercado Pago" className="text-center">
                Mercado pago
              </option>
              <option value="Cuenta Bancaria" className="text-center">
                Cuenta bancaria
              </option>
              <option value="No registro pago" className="text-center">
                Aun no registre mi cuenta
              </option>
            </select>
          </div>

          <div className="d-flex justify-content-center">
            <button onClick={reservaExitosa} className="btn btn-primary boton">
              <p>Reservar</p>
            </button>
          </div>
          {reservado === true ? (
            <div className="d-flex justify-content-center">
              <button
                onClick={reservaCancelada}
                className="btn btn-primary boton"
              >
                <p>Cancelar</p>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
