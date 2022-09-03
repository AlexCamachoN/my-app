import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({personaje}) => {
  const navegar = useNavigate()

  return (
    //width:"16 rem"
    <div className="card" style={{width:"18rem", margin:'1rem',background:"", textAlign:'center', justifyContent:'center'}} >
        <img src={personaje.image} className="card-img-top" alt="..." onClick={()=>navegar(`/detalle/${personaje.id}`)}/>
        <div className="card-body">
            <h5 className="card-title">{personaje.name} </h5>
            {/* <p className="card-text">Ficha Tecnica: {personaje.description} </p>
            <p className="card-text">Medidas: {personaje.medidas} </p>
            <p className="card-text">Category: {personaje.categoria} </p> */}
            <p className="card-text">Precio $: {personaje.price} </p>
            <button onClick={()=>navegar(`/detalle/${personaje.id}`)} className="btn btn-outline-primary">Ver mas</button>
        </div>
    </div>
  )
}

export default Card