import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";

const Contacto = () => {
  const [valores, setValores] = useState({
    nombre:"",
    email:""
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado", valores)
  };
  


  const handleValores =(e)=>{
    setValores({...valores, 
     [e.target.name]: e.target.value,
      
    })
    e.target.value


  }
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} action="">
        <input name="nombre" type="text" placeholder="Ingresa tu nombre" value={valores.nombre} onChange={handleValores} />
        <input name="email" type="email" placeholder="Ingresa tu correo" value={valores.email} onChange={handleValores} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
