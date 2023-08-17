// import { useEffect } from "react"
// import { getRedirectResult } from "firebase/auth"
// import {
//     auth,
//     signInWithGoogleRedirect,
//      signInWithGooglePopup, 
//      createUserDocumentFromAuth } 
// from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/signUp-form/signUpForm.component"
import SignInForm from "../../components/signIn-form/signInForm.component"
import "./authentication.routes.styles.scss"


const Authentication =() => {
//    useEffect( () => {
//     async function redirect() {
//         const response =await  getRedirectResult(auth)
//         console.log(response)
//     }
//     redirect()
//    }, [])
    return (
        <div>
            <h2>Sign in page</h2>
            <div className="authentication-container">
           <SignInForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
            <SignUpForm />
        </div> 
        </div>
       
    )
}

export default Authentication