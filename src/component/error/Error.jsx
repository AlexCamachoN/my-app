import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const volver= useNavigate()
  return (
    <div style={{margin:'10px', minHeight:'60.5vh', display:'flex', justifyContent:'center',  textAlign:'center',}}>
        <p>Error, no encontramos la ruta</p>
        <div>
          <button onClick={()=>volver('/') }>volver</button>
        </div>
    </div>
  )
}

export default Error