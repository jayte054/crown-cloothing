require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async(e) => {
   console.log("amount")
   console.log(e)
   try{
    console.log("amount")
    const {amount} = JSON.parse(e.body)
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency : "usd",
        payment_method_types: ["card"]
    })
    const response = {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentIntent }),
      };
      return response;
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({paymentIntent})
    // }
   }catch (error) {
    console.log("this is the error", {error})

    return {
        statusCode: 400,
        body: JSON.stringify({error})
    }
   }
}