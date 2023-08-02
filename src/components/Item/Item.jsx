import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const Item = ({ nombre, precio, stock }) => {
  const stockDisponible = stock > 0;
  const { onAddProduct } = useContext(CarritoContext);

  const clickBoton = () => {
    const producto = { nombre, precio, stock };
    onAddProduct(producto);
    console.log(producto);
  };

  return (
    <div className='producto'>
      <h3> {nombre} </h3>
      <img className="img-prod" src="#" alt={`${nombre}`} />
      <p> Precio: ${precio} </p>
      <p className='l-i'>
        {stockDisponible
          ? stock === 1
            ? 'Queda el último!'
            : stock <= 5
              ? `Quedan solo ${stock}`
              : `Disponible ${stock}`
          : 'Agotado'}
      </p>
      <button
        onClick={clickBoton}
        className={`btn btn-green ${stockDisponible ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!stockDisponible}
      >
        Agregar
      </button>

      <button className="btn btn-black ">
        Detalles
      </button>
    </div>
  );
};

export default Item;
