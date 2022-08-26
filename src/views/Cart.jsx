import React from 'react'
import { useNavigate } from 'react-router-dom'
import Compra from '../component/compra/Compra'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const{cart, emptyCart, totalCart}= useCart()
  const navegar = useNavigate()

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

        {/* <button > */}
        <button onClick={()=> navegar('/checkout')}>Iniciar compra </button>
      </div>}
    </>
  )
}

export default Cart