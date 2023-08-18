
import { Route, Routes, BrowserRouter } from "react-router-dom"
import NavBar from "./components/shared/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { useState } from "react";
import { CartContext } from "./context/CartContext"

function App() {

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
    setCarrito(nuevoCarrito)

  }
  const cantidadEnCarrito = () => {
    return (carrito.reduce((acc, prod) => acc + prod.cantidad, 0))
  }

  return (
    <div>
      <div>
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito }}  >
          <BrowserRouter>
            <NavBar />
            <Routes>


              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:categoria" element={<ItemListContainer />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />

            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </div>
    </div>
  );
}

export default App;