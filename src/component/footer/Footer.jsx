import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaWhatsapp,FaYoutube} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../logoblanco.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' 
          style={{backgroundColor:'black', padding:'2rem', display:'flex', justifyContent:'space-around',alignItems:'center' }}>
        <div>
          <Link to='/home'>
                          <a className="navbar-brand " >
                              <img src={logo} height='70'/>
                          </a>
                  </Link>
          <p style={{color:'white'}}>ACamachoN es una galeria virtual, en 
                        nuestra galeria de arte online podrá encontrar una gran variedad
                        de pinturas al óleo de diferentes estilos y temáticas: bodegones,
                        marinas, paisajes, etc.</p>
          <div  className='redes'>
              <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noreferrer" href='https://www.facebook.com/alexcamacho.artistaplastico/'><FaFacebookF/><i className="fa-brands fa-facebook"></i></a>
              <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noreferrer" href='https://www.instagram.com/invites/contact/?i=1oij3b98bdu0s&utm_content=1mrcejp'><FaInstagram/></a>
              <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noreferrer" href='https://www.youtube.com/channel/UCaW5UsTSNva5ayCb6tfI4Yg'><FaYoutube/></a>
              <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noreferrer" href='http://wa.me/+51942393308'><FaWhatsapp/></a>
          </div>
        </div>
    </div>
  )
}

export default Footer