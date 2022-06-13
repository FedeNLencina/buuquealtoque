import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import NavBar from "../../components/NavBar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./register.css"


export default function Register() {
  const [value, setValue] = React.useState([null, null]);
  const [medioDePago, setMedioPago] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [email, setEmail] = useState(null);
  const [apellido, setApellido] = useState(null);
  const [dni, setDni] = useState(null);
  const [domicilio, setDomicilio] = useState(null);
  const [password, setPassword] = useState(null);
  const [fecha, setFecha] = useState(null);
  
  const handleChange = (e) => {
    e.preventDefault();
    setMedioPago(e);
  };

  const navigate = useNavigate();
  const onBackClick = (e) => {
    e.preventDefault();
    const validateName = /^[A-Z][a-z\sA-Za-z]{1,30}$/;
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const validateDNI = /^[0-9]{8}$/;
    const validateAddress = /^[A-Z][0-9a-z\sA-Z\.]+$/;
    const validatePassword =
      /^(?=.*[0-9])((?=.*[a-z])||(?=.*[A-Z]))[a-zA-Z0-9]{8,}$/;
    if (!fecha) {
      alert("Debe seleccionar su fecha");
      return;
    }
    if (!validateName.test(nombre)) {
      alert(
        "El nombre debe contener una mayuscula como minimo y debe serentre 6 y 30 caracteres"
      );
      return;
    }
    if (!validateName.test(apellido)) {
      alert(
        "El nombre debe contener una mayuscula como minimo y debe serentre 6 y 30 caracteres"
      );
      return;
    }
    if (!validateEmail.test(email)) {
      alert(
        "Ingrese un mail valido"
      );
      return;
    }
    if (!validatePassword.test(password)) {
      alert("Password debe tener minimo una letra y un numero");
      return;
    }
    if (!validateDNI.test(dni)) {
      alert("Ingrese un dni valido");
      return;
    }
    if (!validateAddress.test(domicilio)) {
      alert("Ingrese una direccion valida");
      return;
    } if (!medioDePago || medioDePago === "vacio") {
      alert("Debe ingresar un medio de pago");
      return;
    }
    navigate("/");
  };

  const agregarEmail = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <NavBar />
      <div className="container registerContainer p-5 my-5">
        <Box
          onSubmit={onBackClick}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <div className="d-flex justify-content-center">
            <TextField
              type="text"
              id="outlined-error"
              label="Nombre"
              placeholder="Ingrese nombre"
              required
              onChange={(event) => setNombre(event.target.value)}
            />
            <TextField
              type="text"
              id="outlined-error-helper-text"
              label="Apellido"
              placeholder="Ingrese apellido"
              required
              onChange={(event) => setApellido(event.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <TextField
              id="filled-error"
              label="DNI"
              placeholder="Ingrese dni"
              required
              onChange={(event) => setDni(event.target.value)}
            />
            <TextField
              id="filled-error-helper-text"
              label="Domicilio"
              placeholder="Ingrese domicilio"
              required
              onChange={(event) => setDomicilio(event.target.value)}
            />
          </div>
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
              min="1922-01-01"
              max="2004-12-31"
            />
          </div>
          <div className="d-flex justify-content-center">
            <select
              className="form-select w-50"
              aria-label="Default select example"
              onChange={(event) => setMedioPago(event.target.value)}
            >
              <option selected className="text-center" value="vacio">
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
            </select>
          </div>
          <div className="d-flex justify-content-center">
            <TextField
              type="email"
              id="standard-error-helper-text"
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Ingrese email"
              required
              variant="standard"
            />
          </div>
          <div className="d-flex justify-content-center">
            <TextField
              label="Password"
              required
              id="outlined-start-adornment"
              sx={{ width: "25ch" }}
              fullWidth
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button type="submit" variant="contained">
              Registrarme
            </Button>
          </div>
          <Link to={"/"}>
            <p className="text-center my-3">
              Se encuentra registrado? Ingrese ahora!
            </p>
          </Link>
        </Box>
      </div>
    </>
  );
}
