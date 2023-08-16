
import { Route, Routes, BrowserRouter } from "react-router-dom"
import NavBar from "./components/shared/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { useState } from "react";
import { CartContext } from "./context/CartContext"

function App() {

  const [carrito, setCarrito] = useState([]);





  return (
    <div>
      <div>
        <CartContext.Provider  value= {{carrito, setCarrito}}  >
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