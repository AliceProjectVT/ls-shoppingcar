import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./shared.css";

const NavBar = () => {
  return (
    <header className="flex justify-around ">
      <h1 className="  flex-1  font-black ">
        <Link>LOGO</Link>
      </h1>
      <ul className="  flex  space-x-1">
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
        <li></li>
      </ul>
      <div className="  flex-1   ">
        <div className="">
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
