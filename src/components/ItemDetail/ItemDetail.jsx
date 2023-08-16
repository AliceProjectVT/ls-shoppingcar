import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ item }) => {


  const { carrito, setCarrito } = useContext(CartContext);
  console.log(carrito)
  const [cantidad, setCantidad] = useState(1);


  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)

  }


  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)

  }

  const handleAgregar = () => {

    const itemAgregado = { ...item, cantidad };
    //agregar Toastify
    const estaEnElCarro =carrito.find(producto => producto.id === itemAgregado.id)
    if (estaEnElCarro) {
      console.log("está en el carro")
    } else {
      console.log("No Está")
    }

    setCarrito([...carrito, itemAgregado])
  }

  return (
    <div>

      <h1>{item.nombre}</h1>
      <ItemCount
        handleRestar={handleRestar}
        cantidad={cantidad}
        handleSumar={handleSumar}
        handleAgregar={handleAgregar}
      />



    </div>
  )
}

export default ItemDetail