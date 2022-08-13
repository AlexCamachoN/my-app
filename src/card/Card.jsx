import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({personaje}) => {
  const navegar = useNavigate()

  return (
    <div className="card" style={{width:"16rem", margin:'1rem'}}>
        <img src={personaje.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{personaje.name} </h5>
            {/* <p className="card-text">Ficha Tecnica: {personaje.description} </p>
            <p className="card-text">Medidas: {personaje.medidas} </p>
            <p className="card-text">Category: {personaje.categoria} </p> */}
            <p className="card-text">Precio $: {personaje.price} </p>
            <button onClick={()=>navegar(`/detalle/${personaje.id}`)} className="btn btn-primary">Ver mas</button>
        </div>
    </div>
  )
}

export default Card