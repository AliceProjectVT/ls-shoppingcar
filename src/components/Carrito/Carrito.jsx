import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Carrito = () => {

    const { carrito } = useContext(CartContext);

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
                <h3>Precio Total en Carro: </h3>
        </>

    )
}

export default Carrito