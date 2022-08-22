import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    // console.log(cart)

    const addToCart=(item)=>{
        const isInCart = cart.some((prod)=> prod.id ===item.id)
        if(isInCart){
            //modificara la cantidad del objeto repetido
            const updatedCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    return { ...prod, quantity: prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(updatedCart)
        }else{
            setCart([...cart, item])//el spress que son los 3 puntos ayudan a no pisarse los datos, ojo.
        }
        
    }

    const emptyCart =()=>{
        setCart([])
    }

    const totalCart=()=>{
        //metodo de javasccrip que devuelve un solo resultado
        return cart.reduce((acumula, item)=> acumula += item.quantity * item.price, 0)//reduce tiene un valor incial
    }

    const removeItem = (id)=>{
        setCart(cart.filter((item)=>item.id!==id))
    }

    const cartQuantity =()=>{
        return cart.reduce((acc, item) =>acc += item.quantity,0)
    }
    return ( 
        <CartContext.Provider value = {{ cart, addToCart, emptyCart, totalCart, removeItem, cartQuantity} } >
         { children } 
        </CartContext.Provider>
    )
}

export const useCart = ()=> useContext(CartContext)