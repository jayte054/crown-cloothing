import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import "./cart-icon.styles.scss"
import {AiOutlineShopping} from "react-icons/ai"


const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    

    const toggleDropdown = () => setIsCartOpen(!isCartOpen)
    return (
        <div className="cart-icon-container" onClick={toggleDropdown}>
            <AiOutlineShopping className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon