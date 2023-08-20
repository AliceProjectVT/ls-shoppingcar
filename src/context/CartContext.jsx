import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

// useEffect(() => {
//     const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
//     setCarrito(carritoGuardado);
// }, []);

// useEffect(() => {
//     localStorage.setItem("carrito", JSON.stringify(carrito));
// }, [carrito]);


// const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {


    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = (item, cantidad) => {

        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = [...carrito]

        const estaEnElCarro = carrito.find((producto) => producto.id === itemAgregado.id)

        if (estaEnElCarro) {

            estaEnElCarro.cantidad += cantidad
        } else {
            nuevoCarrito.push(itemAgregado)
            console.log("No Está")
        }
        setCarrito(nuevoCarrito);

    }
    const cantidadEnCarrito = () => {
        return (carrito.reduce((acc, prod) => acc + prod.cantidad, 0))
    }
    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)

    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }
    //    useEffect(()=>{
    //     localStorage.setItem("carrito", JSON.stringify(carrito))
    //    },[carrito])


    return (

        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>

            {children}

        </CartContext.Provider>



    )


}


