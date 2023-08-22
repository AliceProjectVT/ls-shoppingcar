import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartShow = ({ item }) => {
  const { carrito, precioTotal, cantidad, setCantidad } = useContext(CartContext);

  const btnMas = () => {
    cantidad < item.stock && setCantidad(item.cantidad++);
  };

  return (
    <div className="  carrito">
      <div className="header-carrito ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon-close"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <h2>Carrito</h2>
      </div>
      <div className="productos-carrito">
        {carrito.map((prod) => (
          <>
            <div key={prod.id} className="producto-carrito">
              <img className="" src={prod.imagen} alt="" />
              <p className="nombre-producto-carrito">{prod.nombre} </p>
              <i className="bi bi-plus-circle"></i>
              <span className="cantidad-producto-carrito">{prod.cantidad}</span>
              <p className="selector-cantidad">-</p>
              <p className="titulo-producto-carrito"></p>
              <span className="precio-producto-carrito">${prod.precio * prod.cantidad}</span>
            </div>
          </>
        ))}
      </div>
      <div></div>

      {carrito.length > 0 ? (
        <>
          <div className="total-carrito ">
            <div className="fila">
              <strong className="">Total:</strong>
              <span className="precio-total-carrito">${precioTotal()}</span>
            </div>
          </div>
          <button className="vaciar-carrito btn btn-green ">Vaciar Carrito</button>
          <button className="btn btn-green"> Ver Carrito</button>
        </>
      ) : (
        <p className="cart-empty">El carrito está vacío</p>
      )}
    </div>
  );
};

export default CartShow;
