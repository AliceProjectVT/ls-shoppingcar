import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from "./components/Checkout/Checkout";
import { CarritoProvider } from "./context/CarritoContext";


function App() {

  return (

    < >

      <BrowserRouter>
        <CarritoProvider >
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CarritoProvider>
      </BrowserRouter>

    </>

  )
}

export default App
