//import React, {useState} from "react";
//import { useNavigate } from "react-router-dom";
//import { Link } from 'react-router-dom';

import * as React from 'react';
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

export default function Login() {
  
  const navigate = useNavigate();
  const onLoginClick = (e) => {
    e.preventDefault();
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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box onSubmit={onLoginClick} component='form' sx={{m:1,mt:2, display: 'flex',minHeigth:'100vh',alignItems:'center',justifyContent:'center',gap:'1em',flexWrap: 'wrap',flexDirection:'column'}}>
      <div>
        <img style={{height:'150px'}} src={BuqueImage}/>
      </div>
      <div >
          <TextField
            label="Email"
            type='email'
            required
            id="outlined-start-adornment"
            sx={{ width: '25ch'}}
            fullWidth
          /> 
      </div>
      <div>    
          <FormControl  
              required sx={{ width: '25ch' }} variant="outlined" >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              inputProps={{minLength:8}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password" 
            />
          </FormControl>
          </div>
          <div>
          <Stack spacing={2} direction="row">
            <Button onClick={onClickRegister}variant="outlined">Registrarme</Button>
            <Button type='submit' variant="contained">Loguearme</Button>
          </Stack>
          </div>
    </Box>
  );
}
