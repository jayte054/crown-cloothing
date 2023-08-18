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

const removeCartItem = (cartItems, cartItemToRemove) => {
    //run a check to be sure the cart item exists
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    // if the the cartItem equals 1, then remove it completely from the cart
    if (existingCartItem.quantity === 1 ) {
      return  cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }

    // return the remaining cartitems
    return cartItems.map((cartItem) => 
         cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
}

const clearItem = (cartItems, cartItemToClear) =>  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)


export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart : () => {},
    removeItemFromCart: () => {},
    clearCartItem: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        // note; the use of the reduce function takes into consideration the accumulator and the current value
        // in this instance the parameter, total represents the accumulator and the cartItem the current value
        const newCartCount = cartItems.reduce((total, cartItem) => (total + cartItem.quantity), 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = (cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price , 0))
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearCartItem = (cartItemToClear) => {
        setCartItems(clearItem(cartItems, cartItemToClear))
    }

    const value = {isCartOpen, 
                   setIsCartOpen, 
                   addItemToCart, 
                   cartItems, 
                   cartCount, 
                   removeItemFromCart,
                   clearCartItem,
                   cartTotal
                }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}