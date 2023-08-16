import { Link } from "react-router-dom"



const Item = ({ producto }) => {
  return (
    <div><p>{producto.nombre}</p>
      <button className='   font-extrabold  '><Link to={`/item/${producto.id}`}>DETALLES</Link></button></div>
  )
}

export default Item