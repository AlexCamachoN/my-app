import React from 'react'
import {FaWhatsapp } from "react-icons/fa";
import PedidoCompleto from '../component/compra/PedidoCompleto';
import { useCart } from '../context/CartContext';

const Checkout = (props) => {
let producto1=[];
let precio1= [];
let codigo= [];
let total= 0;
  const{cart, totalCart,}= useCart()
  for (let i = 0; i < cart.length; i++){
  producto1[i]= cart[i].name
  precio1[i]= cart[i].price 
  codigo[i]= cart[i].codigo
}
  return (
    <div style={{background:"#f7f7f7",textAlign:"center", minHeight:'60.5vh'}}>
      <div style={{margin:"20px",}}>
        <h3>Detalle de tu compra</h3>
        <hr />
        <div style={{background:"#ffffff"}}>
        {cart.map((pedidocompleto)=> <PedidoCompleto key={pedidocompleto.id} pedidocompleto={pedidocompleto} /> )}
        <p>Total a pagar: ${total= totalCart()} </p></div>
        <hr />
      </div>   
      <button style={{background:"green"}} className="btn btn-success">
      <a style={{color:'white', textDecoration:'none', background:"green"}} 
          target="_blank" rel="noreferrer" href={`http://wa.me/+51942393308/?text=Tu pedido:%0A `
           + producto1 + `%0A $:` + precio1 +`%0A codigo:`+ codigo  +`%0A Total :`+ total} 
          > 
          <FaWhatsapp/> Completar Pedido en WhatsApp</a>         
      </button>
      <p></p>     
      {/* <ul>{listItems}</ul> */}
    </div>
  )
}

export default Checkout

//probando para pintar traer number por wasap
  // const numbers=[1,2,3,4];
  //   // const number = props.numbers;
  //   const listItems = numbers.map((num) =>
  //     <li key={num.toString()}>
  //       {num}
  //     </li>
  //   );