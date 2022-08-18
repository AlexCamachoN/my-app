import React from 'react'
import fotologo from '../logonegro.png'

const Publicidad = () => {
  return (
    <div style={{ background: " #f9faa6  ", minHeight:'8vh'}}>
      <div style={{marginLeft:"160px"}}>
        <img src={fotologo} alt="" height='80'/>
        
      </div>
        {/* <h2 style={{color:'white'}}>Felices fiestas patrias</h2> */}
    </div>
  )
}

export default Publicidad