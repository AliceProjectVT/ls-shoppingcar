import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CarritoContext } from "../../context/CarritoContext";

const Item = ({ id, nombre, precio, stock }) => {
  const stockDisponible = stock > 0;
  const { onAddProduct } = useContext(CarritoContext);

  const clickBoton = () => {
    const producto = { id, nombre, precio, stock };
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

      {/* Enlace "Detalles" */}
      <button className="btn btn-black">
        <Link to={`/detalles/${id}`}> Detalles </Link>
      </button>
    </div>
  );
};

export default Item;
