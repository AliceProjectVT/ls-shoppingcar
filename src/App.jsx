import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (

    < >
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route exact path="/"    element={<ItemListContainer/>}   />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App
