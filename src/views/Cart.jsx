import React from 'react'
import { useNavigate } from 'react-router-dom'
import Compra from '../component/compra/Compra'
import { useCart } from '../context/CartContext'
import {FaWhatsapp } from "react-icons/fa";

const Cart = () => {
  const{cart,onAdd, emptyCart, totalCart}= useCart()
  const navegar = useNavigate()

  function iniciarChatear(){
    var products= ['zapato', 'mesa', 'silla']
    window.location.href = 'https://wa.me/+51978374972/?text=' + ' ' + products[0] + ' ' + products[1] + ' ' + products[2]
}

  return (
    <>
      {!cart.length?
      <div style={{textAlign:"center"}}>
        <h2>Tu carrito está vacío</h2>
        <h3>Tenemos obras de arte originales a grandes precios</h3>
        <button onClick={()=> navegar('/filtroinput')}>Ir a Obras de Arte</button>
        <p>Bienvenido a nuesta galeria de Arte!</p>
      </div>
         :
      <div style={{textAlign:"center"}} >
        <h2>Mi carrito</h2>
        {cart.map((compra)=> <Compra key={compra.id} compra={compra} /> )}
        <p>Total a pagar: ${totalCart()} </p>
        <button onClick={emptyCart}>Borrar carrito</button>
        <button >
        {/* <button onClick={()=> navegar('/checkout')}> */}
          {/* Finalizar compra */}
        <a style={{color:'black', textDecoration:'none'}} 
          target="_blank" rel="noreferrer" href='http://wa.me/+51978374972'
          
          >Termina la compra <FaWhatsapp/>
        </a>
        </button>
        {/* <button type="button"  onclick={iniciarChatear}>Confirmar compra</button> */}
        <div  >
            
            
        </div>
      </div>}
    </>
  )
}

export default Cart