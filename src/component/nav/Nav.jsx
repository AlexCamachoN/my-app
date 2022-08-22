import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import logo from '../logonegro.png'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import CartWidget from '../cartWidget/CartWidget'

const Nav = () => {

    //usando el custon hook, en CartContext se hizo useCart para mejor practica
    const{cart}= useCart()
    console.log(cart)
  return (
    
        <nav className="navbar  navbar-expand-lg navbar-dark bg-black" style={{minHeight:'1vh',}}>
            <div className="container-fluid"  >
                <Link to='/home'>
                        <a className="navbar-brand " >
                            {/* <img src={logo} height='70'/> */}
                        </a>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                    <NavLink className="nav-link" to='/home' >Home</NavLink>
                    </li> */}
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/promesa'> Alex Camacho</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/filtroinput'> Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/filtro/Abstracto'> Abstracto</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/filtro/Paisaje'> Paisaje</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/filtro/Bodegon'> Bodegon</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/cart'><CartWidget/></NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Reconocimientos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Promesa</a>
                    </li> */}
                </ul>
                {/* <NavLink className="nav-link" to='/cart'><CartWidget/></NavLink> */}
                </div>
            </div>
        </nav>
    
  )
}

export default Nav