import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function Register() {
  const [value, setValue] = React.useState([null, null]);
  const [medioDePago, setmedioDePago] = React.useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setmedioDePago(e);    
  }

  const navigate = useNavigate();
  const onBackClick = (e) => {
    e.preventDefault();
    navigate("&home");
  };

  const agregarEmail = (e) => {
    e.preventDefault();

  }
  return (
    <Box
      onSubmit={onBackClick}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <div>
        <TextField
        type='text'
          id="outlined-error"
          label="Nombre"
          placeholder="Ingrese nombre"
          required
        />
        <TextField
          type='text'
          id="outlined-error-helper-text"
          label="Apellido"
          placeholder="Ingrese apellido"
          required
        />
      </div>
      <div>
        <TextField
         
          id="filled-error"
          label="DNI"
          placeholder="Ingrese dni"
         
          required
        />
        <TextField

          id="filled-error-helper-text"
          label="Domicilio"
          placeholder="Ingrese domicilio"
          
          required
        />
      </div>
      <div>

        <LocalizationProvider required dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={value}
            required
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div>
        <FormControl sx={{width:'30%'}}>
          <InputLabel id="demo-simple-select-label">Medio de Pago</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"Ingrese Medio de Pago"}
            required
            onChange={handleChange}
          >
            <MenuItem value={'Tarjeta de credito'}>Tarjeta de credito</MenuItem>
            <MenuItem value={'Mercado pago'}>Mercado pago</MenuItem>
            <MenuItem value={'Cuenta bancaria'}>Cuenta bancaria</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField
          type='email'
          id="standard-error-helper-text"
          label="Email"
          onChange={agregarEmail}
          placeholder="Ingrese email"
          required
          variant="standard"
        />
      </div>
      <Button type='submit' variant="contained">Registrarme</Button>
    </Box>
  );
}
