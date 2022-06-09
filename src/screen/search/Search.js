import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Search() {
  const [destino, setDestino] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [producto, setProducto] = useState(null);

  const [items, setItems] = useState([]);

  const handlerButtom = () => {
    if (!destino) {
      alert("Se deben seleccionar todos las opciones");
      return;
    }
    if (!fecha) {
      alert("Se deben seleccionar todos las opciones");
      return;
    }
    if (!cantidad) {
      alert("Se deben seleccionar todos las opciones");
      return;
    }
    if (!producto) {
      alert("Se deben seleccionar todos las opciones");
      return;
    }

    setItems([
      {
        id: 1,
        destino,
        fecha,
        cantidad,
        producto,
      },
      {
        id: 2,
        destino,
        fecha,
        cantidad,
        producto,
      },
    ]);
    
  };

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <div>
      <div>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(event) => setDestino(event.target.value)}
        >
          <option selected>Destinos</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Argentina">Argentina</option>
        </select>

        <label for="start">Fecha:</label>

        <input
          onChange={(event) => setFecha(event.target.value)}
          type="date"
          id="start"
          name="trip-start"
          min="2022-01-01"
          max="2022-12-31"
        />

        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(event) => setCantidad(event.target.value)}
        >
          <option selected>Cantidad de personas:</option>
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
          onChange={(event) => setProducto(event.target.value)}
        >
          <option selected>Tipo de producto</option>
          <option value="Paquete">Paquete</option>
          <option value="Pasaje">Pasaje</option>
          <option value="Desayuno">Desayuno</option>
          <option value="Excursion">Excursion</option>
          <option value="Estadia">Estadia</option>
          <option value="Estadia">FreeShop</option>
        </select>

        <button onClick={handlerButtom} className="btn btn-primary">
          Buscar
        </button>

        {items.map((item)=>
            <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{item.destino}</h5>
              <p class="card-text">
                {`${item.producto} fecha: ${item.fecha} cantidad de personas: ${item.cantidad}`}
              </p>
              <Link to={'/booking'}>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
