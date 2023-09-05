import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import  {Button, BUTTON_TYPES_CLASSES}  from "../button/button.component"
import "./payment-form.style.scss"

const PaymentForm = () => {
    const stripe = useStripe();
    const element = useElements();

    const paymentHandler = async (e) => {
        console.log("payment")
        e.preventDefault();
        console.log("pay")
        if(!stripe || !element) {
            return;
        }
        console.log("return")

        try{
            console.log("response")
            const response = await fetch("/.netlify/functions/create-payment-intent", {
                statuscode: 200,
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({amount: 1000})
            }).then(res => res.json());
            console.log(response)
        }catch(error){
            console.log("this is the error",{error})
        }
        
    }

    return (
        <div className="payment-form-container">
            <div className="form-container">
                <h2>Credit Card Payment</h2>
            <CardElement />
            <Button type="button" buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={ paymentHandler }>Pay Now</Button>
            </div>

        </div>
    )
}

export default PaymentForm