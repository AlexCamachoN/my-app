import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ Children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    return ( 
        <CartContext.Provider value = {{ cart } } >
         { Children } 
        </CartContext.Provider>
    )
}