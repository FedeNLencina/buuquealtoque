import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

function Search() {
  const [destino, setDestino] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [producto, setProducto] = useState(null);
  const [horario, setHorario] = useState(null);
  const [items, setItems] = useState([]);

  const handlerButtomExcursion = () => {
    alert("No hay excursiones disponibles");
    setDestino(null);
    setFecha(null);
    setCantidad(null);
    setProducto(null);
    setHorario(null);
    return;
  };
  const handlerButtom = () => {
    if (!destino) {
      alert("Se deben seleccionar el destino");
      return;
    }
    if (!fecha) {
      alert("Se deben seleccionar la fecha");
      return;
    }
    if (!cantidad) {
      alert("Se deben seleccionar la cantidad de personas");
      return;
    }
    if (!producto) {
      alert("Se deben seleccionar el producto");
      return;
    }
    if (!horario) {
      alert("Se deben seleccionar el horario");
      return;
    }
    if (producto === "Excursion") {
      alert("No hay excursiones disponibles");
      // setDestino(null);
      // setFecha(null);
      // setCantidad(null);
      // setProducto(null);
      // setHorario(null);
      return;
    }
    if (
      cantidad === "Cantidad de personas" ||
      producto === "Tipo de producto" ||
      destino === "Destinos" ||
      destino === "Lugar" ||
      horario === "Horarios"
    ) {
      alert("Debe seleccionar 1 opcion para continuar");
      return;
    }
    setItems([
      {
        id: 1,
        destino,
        fecha,
        cantidad,
        producto,
        horario,
      },
    ]);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      <NavBar />
      <div className="container searchContainer">
        <div className="container products">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => setProducto(event.target.value)}
          >
            <option selected value="Tipo de producto">
              Seleccione el producto que desee reservar
            </option>
            <option value="Pasaje">Pasaje</option>
            <option value="Excursion">Excursion</option>
          </select>
        </div>
        {producto === "Pasaje" ? (
          <div className="container destinos">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setDestino(event.target.value)}
            >
              <option selected value="Destinos">
                Destinos
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Argentina">Argentina</option>
            </select>
          </div>
        ) : (
          <></>
        )}
        {producto === "Excursion" ? (
          <div className="container destinos">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setDestino(event.target.value)}
            >
              <option selected value="Lugar">
                Lugar
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Argentina">Argentina</option>
            </select>
          </div>
        ) : (
          <></>
        )}

        {producto === "Pasaje" ? (
          <div className="container fecha">
            <label for="start">Fecha:</label>
            <input
              onChange={(event) => setFecha(event.target.value)}
              type="date"
              id="start"
              name="trip-start"
              min="2022-01-01"
              max="2022-12-31"
            />
          </div>
        ) : (
          <></>
        )}

        {/* <label for="start">Fecha:</label> */}
        {producto === "Excursion" ? (
          <div className="container fecha">
            <label for="start">Fecha:</label>
            <input
              onChange={(event) => setFecha(event.target.value)}
              type="date"
              id="start"
              name="trip-start"
              min="2022-01-01"
              max="2022-12-31"
            />
          </div>
        ) : (
          <></>
        )}

        {producto === "Pasaje" ? (
          <div className="container cantPersonas">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setCantidad(event.target.value)}
            >
              <option selected value="Cantidad de personas">
                Cantidad de personas:
              </option>
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
          </div>
        ) : (
          <></>
        )}
        {producto === "Excursion" ? (
          <div className="container cantPersonas">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setCantidad(event.target.value)}
            >
              <option selected value="Cantidad de personas">
                Cantidad de personas:
              </option>
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
          </div>
        ) : (
          <></>
        )}

        {producto === "Pasaje" ? (
          <div className="container horario">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setHorario(event.target.value)}
            >
              <option selected value="Horario">
                Seleccione horario:
              </option>
              <option value="8:00">8:00</option>
              <option value="12:30">12:30</option>
              <option value="15:40">15:40</option>
              <option value="18:00">18:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
        ) : (
          <></>
        )}
        {producto === "Excursion" ? (
          <div className="container horario">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setHorario(event.target.value)}
            >
              <option selected value="Horario">
                Seleccione horario:
              </option>
              <option value="8:00">8:00</option>
              <option value="12:30">12:30</option>
              <option value="15:40">15:40</option>
              <option value="18:00">18:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
        ) : (
          <></>
        )}

        {producto === "Pasaje" ? (
          <div className="container boton">
            <button onClick={handlerButtom} className="btn btn-primary">
              Buscar
            </button>
          </div>
        ) : (
          <></>
        )}
        {producto === "Excursion" ? (
          <div className="container boton">
            <button
              onClick={handlerButtomExcursion}
              className="btn btn-primary"
            >
              Buscar
            </button>
          </div>
        ) : (
          <></>
        )}

        {/* <button onClick={handlerButtom} className="btn btn-primary">
          Buscar
        </button> */}
        {destino === "Argentina" ? (
          items.map((item) => (
            <div className="container argentina d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.destino}</h5>
                  <p class="card-text">
                    {`${item.producto} fecha: ${item.fecha} cantidad de personas: ${item.cantidad}`}
                  </p>
                  <Link to={"/booking"}>
                    <a href="#" class="btn btn-primary">
                      Reservar
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
        {destino === "Uruguay" ? (
          items.map((item) => (
            <div className="container uruguay d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.destino}</h5>
                  <p class="card-text">
                    {`${item.producto} Fecha: ${item.fecha} Cantidad de personas: ${item.cantidad} Horario: ${item.horario}`}
                  </p>
                  <Link to={"/booking"}>
                    <a href="#" class="btn btn-primary">
                      Reservar
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Search;
