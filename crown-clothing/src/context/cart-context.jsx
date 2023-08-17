import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //check for existing cartItem
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
        )
    //increase no of cartItem in dropdown
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity : cartItem.quantity + 1}
            : cartItem
        )
    }

    //return modified array of cartitems/new cart
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart : () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        // note; the use of the reduce function takes into consideration the accumulator and the current value
        // in this instance the parameter, total represents the accumulator and the cartItem the current value
        const newCartCount = cartItems.reduce((total, cartItem) => (total + cartItem.quantity), 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}