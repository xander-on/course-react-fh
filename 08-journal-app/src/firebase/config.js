// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeKDZNc51WyWDHuVQP8nTznCy_zL59s2k",
  authDomain: "react-cursos-84f44.firebaseapp.com",
  projectId: "react-cursos-84f44",
  storageBucket: "react-cursos-84f44.appspot.com",
  messagingSenderId: "1034330550147",
  appId: "1:1034330550147:web:f64fa989d2db36d72550b6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );