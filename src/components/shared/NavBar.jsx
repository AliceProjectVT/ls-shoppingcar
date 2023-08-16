
import { Link } from "react-router-dom"



const NavBar = () => {
  return (
   <nav>
<a href="">Logo</a>
<ul>
  <li><Link to="/">Inicio</Link></li>
  <li><Link  to="/nosotros">Nosotros</Link></li>
  <li><Link  to="/categoria/abarrotes">Abarrotes</Link></li>

  <li><a href="">Productos</a></li>
  <li><a href="">Contacto</a></li>
</ul>





   </nav>
  )
}

export default NavBar