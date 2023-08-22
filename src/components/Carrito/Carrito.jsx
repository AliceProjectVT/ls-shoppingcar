import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };
  return (
    <>
      {" "}
      <div className="mt-3 pl-10 font-extrabold text-xl">Carrito</div>
      <br />
      <br />
      {carrito.map((prod) => (
        <section className="">
          <div key={prod.id}>
            <h2 className="font-black text-5xl">{prod.nombre}</h2>
            <p className=" font-bold ">${prod.precio}</p>
            <p>Precio Total: ${prod.precio * prod.cantidad}</p>

            <p className="font-bold">Cantidad en carro: {prod.cantidad}</p>
          </div>
          <div class="border-t text-3xl border-black my-4" />
          <br />
          <br />
        </section>
      ))}
      {carrito.length > 0 ? (
        <>
          <h3>Precio Total en Carro: ${precioTotal()}</h3>
          <br />
          <br />
          <br />
          <br />
          <button className="btn-black  p-3 m-5 rounded-md" onClick={handleVaciar}>
            Vaciar Carrito
          </button>
        </>
      ) : (
        <h3>Carrito vacío :( </h3>
      )}
    </>
  );
};

export default Carrito;
