//import React, {useState} from "react";
//import { useNavigate } from "react-router-dom";
//import { Link } from 'react-router-dom';

import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BuqueImage from './../../assets/pngwing.com.png';
import { useNavigate } from 'react-router-dom';
import "./login.css"

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const onLoginClick = (e) => {
    e.preventDefault();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const validatePassword =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    // /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    
    if (!validatePassword.test(password)) {
      alert("Password debe tener minimo una letra, un numero y un caracter especial");
      return;
    }
    if (!regexEmail.test(email)) {
      alert("Email no valido");
      return;
    }
    if (password.lenght < 8) {
      alert("Password debe ser minimo de 8 caracteres");
      return;
    }
    navigate("/home");
  }
  const onClickRegister=(e)=>{
    e.preventDefault();
    navigate("/register");
  }
 
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  return (
    <div className="main">
      <div className="container loginContainer p-5 my-5">
        <h5 className="text-center">Bienvenido a BuqueAltoque!</h5>
        <Box
          onSubmit={onLoginClick}
          component="form"
          sx={{
            m: 1,
            mt: 2,
            display: "flex",
            minHeigth: "100vh",
            alignItems: "center",
            justifyContent: "center",
            gap: "1em",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <div>
            <img style={{ height: "150px" }} src={BuqueImage} />
          </div>
          <div>
            <TextField
              label="Email"
              required
              id="outlined-start-adornment"
              sx={{ width: "25ch" }}
              fullWidth
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Password"
              required
              id="outlined-start-adornment"
              sx={{ width: "25ch" }}
              fullWidth
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div>
            <Stack spacing={2} direction="row">
              <Button onClick={onClickRegister} variant="outlined">
                Registrarme
              </Button>
              <Button type="submit" variant="contained">
                Loguearme
              </Button>
            </Stack>
          </div>
        </Box>
      </div>
    </div>
  );
}
