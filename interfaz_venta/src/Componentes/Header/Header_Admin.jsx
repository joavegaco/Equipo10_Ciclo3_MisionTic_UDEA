import React from 'react'
import Logo from '../Logo/Logo.jsx'
import {Link} from 'react-router-dom'

function Header_Admin() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Logo></Logo>
                <Link to="/gestion_ventas" className="navbar-brand">
                    atomium
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/gestion_ventas" className="nav-link active" aria-current="page" href="#">Gestion De Ventas</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gestion De Vendedores</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Administrador
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link to="/agregar_productos" className="dropdown-item">Agregar Producto</Link></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><Link to="/" className="dropdown-item">Salir</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header_Admin