import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { Button } from "../button/button.component"
import "./product-card.style.scss"

export const ProductCard = ({product}) => {
    const {price, name, imageUrl} = product
    const {addItemToCart} = useContext(CartContext)

    const addProduct = () => addItemToCart(product)
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt= {`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted"
                    onClick={addProduct}>
                Add to Card
            </Button>
        </div>
    )
}