// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbc7EyCJPQtrKlxy9r2h3PySoIfmoA3WU",
  authDomain: "mini-blog-a74af.firebaseapp.com",
  projectId: "mini-blog-a74af",
  storageBucket: "mini-blog-a74af.appspot.com",
  messagingSenderId: "463884436374",
  appId: "1:463884436374:web:8c5380258d2672c8a4d3b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export {db}