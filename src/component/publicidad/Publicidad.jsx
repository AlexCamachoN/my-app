import React from 'react'
import './Publicidad.css'
import { Link } from 'react-router-dom'
import fotologo from '../logoblanco.png'

const Publicidad = () => {
  return (
    <div className="publicidad" style={{ background: " ", minHeight:'8vh',}}>
      <div style={{marginLeft:"160px"}}>
        {/* <img src={fotologo} alt="" height='80'/> */}
        <Link to='/promesa'>
          <a className="navbar-brand " >
            <img src={fotologo} height='80'/>
          </a>
        </Link>
      </div>
        {/* <h2 style={{color:'white'}}>Felices fiestas patrias</h2> */}
    </div>
  )
}

export default Publicidad