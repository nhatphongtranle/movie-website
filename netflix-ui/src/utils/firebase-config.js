import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPjXQNmjZWkDgMj1egFWDrjyS5kDCFPGY",
  authDomain: "movie-website-c10aa.firebaseapp.com",
  projectId: "movie-website-c10aa",
  storageBucket: "movie-website-c10aa.appspot.com",
  messagingSenderId: "620477274088",
  appId: "1:620477274088:web:9e1fca83b8c4f1a0b3765d",
  measurementId: "G-KPJBLJR8LN"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
