import React, { useState } from 'react'

const ItemCounter = ({stock, onAdd, counter, setCounter}) => {
    
  return (
    <div>
        <div >
            <button onClick={()=>setCounter(counter + 1)} disabled={counter>stock} className="btn btn-outline-secondary">+</button>
            <span>{counter} </span>
            <button onClick={()=>setCounter(counter - 1)} disabled={counter<1} className="btn btn-outline-secondary">-</button>
            <hr />
        </div>
        <button onClick={onAdd} className="btn btn-success">Comprar</button>
    </div>
  )
}

export default ItemCounter