import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./search.css";

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
    <>
      <NavBar />
      <div className="mainSearch py-5">
        <div className="container searchContainer p-5 ">
          <div className="container products my-1">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setProducto(event.target.value)}
            >
              <option selected value="Tipo de producto" className="text-center">
                Seleccione el producto que desee reservar
              </option>
              <option value="Pasaje" className="text-center">
                Pasaje
              </option>
              <option value="Excursion" className="text-center">
                Excursion
              </option>
            </select>
          </div>
          {producto === "Pasaje" ? (
            <div className="container destinos d-flex flex-column justify-content-center pasaje my-2">
              <p className="text-center">
                Seleccione el destino que desee viajar
              </p>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(event) => setDestino(event.target.value)}
              >
                <option selected value="Destinos" className="text-center">
                  Destinos
                </option>
                <option value="Uruguay" className="text-center">
                  Uruguay
                </option>
                <option value="Argentina" className="text-center">
                  Argentina
                </option>
              </select>
            </div>
          ) : (
            <></>
          )}
          {producto === "Excursion" ? (
            <div className="container excursion d-flex flex-column justify-content-center my-2">
              <p className="text-center">
                Seleccione el lugar de la excursion que desee viajar
              </p>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(event) => setDestino(event.target.value)}
              >
                <option selected value="Lugar" className="text-center">
                  Lugar
                </option>
                <option value="Uruguay" className="text-center">
                  Uruguay
                </option>
                <option value="Argentina" className="text-center">
                  Argentina
                </option>
              </select>
            </div>
          ) : (
            <></>
          )}

          {producto === "Pasaje" ? (
            <div className="container fecha d-flex flex-column justify-content-center my-2">
              <label for="start" className="text-center">
                Fecha:
              </label>
              <input
                onChange={(event) => setFecha(event.target.value)}
                className="text-center"
                type="date"
                id="start"
                name="trip-start"
                min="2022-07-01"
                max="2022-12-31"
              />
            </div>
          ) : (
            <></>
          )}

          {/* <label for="start">Fecha:</label> */}
          {producto === "Excursion" ? (
            <div className="container fecha d-flex flex-column justify-content-center my-2">
              <label for="start" className="text-center">
                Fecha:
              </label>
              <input
                onChange={(event) => setFecha(event.target.value)}
                className="text-center"
                type="date"
                id="start"
                name="trip-start"
                min="2022-07-01"
                max="2022-12-31"
              />
            </div>
          ) : (
            <></>
          )}

          {producto === "Pasaje" ? (
            <div className="container cantPersonas d-flex flex-column justify-content-center my-2">
              <p className="text-center">
                Seleccione la cantidad de personas a viajar
              </p>
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
          {producto === "Excursion" ? (
            <div className="container cantPersonas d-flex flex-column justify-content-center my-2">
              <p className="text-center">
                Seleccione la cantidad de personas para la excursion
              </p>
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

          {producto === "Pasaje" ? (
            <div className="container horario d-flex flex-column justify-content-center my-2">
              <p className="text-center">Seleccione un horario para viajar</p>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(event) => setHorario(event.target.value)}
              >
                <option selected value="Horario" className="text-center">
                  Seleccione horario:
                </option>
                <option value="8:00" className="text-center">
                  8:00
                </option>
                <option value="12:30" className="text-center">
                  12:30
                </option>
                <option value="15:40" className="text-center">
                  15:40
                </option>
                <option value="18:00" className="text-center">
                  18:00
                </option>
                <option value="20:00" className="text-center">
                  20:00
                </option>
              </select>
            </div>
          ) : (
            <></>
          )}
          {producto === "Excursion" ? (
            <div className="container horario d-flex flex-column justify-content-center my-1">
              <p className="text-center">
                Seleccione un horario para realizar la excursion
              </p>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(event) => setHorario(event.target.value)}
              >
                <option selected value="Horario" className="text-center">
                  Seleccione horario:
                </option>
                <option value="8:00" className="text-center">
                  8:00
                </option>
                <option value="12:30" className="text-center">
                  12:30
                </option>
                <option value="15:40" className="text-center">
                  15:40
                </option>
                <option value="18:00" className="text-center">
                  18:00
                </option>
                <option value="20:00" className="text-center">
                  20:00
                </option>
              </select>
            </div>
          ) : (
            <></>
          )}

          {producto === "Pasaje" ? (
            <div className="container boton d-flex flex-column justify-content-center my-3">
              <button onClick={handlerButtom} className="btn btn-primary">
                Buscar
              </button>
            </div>
          ) : (
            <></>
          )}
          {producto === "Excursion" ? (
            <div className="container boton d-flex justify-content-center my-3">
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
        </div>

        {destino === "Argentina" ? (
          items.map((item) => (
            <div className="mainSearch">
              <div className="container searchContainer p-5 my-5">
                <div className="container argentina d-flex justify-content-center my-1">
                  <div
                    class="card d-flex justify-content-center"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={require("../../images/argentina.jpg")}
                      className="img-fluid"
                      alt="argentina"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.destino}</h5>
                      <p class="card-text">{`${item.producto} `}</p>
                      <p class="card-text">{`Fecha: ${item.fecha}`}</p>
                      <p class="card-text">{`Cantidad de personas: ${item.cantidad}`}</p>
                      <Link to={"/booking"}>
                        <a href="#" class="btn btn-primary">
                          Reservar
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}

        {destino === "Uruguay" ? (
          items.map((item) => (
            <div className="mainSearch">
              <div className="container searchContainer p-5 my-5">
                <div className="container uruguay d-flex justify-content-center my-1">
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src={require("../../images/uruguay.jpg")}
                      className="imgAbout img-fluid"
                      alt="uruguay"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.destino}</h5>
                      <p class="card-text">{`${item.producto} `}</p>
                      <p class="card-text">{`Fecha: ${item.fecha}`}</p>
                      <p class="card-text">{`Cantidad de personas: ${item.cantidad}`}</p>

                      <p class="card-text">{`Horario: ${item.horario}`}</p>
                      <Link to={"/booking"}>
                        <a href="#" class="btn btn-primary">
                          Reservar
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Search;
