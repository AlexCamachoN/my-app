import React from 'react'
import fotologo from '../logoblanco.png'

const Publicidad = () => {
  return (
    <div style={{background: " #005aa3 ", textAlign:"left", minHeight:'8vh'}}>
      <div style={{display:'flex'}}>
        <img src={fotologo} alt="" height='80'/>
        <div style={{textAlign:'right'}}>
          <h1></h1>
        </div>
      </div>
        {/* <h2 style={{color:'white'}}>Felices fiestas patrias</h2> */}
    </div>
  )
}

export default Publicidad