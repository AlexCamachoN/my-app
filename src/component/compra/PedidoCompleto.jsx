import React from 'react'

const PedidoCompleto = ({pedidocompleto}) => {
  return (
    <div style={{display:'flex', justifyContent: 'space-between', alignItem:'center', padding:'2rem', }}>    
        <p>{pedidocompleto.name} </p>
        <p>{pedidocompleto.codigo} </p>
        <p>Unds: {pedidocompleto.quantity} </p>   
        <p>${pedidocompleto.price} </p>
            
    </div>  
  )
}

export default PedidoCompleto