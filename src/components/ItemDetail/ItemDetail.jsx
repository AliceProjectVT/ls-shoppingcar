import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({ detalles }) => {
  const stockDisponible = detalles.stock > 0;
  const { onAddProduct } = useContext(CarritoContext);

  const clickBoton = () => {
    const producto = { nombre: detalles.nombre, precio: detalles.precio, stock: detalles.stock };
    onAddProduct(producto);
    console.log(producto);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4 border shadow-lg text-center">
        <h3 className="text-xl font-semibold mb-2">{detalles.nombre}</h3>
        <img className="w-full mb-4" src="#" alt={`${detalles.nombre}`} />
        <p className="mb-2">Precio: ${detalles.precio}</p>
        <p className="mb-4">
          {stockDisponible
            ? detalles.stock === 1
              ? 'Ultimo en Stock!'
              : detalles.stock <= 5
              ? `Quedan solo ${detalles.stock}`
              : `Disponible ${detalles.stock} unidades`
            : 'Agotado'}
        </p>
        <button
          onClick={clickBoton}
          className={`btn btn-green ${stockDisponible ? '' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!stockDisponible}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
