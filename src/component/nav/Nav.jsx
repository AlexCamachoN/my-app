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
    
        <nav className="navbar  navbar-expand-lg navbar-dark bg-black " style={{minHeight:'1vh',}}>
            <div className="container-fluid "  >
                <Link to='/home'>
                        <a className="navbar-brand " >
                            {/* <img src={logo} height='70'/> */}
                        </a>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
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
                        </li>                      
                    </ul>    
                               
                </div>
                
                    <NavLink className="nav-link" to='/cart'><CartWidget/></NavLink>
                
            </div>
        </nav>
    
  )
}

export default Nav