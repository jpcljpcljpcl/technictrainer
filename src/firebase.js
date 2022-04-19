// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { useState, useEffect } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUysolgrljlfYsG2U12Rw8oMB1_JWYiAI",
  authDomain: "technictrainer-de426.firebaseapp.com",
  projectId: "technictrainer-de426",
  storageBucket: "technictrainer-de426.appspot.com",
  messagingSenderId: "950786264016",
  appId: "1:950786264016:web:bed05b202730766a9647d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}


export function logout(){
  return signOut(auth);
}

export function useAuth(){
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {setCurrentUser(user)});
      return unsub;

  }, [])
  return currentUser;
}

