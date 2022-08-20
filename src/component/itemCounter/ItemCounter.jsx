import React, { useState } from 'react'

const ItemCounter = ({stock, onAdd, counter, setCounter}) => {
    
  return (
    <div>
        <div>
            <button onClick={()=>setCounter(counter + 1)} disabled={counter>stock}>+</button>
            <span>{counter} </span>
            <button onClick={()=>setCounter(counter - 1)} disabled={counter<1}>-</button>
        </div>
        <button onClick={onAdd}>Comprar</button>
    </div>
  )
}

export default ItemCounter