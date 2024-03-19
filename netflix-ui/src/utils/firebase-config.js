import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4QUylzATbv2yCQOxKtELjiTZtSqQzDe8",
  authDomain: "react-movie-website-6eadf.firebaseapp.com",
  projectId: "react-movie-website-6eadf",
  storageBucket: "react-movie-website-6eadf.appspot.com",
  messagingSenderId: "980737230653",
  appId: "1:980737230653:web:ebc199840211bd9e206754",
  measurementId: "G-J3YC0R8ZFG"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
