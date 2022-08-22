import React from 'react'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const {cartQuantity}= useCart()
  return (
    <div>
        <span >🛒</span>
        <span>{cartQuantity()|| "" } </span>
    </div>
  )
}

export default CartWidget