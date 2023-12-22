// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyC2LQv8IRKLwYKCfvdQ9v0ShcmJztlBELo",
  authDomain: "hiring-portal-d18df.firebaseapp.com",
  projectId: "hiring-portal-d18df",
  storageBucket: "hiring-portal-d18df.appspot.com",
  messagingSenderId: "994410458952",
  appId: "1:994410458952:web:4057f562e1a95b87200d7d",
  measurementId: "G-4V9FE7XNF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
console.log(db)
export {db};