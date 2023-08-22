
import { Route, Routes, BrowserRouter } from "react-router-dom"
import NavBar from "./components/shared/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import Carrito from "./components/Carrito/Carrito";
import Contacto from "./components/Contacto/Contacto";
import Checkout from "./components/Checkout/Checkout"

function App() {


  return (
    <div>
      <div>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/:categoria" element={<ItemListContainer />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Carrito />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>

      </div>
    </div>
  );
}

export default App;