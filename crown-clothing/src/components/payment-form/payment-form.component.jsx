import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import  {Button, BUTTON_TYPES_CLASSES}  from "../button/button.component"
import "./payment-form.style.scss"

const PaymentForm = () => {
    const stripe = useStripe()
    const element = useElements()

    const paymentHandler = async (e) => {

        e.preventDefault()

        if(!stripe || !element) {
            return;
        }
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({amount: 1000})
        }).then(res => res.json())
        console.log(response)
    }

    return (
        <div className="payment-form-container">
            <div className="form-container">
                <h2>Credit Card Payment</h2>
            <CardElement />
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={(e) => paymentHandler(e)}>Pay Now</Button>
            </div>

        </div>
    )
}

export default PaymentForm