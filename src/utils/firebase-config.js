// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDBjuHpIJ2uq_BhCHweqTKKId-7_-MiO5s",
  authDomain: "react-netflix-clone-d0156.firebaseapp.com",
  projectId: "react-netflix-clone-d0156",
  storageBucket: "react-netflix-clone-d0156.appspot.com",
  messagingSenderId: "140514424647",
  appId: "1:140514424647:web:bfde90f80366b1d7e5be62",
  measurementId: "G-91451QH7BP"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);