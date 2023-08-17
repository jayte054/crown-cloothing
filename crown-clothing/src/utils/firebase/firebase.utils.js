import { initializeApp } from "firebase/app"
import { signInWithPopup,   
         GoogleAuthProvider, 
         getAuth, 
         signInWithRedirect,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
        } 
from "firebase/auth"
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDpMS6W3Rg8RRzlVSaCS5PU5N1RRL453pc",
    authDomain: "crown-clothing-db-6bdf8.firebaseapp.com",
    projectId: "crown-clothing-db-6bdf8",
    storageBucket: "crown-clothing-db-6bdf8.appspot.com",
    messagingSenderId: "969900728307",
    appId: "1:969900728307:web:fc54378ac3af6863b1bc86"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  

  const googleProvider = new GoogleAuthProvider()

  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
     

      if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
          })

        }catch(error) {
          console.log("error creating user", error.message)
        }
      }
    return userDocRef
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async() => await signOut(auth)

  export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback)