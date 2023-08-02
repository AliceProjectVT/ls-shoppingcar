import React from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'


export const CartWidget = () => {

    const CarritoProvider = useContext(CarritoContext);

    return (
        <div>CartWidget
            <p>aaaa  </p>

        </div>
    )
}
