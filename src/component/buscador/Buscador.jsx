import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../../card/Card'

const Buscador = () => {
  const [acamachon, setAcamachon]= useState([])
  const [busqueda, setBusqueda]= useState('')
  const [resultadoBusqueda, setResultadoBusqueda]= useState([])
  
  const filtrar=(personajeAbuscar)=>{
        //analizar lo que tenfo que filtrar
        let action =acamachon.filter((personaje)=>personaje.name.toLowerCase().startsWith(personajeAbuscar.trim().toLowerCase()))
        setResultadoBusqueda(action)
      }

  //se pide la data de personajes
  useEffect(()=>{
    fetch('https://62cdd7aaa43bf780085fb0f2.mockapi.io/acamachon')
    .then((res)=>res.json())
    .then((response)=>setAcamachon(response))
  },[])
  //  console.log(acamachon)
  
  //aqui se guarda la data de personajes
  useEffect(()=>{
    setResultadoBusqueda(acamachon)
  },[acamachon])

  

  //evento que se llama en el input
  const changeHandler =(e)=>{
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }

  

  // console.log(busqueda)
  // console.log(resultadoBusqueda)
  // const ejemplo =acamachon.map((personaje)=>console.log(personaje.name))
  // console.log(ejemplo)
  return (
    <div>
      <h2>Busca tu obra ... </h2>
      <input type="text" placeholder='Busca tu obra preferida' onChange={changeHandler} />
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {resultadoBusqueda.map((personaje)=> <Card key={personaje.id} personaje={personaje} />)}
      </div>
    </div>
  )
}

export default Buscador