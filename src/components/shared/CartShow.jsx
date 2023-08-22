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




//LOGICA CART WIDGET 


export default CartShow;

{/* <div className=" relative ">
      <div className="container-cart-icon  cursor-pointer " onClick={mostrarOcultar}> */}

    





{/* 
        {mostrarCarro ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-cart-x-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z" />
          </svg>
        ) : (
          <>
            <svg
              c
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607
             1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 
             1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
            <div className="contador-productos mt-5 ">
              <span id="count-products " className=""> {cantidadEnCarrito()} </span>
            </div>
          </>
        )}  */}

        {/* Resto del contenido */}
      {/* </div> */}
{/* 
      <div className="absolute z-10">
        <Link to="/carrito" ></Link>
      {mostrarCarro && <CartShow />}

      </div>
    </div>  */}
