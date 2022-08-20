import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemCounter from '../component/itemCounter/ItemCounter'
import Detalle from './Detalle'

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
   
  return (
    <div>
      <Detalle detalle={detalle}/>
    </div>
    
    
  )
}

export default DetalleContainer