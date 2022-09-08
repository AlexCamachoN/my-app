import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { data } from '../../mocks/mockApi'
import Contenedor from '../contenedor/Contenedor'
import perfil from './Fotoperfil.jpg'
import fotogaleria from './paredgaleria.jpg'


const PromiseContainer = () => {
    const [lista, setLista] = useState([])
    const [loanding, setLoanding] = useState(true)
    const navigate= useNavigate()
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
    <div style={{margin:'10px', minHeight:'60.5vh', display:'', justifyContent:'center',  textAlign:'center', }}>
        <div style={{backgroundImage: "url(/img/fondogaleria.png)",}}>
            <p style={{padding:'10px', color:'white'}}>Bienvenido a nuestra galeria virtual de arte A.Camacho.N</p>
            <img src={fotogaleria} height='230' alt="" />
            <div>
            <button onClick={()=> navigate('/filtroinput')}  className="btn btn-outline-warning">Home</button>
            <button onClick={()=> navigate('/filtro/Abstracto')}  className="btn btn-outline-warning">Abstracto</button>
            <button onClick={()=> navigate('/retrato')} className="btn btn-outline-warning">Retratos</button>
            <button onClick={()=> navigate('/filtro/Bodegon')}  className="btn btn-outline-warning">Bodegones</button></div>
        </div>
        <p></p>
        <div>
            {/* <p>  <b>Alex Camacho Nuñez</b> </p> */}
            {/* <p >Artista Plástico</p> */}
            
            <img src={perfil} alt="" height='170' style={{borderRadius:'50%', border:'', boxShadow:'0px 0px 50px 0px rgba(0, 0, 0, 0.8)' }} />
            {/* <button>ver mas</button> */}
            <Contenedor/>
        </div>
<NavLink className="nav-link" to='/filtro/Paisaje'> 
        <div style={{margin:'6px', minHeight:'20.5vh', display:'', justifyContent:'center',
          textAlign:'center', backgroundColor:'#32ad69',backgroundImage: "url(/img/verde.png)" }} >
            <h2 style={{color:'white', fontSize:'75px'}}>Paisajes</h2>
            
        </div></NavLink>
    </div>
  )
}

export default PromiseContainer