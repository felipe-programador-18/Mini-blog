// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// testing sing in with google account!!
import { getAuth, signInWithRedirect ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmwsOnUkUP5HIkwe-0_QIrNnVY6LUd7gs",
  authDomain: "another-test-c0a5c.firebaseapp.com",
  projectId: "another-test-c0a5c",
  storageBucket: "another-test-c0a5c.appspot.com",
  messagingSenderId: "877321056285",
  appId: "1:877321056285:web:79776bb1635576dec396f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export {db}


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})


export const auth = getAuth();
export const singInWithGooglePopup= () => signInWithPopup(auth, provider)  
