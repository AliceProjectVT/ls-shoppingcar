import React from "react";
import { useState } from "react";
 import { useForm } from "react-hook-form";

const Contacto = () => {
 
const {register, handleSubmit} = useForm();
const enviar =(data) => {

  console.log(data)
}
  
  return (
    <div className="m-10 ">
      <h2 className="text-4xl font-medium m-10">Contact</h2>
      <form className="flex-col "onSubmit={handleSubmit(enviar)} >
        <input className="flex border rounded-xl w-auto mb-5" type="text" placeholder="Ingresa tu nombre"  {...register("nombre")} />
      
        <input className="flex border rounded-xl w-auto mb-5" type="email" placeholder="Ingresa tu correo" {...register("e-mail")} />
        <input className="flex border rounded-xl w-auto mb-5" type="phone" placeholder="Ingresa tu telefono" {...register("telefono")} />

        <button className="  bg-blue-500 m-2 p-2  rounded-xl text-white font-bold">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
