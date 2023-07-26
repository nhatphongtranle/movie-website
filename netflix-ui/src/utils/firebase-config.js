// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4QUylzATbv2yCQOxKtELjiTZtSqQzDe8",
  authDomain: "react-movie-website-6eadf.firebaseapp.com",
  projectId: "react-movie-website-6eadf",
  storageBucket: "react-movie-website-6eadf.appspot.com",
  messagingSenderId: "980737230653",
  appId: "1:980737230653:web:ebc199840211bd9e206754",
  measurementId: "G-J3YC0R8ZFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);