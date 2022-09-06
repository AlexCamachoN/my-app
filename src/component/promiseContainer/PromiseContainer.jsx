import React, { useEffect } from 'react'
import { useState } from 'react'
import { data } from '../../mocks/mockApi'
import Contenedor from '../contenedor/Contenedor'
import perfil from './Fotoperfil.jpg'
import fotogaleria from './paredgaleria.jpg'


const PromiseContainer = () => {
    const [lista, setLista] = useState([])
    const [loanding, setLoanding] = useState(true)
    //array de objetos
   
    //tratando promesa con then catch y finally
    // useEffect(()=>{
    //     data
    //     .then((response)=>setLista(response))
    //     .catch((error) => console.log(error))
    //     .finally(()=> setLoanding(false))
    // },[])
    //tratando promesa con async await try catch finally
    const getData = async ()=>{
        try{
            const respuesta = await data
            setLista(respuesta)
        }catch(error){
            console.log(error)
        }finally{
            setLoanding(false)
        }
    }
    
    useEffect(()=>{
        getData()
    })

  return (
    <div style={{margin:'10px', minHeight:'60.5vh', display:'', justifyContent:'center',  textAlign:'center',}}>
        <div>
            <p>Bienvenido a nuestra galeria virtual de arte A.Camacho.N</p>
            <img src={fotogaleria} height='230' alt="" />
        </div>
        <p></p>
        <div>
            {/* <p>  <b>Alex Camacho Nuñez</b> </p> */}
            {/* <p >Artista Plástico</p> */}
            
            <img src={perfil} alt="" height='170' />
            {/* <button>ver mas</button> */}
            <Contenedor/>
        </div>
    </div>
  )
}

export default PromiseContainer