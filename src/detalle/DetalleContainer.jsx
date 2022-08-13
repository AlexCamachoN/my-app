import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DetalleContainer = () => {
    const[detalle, setDetalle] = useState({}) //variable de estado
    const {id}=useParams()//
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`https://62cdd7aaa43bf780085fb0f2.mockapi.io/acamachon/${id}`)
        .then((res)=>setDetalle(res.data))
        .catch((error)=>{
          console.log(error)
          navigate('/error')
        } )//atrapa el error
        
    },[id])
    const {image,price, name, description}= detalle
    console.log(image)
  return (
    <div style={{margin:'10px', minHeight:'60.5vh', display:'flex', justifyContent:'center',  textAlign:'center',}}>
      <div>
        <img src={image} alt="" height='280px'/>
      </div>
      <div style={{width:'30%'}}>
        <p>Titulo: {name}  </p>
        <p>Preciio: $ {price} </p>
        <p> <b>Descripción:</b>{description}  </p>       
      </div>
    </div>
    
    
  )
}

export default DetalleContainer