import React from 'react'
import retrato from './retratoss.jpg'
import retrato3 from './retratotres.jpg'
import {FaWhatsapp } from "react-icons/fa";


const Retrato = () => {
  return (
    <div style={{margin:'15px',padding:'0px', minHeight:'60.5vh', textAlign:'center', }}>
      <div >
        <div style={{margin:'2px', textAlign:'center', backgroundColor:'#ebe4e4',padding:'10px' }}>
          <h5><b style={{color:'#8a6a13'}}>RETRATOS AL CARBONCILLO</b> </h5>
          <p>La técnica de dibujo en blanco y negro más usada y versátil capaz 
              de llegar a un realismo fotográfico.</p>
          <img src={retrato} alt="" height={150}/>
          
        </div>
        <div style={{background:'#ebe4e4', padding:'0px' }}>
            <p></p>
            <p></p>
            <p style={{padding:'12px'}}><b>¿Por qué adquirir un retrato?</b>  </p>
            <p style={{textAlign:'justify', margin:'10px' }}>En galeria A.Camacho.N Te ofrecemos la técnica de 
              <b style={{color:'#134aa3'}}> dibujo al carboncillo </b>  
                , en especial es el retrato que más nos gusta hacer y que son los que demuestran el 
                cariño y por qué no decirlo, el amor, que se tienen las personas. Tenemos muy
                claro que regalar un retrato al carboncillo es una demostración de amor y si 
                en el propio retrato, en la escena, se ven gestos como éste el resultado es muy
                emotivo.</p>
                <div>
                    <img src={retrato3} alt="" height={130} style={{ borderBlockStyle:'solid'}} />
                </div>
                <p>Precio desde: s/ 150.-</p>
                <button style={{background:"green"}} className="btn btn-success">
                <a style={{color:'white', textDecoration:'none', background:"green"}} 
                target="_blank" rel="noreferrer" href={`http://wa.me/+51942393308/?text=Necesito un retrato :%0A `
                } 
                > 
                <FaWhatsapp/> Necesito un retrato</a>         
                </button>
        </div>
      </div>
    </div>
  )
}

export default Retrato