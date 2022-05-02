// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCATYHPw-cnTaDZuz7JCIyJXoRzco2FKa0",
  authDomain: "getitout-9c6ec.firebaseapp.com",
  projectId: "getitout-9c6ec",
  storageBucket: "getitout-9c6ec.appspot.com",
  messagingSenderId: "791778752556",
  appId: "1:791778752556:web:b47d99389ecf9787823989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Here Initialize the firestore
export const db = getFirestore(app)