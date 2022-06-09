import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();
  const onBackClick = (e) => {
    e.preventDefault();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPasword = /^([a-z]+[\s]*[0-9]+[\s]*)+$/i;
    if(!email){
      alert("Complete todos los campos para ingresar");
      return;
    }
    if(!password){
      alert("Complete todos los campos para ingresar");
      return;
    }
    if(password.length<8){
      alert("Contraseña muy corta. Ingrese una contraseña con 8 caracteres minimo");
      return;
    }
    if(!regexEmail.test(email)){
      alert("No es un formato de email valido. Por favor ingrese un mail valido")
      return;
    }
    if(!regexPasword.test(password)){
      alert("No es un formato de valido. Por favor ingrese nuevamente su password valido");
      return;
    }

      navigate("/home");
  
    
  };

  return (
    <div>
      <input onChange={(event) => setEmail(event.target.value)} placeholder="email" />
      <input onChange={(event) => setPassword(event.target.value)} placeholder="contraseña" />
      <button onClick={onBackClick}>
        <p>Ingresar</p>
      </button>
      <Link to={'/register'}><h4>No sos usuario de BuqueAlToque? Registrate ahora!</h4></Link>
    </div>
  );
}
