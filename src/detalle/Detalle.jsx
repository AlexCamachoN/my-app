import React, { useState } from 'react'
import ItemCounter from '../component/itemCounter/ItemCounter'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './detalle.css';

const Detalle = ({detalle}) => {
  const {id,image,price, name, description, stock, codigo, medidas}= detalle
  const [counter, setCounter]=useState(1)
  const [purchase, setPurchase]=useState(false)
  const navigate= useNavigate()
  const {addToCart}=useCart()
  const onAdd=()=>{
    let item={
      name,
      id,
      price,
      codigo,
      image,
      quantity: counter
    }
    setPurchase(true)
    // console.log('compraste:', item)
    addToCart(item)
  }
    
    // console.log(image)
  return (
    <div 
    style={{margin:'10px', minHeight:'60.5vh', justifyContent:'center',  textAlign:'center',border:'4px'  }}
    >
      <div  >
        <img src={image} alt="" height='270px'/>
        <div style={{ width:'',textAlign:'left',display:'',margin:'20px', justifyContent:'center',lineHeight:'1rem' }}>
          <p style={{lineHeight:'0.1rem'}} ><b>Titulo</b>: "{name}" </p>
          <p style={{lineHeight:'0.1rem'}}><b>Código</b>: {codigo} </p>
          <p style={{lineHeight:'0.1rem'}}><b>Precio</b>: $ {price} </p>
          <p style={{lineHeight:'0.1rem'}}><b>Medidas</b>: {medidas} </p>
          <p > <b>Descripción </b>: {description} </p> 
        </div>
        {/* <div> */}       
        {
          purchase
          ? <div style={{width:'', display:'',textAlign:'center',margin:'20px',justifyContent:'center' }}>
              <button onClick={()=> navigate('/filtroinput')} className="btn btn-outline-primary">seguir comprando</button>
              
              <button onClick={()=> navigate('/cart')} className="btn btn-outline-success">ir al carrito</button>
            </div>       
        : <ItemCounter stock={stock} onAdd={onAdd} counter={counter} setCounter={setCounter}   /> 
        }   
      {/* </div> */}
      </div>
      
    </div>
  )
}

export default Detalle