import React, { useState } from 'react'
import ItemCounter from '../component/itemCounter/ItemCounter'
import { useNavigate } from 'react-router-dom'

const Detalle = ({detalle}) => {
  const {id,image,price, name, description, stock}= detalle
  const [counter, setCounter]=useState(1)
  const [purchase, setPurchase]=useState(false)
  const navigate= useNavigate()
  const onAdd=()=>{
    let item={
      name,
      id,
      price,
      image,
      quantity: counter
    }
    setPurchase(true)
    console.log('compraste:', item)
  }
    
    // console.log(image)
  return (
    <div style={{margin:'10px', minHeight:'60.5vh', display:'flex', justifyContent:'center',  textAlign:'center',}}>
      <div>
        <img src={image} alt="" height='280px'/>
      </div>
      <div style={{width:'30%'}}>
        <p>Titulo: {name}  </p>
        <p>Preciio: $ {price} </p>
        <p> <b>Descripción:</b>{description}  </p> 
        {
          purchase
          ? <div>
            <button onClick={()=> navigate('/')}>seguir comprando</button>
            <button onClick={()=> navigate('/cart')}>ir al carrito</button>
          </div>
        
        : <ItemCounter stock={stock} onAdd={onAdd} counter={counter} setCounter={setCounter}   /> 
        }   
      </div>
    </div>
  )
}

export default Detalle