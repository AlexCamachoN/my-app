import React from 'react'
import miluska from './carimiluska.png'
import carlos from './caricarlos.jpg'
import tanque from './caritanque.png'
import mocho from './carimocho.png'
import rosina from './carirosina.png'
import ministra from './cariministra.png'
import porky from './porky.png'
import pelao from './caripelao.png'
import victor from './carivictor.png'
import meir from './carimeir.png'
const Cartoon = () => {
  return (
    <div style={{background:"#FFFF33",margin:'6px', minHeight:'61.5vh', display:'',
    textAlign:'center', }}>
        <h6 style={{ fontSize:'30px', color:'#28B463' }}>Caricaturas</h6>
        <div style={{ fontSize:'30px', color:'#28B463', display:'flex', textAlign:'center',
         justifyContent:'center',  }}>
            <div>
                <img src={miluska} alt="" height='150' style={{marginLeft:'2px',padding:'2px'}} />               
                <img src={carlos} alt="" height='150' style={{marginLeft:'5px',padding:'2px'}} />
                <img src={tanque} alt="" height='150' style={{marginLeft:'2px',padding:'2px'}} />               
                <img src={mocho} alt="" height='150' style={{marginLeft:'5px',padding:'2px'}} />
                <img src={rosina} alt="" height='150' style={{marginLeft:'2px',padding:'2px'}} />               
                <img src={ministra} alt="" height='150' style={{marginLeft:'5px',padding:'2px'}} />
                <img src={porky} alt="" height='150' style={{marginLeft:'2px',padding:'2px'}} />               
                <img src={pelao} alt="" height='150' style={{marginLeft:'5px',padding:'2px'}} />
                <img src={victor} alt="" height='150' style={{marginLeft:'2px',padding:'2px'}} />               
                <img src={meir} alt="" height='150' style={{marginLeft:'5px',padding:'2px'}} />
                {/* <img src={miluska} alt="" height='150' style={{marginLeft:'2px',padding:'2px'}} />               
                <img src={miluska} alt="" height='150' style={{marginLeft:'5px',padding:'2px'}} />
                <img src={miluska} alt="" height='150' style={{marginLeft:'2px',padding:'2px'}} />               
                <img src={miluska} alt="" height='150' style={{marginLeft:'5px',padding:'2px'}} /> */}
            </div>
        </div>

    </div>
  )
}

export default Cartoon