import "./Navbar.css"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      <ul class="main-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/personajes">Personajes</Link></li>
        <li>elemento menu</li>
      </ul>
      <ul class="user">
        <li>Nombre usuario <img src="./img/user.jpg" alt="" /></li>
      </ul>
    </nav>
  )
}

export default Navbar