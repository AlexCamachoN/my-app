import React, { useEffect, useState } from 'react'
import List from '../list/List'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Fecht = () => {
  const [personajes, setPersonajes]= useState([])
  const [loanding, setLoanding]= useState(true)
  const [error, setError]= useState(null)
  const {category}=useParams() //traemos el dato del params

  //fetch
  // useEffect(()=>{
  //   fetch("https://62cdd7aaa43bf780085fb0f2.mockapi.io/acamachon")
  //   .then((res)=>res.json())
  //   .then((json)=> setPersonajes(json))
  //   // .then((json)=>setPersonajes(json.results))
  //   .catch((error)=>console.log(error))
  // },[])

  //axios
  useEffect(()=>{
    axios.get("https://62cdd7aaa43bf780085fb0f2.mockapi.io/acamachon")
    .then((res)=>{
      if(!category){
        setPersonajes(res.data)
      }else{
        setPersonajes(res.data.filter((personajes)=>personajes.category===category))
      }
    }) //debo accedera data en axios
    .catch((error)=> setError(true))//atrapa el error
    .finally(()=>setLoanding(false))
  },[category])
  
  
  return (
    <div>
      {loanding? <p>cargando</p>
      : error? <p>Error, vuelva a intentar</p>
      :  <List personajes={personajes} />}
    </div>
  )
}

export default Fecht