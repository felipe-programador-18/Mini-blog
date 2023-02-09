// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// testing sing in with google account!!
import { getAuth, signInWithRedirect ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVqusuAq7_YDiIuMlfzErr0rBtAnRzTmE",
  authDomain: "newblog-c8180.firebaseapp.com",
  projectId: "newblog-c8180",
  storageBucket: "newblog-c8180.appspot.com",
  messagingSenderId: "133154700793",
  appId: "1:133154700793:web:7a506bb426ffa8b80b1128"
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
