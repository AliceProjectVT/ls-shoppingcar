import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./shared.css";

const NavBar = () => {
  return (
    <header className="">
      <nav className="bg-gray-800 text-white py-4 ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-black">
            <Link>LOGO</Link>
          </h1>
          <ul className="  flex space-x-4">
            <li className="liss">
              <Link to="/">Inicio</Link>
            </li>
            <li className="liss">
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li className="liss">
              <Link to="/categoria/Abarrotes">Abarrotes</Link>
            </li>
            <li className="liss">
              <Link to="/categoria/Vegetales">Vegetales</Link>
            </li>
            <li className="liss">
              <Link to="/categoria/Frutas">Frutas</Link>
            </li>
            <li className="liss">
              {" "}
              <Link to="/cart">Carrito</Link>{" "}
            </li>
            <li className="liss">
              <a href="">Productos</a>
            </li>
            <li className="liss">
              <Link to="/contacto">Contacto</Link>
            </li>
           
          </ul>
          <div className="">
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
