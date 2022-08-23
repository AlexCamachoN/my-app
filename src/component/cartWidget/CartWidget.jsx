import React from 'react'
import { BiCart } from 'react-icons/bi';
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const {cartQuantity, cart}= useCart()
  return (
    <div >
        {/* <span  >🛒</span> */}
        <BiCart style={{width:"2rem",height:"2rem", color:'white' }} />
        {!cart.length ? '' : <span style={{backgroundColor:'green', color:'white', padding:'.3rem', borderRadius:'180%'}}>{cartQuantity()|| "" } </span>}
    </div>
  )
}

export default CartWidget