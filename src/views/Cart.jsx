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
      <div style={{textAlign:"center", minHeight:'60.5vh'}}>
        <h2>Tu carrito está vacío</h2>
        <h3>Tenemos obras de arte originales a grandes precios</h3>
        <button onClick={()=> navegar('/filtroinput')} className="btn btn-outline-primary">Ir a Obras de Arte</button>
        <p>Bienvenido a nuesta galeria de Arte!</p>
      </div>
         :
      <div style={{background:"#f7f7f7",textAlign:"center"}} >
        <h2>Mi carrito</h2>
        <hr />
        <div style={{background:"#ffffff"}}>
        {cart.map((compra)=> <Compra key={compra.id} compra={compra} /> )}
        <p>Total a pagar: $ {totalCart()} </p></div>
        <hr />
        <button onClick={emptyCart} className="btn btn-outline-danger">Borrar carrito</button>

        {/* <button > */}
        <button onClick={()=> navegar('/checkout')} className="btn btn-outline-success">Iniciar compra </button>
        <p></p>
      </div>}
    </>
  )
}

export default Cart