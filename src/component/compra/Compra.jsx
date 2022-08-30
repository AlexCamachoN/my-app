import React from 'react'
import { useCart } from '../../context/CartContext'

const Compra = ({compra}) => {
    const {removeItem}= useCart()
  return (
    <div style={{display:'flex', justifyContent: 'space-between', alignItem:'center', padding:'2rem'}}>
        <img src={compra.image} alt={compra.name} style={{width:'4rem'}} />
        <p>{compra.name} </p>
        <p>$ {compra.price} </p>
        <p>{compra.quantity} </p>
        <button onClick={()=> removeItem(compra.id)} style={{height:'2rem'}} className="btn btn-light">x</button>
    </div>
  )
}

export default Compra