import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>TheNextSpace</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><a className="menu-link" to="#">Productos</a></li>
            <li><a className="menu-link" to="#">Contacto</a></li>
        </ul>
    </nav>
  )
}

export default Navbar