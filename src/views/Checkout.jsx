import React from 'react'
import {FaWhatsapp } from "react-icons/fa";
import PedidoCompleto from '../component/compra/PedidoCompleto';
import { useCart } from '../context/CartContext';


const Checkout = () => {
  const{cart, totalCart}= useCart()
  return (
    <div style={{textAlign:"center", minHeight:'60.5vh'}}>
      <div style={{margin:"20px",}}>
        <h3>Detalle de tu compra</h3>
        {cart.map((pedidocompleto)=> <PedidoCompleto key={pedidocompleto.id} pedidocompleto={pedidocompleto} /> )}
        <p>Total a pagar: ${totalCart()} </p>
      </div>


      <button style={{background:"green"}}>
      <a style={{color:'black', textDecoration:'none', background:"green"}} 
          target="_blank" rel="noreferrer" href='http://wa.me/+51978374972'> 
          <FaWhatsapp/>Completar Pedido en WhatsApp</a>
      </button>
    </div>
  )
}

export default Checkout