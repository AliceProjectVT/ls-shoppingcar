import React from 'react'

const Item = ({nombre, precio, stock} ) => {
    return (
        <div>
            <h3> {nombre} </h3>
            <p> Precio: ${precio} </p>
            <p> Disponible {stock} </p>
        </div>
    )
}

export default Item