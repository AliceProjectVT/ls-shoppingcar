import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div>


      <h1>{item.nombre}</h1>
      <img height="200" width="200" src={item.imagen}  alt="" />
      <p className="  text-red-500 font-light" >${item.precio} </p>
      <ItemCount
        handleRestar={handleRestar}
        cantidad={cantidad}
        handleSumar={handleSumar}
        handleAgregar={() => {
          agregarAlCarrito(item, cantidad);
        }}
      />
    </div>
  );
};

export default ItemDetail;
