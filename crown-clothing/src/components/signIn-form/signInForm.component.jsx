import { useState } from "react"
import { createUserDocumentFromAuth, 
         signInWithGooglePopup,
         signInAuthWithEmailAndPassword
         } 
from "../../utils/firebase/firebase.utils"
import { FormInput } from "../form-input/form-input.component"
import "./signInForm.component.styles.scss"
import {Button} from "../button/button.component"

const defaultFormFields = {
    email : "",
    password: "",
}



const SignInForm = () => {
const [formFields, setFormFields] = useState(defaultFormFields)
const { email, password,} = formFields


const resetFormFields = () => {
    setFormFields(defaultFormFields)
}
const signInWithGoogle = async() => {
    await signInWithGooglePopup()
} 

const handleSubmit = async(event) => {
    event.preventDefault()
   
    try{
        await signInAuthWithEmailAndPassword(email, password)
      resetFormFields()  

    }catch(error){
        switch(error.code) {
            case "auth/wrong-password":
            alert("incorrect password");
            break
            case "auth/user-not-found":
            alert("invalid email id")
            break
            default:
            console.log(error)
        }
    }
}

const handleChange = (event) => {
    const {name, value} = event.target

    setFormFields({...formFields, [name]: value})
}

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Please Provide Your Signin Details</span>
            <form onSubmit={handleSubmit}>
              
                <FormInput
                label = "Email" 
                type="email" 
                onChange = {handleChange} 
                name = "email" 
                value ={email} 
                required/>

                <FormInput
                label = "Password" 
                type="password" 
                onChange = {handleChange} 
                name= "password" 
                value ={password} 
                required/>

               <div className ="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType = "google" onClick={signInWithGoogle}>Google Sign-In</Button>
               </div>
            </form>
        </div>
    )
}
export default SignInForm