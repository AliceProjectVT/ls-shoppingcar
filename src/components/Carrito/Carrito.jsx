import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }
    return (
        <>  <div>Carrito</div>

            {
                carrito.map((prod) =>

                    <div key={prod.id}>
                        <h2>{prod.nombre}</h2>
                        <p>${prod.precio}</p>
                        <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>

                    </div>


                )}
            {
                carrito.length > 0 ? (
                    <>
                    <h3>Precio Total en Carro: ${precioTotal()}</h3>
                    <button onClick={handleVaciar}>Vaciar Carrito</button>
                    </>
                ) : (
                    <h3>Carrito vacío :( </h3>
                )
            }
           

        </>

    )
}

export default Carrito