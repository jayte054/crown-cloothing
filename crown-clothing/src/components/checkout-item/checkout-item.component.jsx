import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    const {clearCartItem, addItemToCart, removeItemFromCart} = useContext(CartContext)

    const removeHandler = () => {
       return clearCartItem(cartItem)
    }
    const removeItemHandler = () => {
        return removeItemFromCart(cartItem)
    }

    const addItemHandler = () => {
        return addItemToCart(cartItem)
    }

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
                <span className="name">{name}</span>            
                <span className="quantity">
                    <div className="arrow">
                    <span onClick={removeItemHandler}>&#10094;</span>
                    </div>
                    <span className="value">{quantity}</span>
                    <div className="arrow">
                    <span onClick={addItemHandler}>&#10095;</span>
                    </div>
                </span>            
                <span className="price">{price}</span>            
                <div className="remove-button" onClick={removeHandler}>&#10005;</div>            
        </div>
    )
}

export default CheckoutItem