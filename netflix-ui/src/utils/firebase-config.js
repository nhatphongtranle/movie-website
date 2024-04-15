import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8xoPtrNY67RAWjywkr2Iw9hHEAK2TtRM',
  authDomain: 'react-netflix-clone-43739.firebaseapp.com',
  projectId: 'react-netflix-clone-43739',
  storageBucket: 'react-netflix-clone-43739.appspot.com',
  messagingSenderId: '590126962951',
  appId: '1:590126962951:web:bf789180b66ed5ad0bcda2',
  measurementId: 'G-QRMMB0GE9J',
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
