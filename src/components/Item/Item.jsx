import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className=" producto ">
      <img className="imagen-producto" src={producto.imagen} alt={producto.nombre} />
      <pc className="nombre-producto" >{producto.nombre}</pc>
      <p className=" precio-producto">
        Precio: <span className=" font-light text-red-700">${producto.precio} </span>{" "}
      </p>
      <button className="  boton-producto link-sin-estilo  ">
        <Link to={`/item/${producto.id}`}>DETALLES</Link>
      </button>
    </div>
  );
};

export default Item;
