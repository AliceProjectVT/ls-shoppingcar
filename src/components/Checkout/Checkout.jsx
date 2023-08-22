import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);
    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };
  if (pedidoId) {
    return (
      <section className=" flex  justify-center items-center min-h-screen">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg mx-auto">
          <div className=" flex-col justify-center items-center">
            <h1 className="text-8xl font-semibold mb-5">Gracias por tu compra!</h1>
            <p className="text-5xl mx-32 mb-3 font-light" >El Identificador de tu pedido es:</p>
            <span className="text-4xl  font-black text-gray-800 mx-44 p-10"> {pedidoId} </span>
            <p className="text-sm mt-10  mx-52" > Recuerda guardar tu Identificador para hacer consultas respecto a tu compra! </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="m-10 ">
      <h2 className="text-4xl font-medium m-10">Finalizar compra</h2>
      <form className="flex-col " onSubmit={handleSubmit(comprar)}>
        <input
          className="flex border rounded-xl w-auto mb-5"
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          className="flex border rounded-xl w-auto mb-5"
          type="email"
          placeholder="Ingresa tu correo"
          {...register("e-mail")}
        />
        <input
          className="flex border rounded-xl w-auto mb-5"
          type="phone"
          placeholder="Ingresa tu telefono"
          {...register("telefono")}
        />

        <button className="  bg-blue-500 m-2 p-2  rounded-xl text-white font-bold">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
