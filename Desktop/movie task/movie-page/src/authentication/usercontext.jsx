// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBk8rFlVkIrbq183ZGjPMbg1H_LATW3Uss",
//   authDomain: "movie-page-c2991.firebaseapp.com",
//   projectId: "movie-page-c2991",
//   storageBucket: "movie-page-c2991.appspot.com",
//   messagingSenderId: "671228098877",
//   appId: "1:671228098877:web:f41f02f6bd557356956d54",
//   measurementId: "G-ZBSFERZNT1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import {  useState } from "react"
import { createContext } from "react"


 export const UserContext = createContext({
  username: "",
  setUsername: () => null
 })

// export const useUserContext = () => {
//   return useContext(UserContext)
// } 

export const UserProvider = ({children}) => {
  const [username, setUsername] = useState("")

  const value = {username, setUsername}
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}
