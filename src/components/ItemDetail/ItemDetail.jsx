import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

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
    
      <div className="border border-gray-300 p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">{item.nombre}</h2>
        <img height="200" width="200" src={item.imagen} alt="" />
        <p className=" text-lg mb-1">${item.precio} </p>
        <p class="text-sm text-gray-600 mb-2">Stock:{item.stock}</p>
        <p class="text-sm text-gray-500 mb-4">{item.descripcion} </p>
        <div class="flex items-center justify-between mb-2">
          <ItemCount
            handleRestar={handleRestar}
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    
  );
};

export default ItemDetail;
