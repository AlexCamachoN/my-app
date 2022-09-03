import React, { useState } from 'react'

const ItemCounter = ({stock, onAdd, counter, setCounter}) => {
    
  return (
    <div>
        <div style={{width:'250%',textAlign:'left',margin:'20px' }}>
          <button onClick={onAdd} className="btn btn-success">Comprar</button>
          <button onClick={()=>setCounter(counter + 1)} disabled={counter>stock} className="btn btn-outline-secondary">+</button>
          <span>{counter} </span>
          <button onClick={()=>setCounter(counter - 1)} disabled={counter<1} className="btn btn-outline-secondary">-</button>
            
            
        </div>
        
    </div>
  )
}

export default ItemCounter