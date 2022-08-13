import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaWhatsapp,FaYoutube} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../logoblanco.png'

const Footer = () => {
  return (
    <footer style={{backgroundColor:'black', padding:'2rem', display:'flex', justifyContent:'space-around',alignItems:'center' }}>
        <Link to='/home'>
                        <a className="navbar-brand " >
                            <img src={logo} height='70'/>
                        </a>
                </Link>
        <p style={{color:'white'}}>Somos una Galeria de arte</p>
        <div  >
            <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noreferrer" href='https://www.facebook.com/alexcamacho.artistaplastico/'><FaFacebookF/><i className="fa-brands fa-facebook"></i></a>
            <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noreferrer" href=''><FaInstagram/></a>
            <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noreferrer" href=''><FaYoutube/></a>
            <a style={{color:'white', textDecoration:'none'}} target="_blank" rel="noreferrer" href='http://wa.me/+51978374972'><FaWhatsapp/></a>
        </div>
    </footer>
  )
}

export default Footer