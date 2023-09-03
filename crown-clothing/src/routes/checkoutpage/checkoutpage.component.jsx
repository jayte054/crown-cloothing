import { useContext } from "react"
// import { Elements } from "@stripe/react-stripe-js";
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import { CartContext } from "../../context/cart-context"
import PaymentForm from "../../components/payment-form/payment-form.component";
import "./checkoutpage.styles.scss"
// import { stripePromise } from "../../utils/stripe/stripe.utils";


const CheckoutPage = () => {
    const {cartItems, cartTotal} = useContext(CartContext)

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <div>
            {cartItems.map((cartItem) => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )}
            <span className="total">Total:  ₦{cartTotal}</span>
            </div>
            {/* <Elements stripe={stripePromise}> */}
            <PaymentForm />
            {/* </Elements> */}
        </div>
    )
}

export default CheckoutPage