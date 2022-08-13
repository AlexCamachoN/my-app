import React, {useState} from 'react'
// import './Contenedor.css'
import fotogrado from './gradobachillerfrontal.jpeg'

const Contenedor = ({data}) => {
    const [show, setShow] =useState(false)
    const [grado, setGrado]=useState(false)

    const handleShw = () =>{
        setShow(!show)
    }
    
    const handleSho =()=>{
        setGrado(!grado)
      }
      
    return (  
    <div>
        <h3>Alex Camacho Nuñez</h3>
        <p><b>Artista Plástico</b></p>
        {/* <h3>{data} </h3> */}
        <div>
            <p>Nace en <strong> Chulucanas</strong>, Piura, Perú en 1989, 
            donde aún reside. Despierta un gran interés por el dibujo y 
            la ilustración desde temprana edad. <strong> Bachiller en artes
             plasticas</strong>, donde aprende a trabajar con diferentes 
             técnicas como el dibujo, pastel, carboncillo, acuarela, acrílico, y oleo.</p>

            {show &&<p>La obra de Alex Camacho, encierra la búsqueda de una identidad plástica
                 que se enmarca en una síntesis abstracta geométrica, donde la esencia humana 
                 se evidencia a partir de estructuras morfológicas planas y transparentes que 
                 buscan conferir dinamismo a partir sutiles trazos lineales en sus contornos, 
                 los cuales asemejan a halos que mistifican el alma del ser. Su tratamiento 
                 compositivo se caracteriza por el uso de una serie de grafismos que configuran 
                 planos tipográficos que versan una lectura de la vida de nuestra sociedad del momento;
                  este elemento conjuntamente con los procesos de traslapes y empastes cromáticos configuran 
                  un panorama factural plástico que es vital en el tratamiento de la obra del artista. 
            </p>
               } 

            <button onClick={handleShw} style={{background: " #dae66f "}} >{show?'Leer menos' :'Leer sobre su propuesta artistica'}</button>

            
        </div>
        <th></th>

        <div>
            
            {grado && <div><img src={fotogrado} height='400' /></div> }

            <button onClick={handleSho}> {grado?'Ver menos':'Ver grado bachiller'} </button>
        </div>
        

    </div>
  )
}

export default Contenedor