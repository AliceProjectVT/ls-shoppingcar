import React, { useState, createContext } from "react";





export const CarritoContext = createContext({
    productoCarro:[],
    total: 0,
    contadorProductos : 0
    

});

export const CarritoProvider = ({children}) =>{

    const [ productoCarro, setearCarro ] = useState([]);
    const [total, setTotal] = useState(0);
    const [ contadorProductos, setearContador] = useState(0);


    const onAddProduct = (product) => {
        if(productoCarro.find(item => item.id === product.id)){
            const products = productoCarro.map(item => 
                item.id === product.id 
                ? {... item, cantidad: item.cantidad + 1} 
                : item
                );
                  setTotal(total + product.precio * product.cantidad)
                  setearContador(contadorProductos + product.cantidad)
                
            return setearCarro([...products])
          }
          setTotal(total + product.precio * product.cantidad)
          setearContador(contadorProductos + product.cantidad)
          setearCarro([...productoCarro, product]);
      };

      return (
        <CarritoContext.Provider value={{productoCarro, total, contadorProductos, onAddProduct}}>
    
    
        {children}
    
        </CarritoContext.Provider>
    
    
    
    )

}




