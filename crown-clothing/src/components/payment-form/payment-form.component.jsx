import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import  {Button, BUTTON_TYPES_CLASSES}  from "../button/button.component"
import "./payment-form.style.scss"

const PaymentForm = () => {
    const stripe = useStripe()
    const element = useElements()

    const paymentHandler = () => {

        if(!stripe || !element) {
            return;
        }

    }

    return (
        <div className="payment-form-container">
            <div className="form-container">
                <h2>Credit Card Payment</h2>
            <CardElement />
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={paymentHandler}>Pay Now</Button>
            </div>

        </div>
    )
}

export default PaymentForm