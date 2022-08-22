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
      <div>
        <h2>Tu carrito esta vacio, te invitamos a ver nuestras obras de arte</h2>
        <button onClick={()=> navegar('/filtroinput')}>Ir a productos</button>
      </div>
         :
      <div >
        <h2>Mi carrito</h2>
        {cart.map((compra)=> <Compra key={compra.id} compra={compra} /> )}
        <p>Total a pagar: ${totalCart()} </p>
        <button onClick={emptyCart}>Borrar carrito</button>
        <button onClick={()=> navegar('/checkout')}>Finalizar compra</button>
      </div>}
    </>
  )
}

export default Cart