// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

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


export function useAuth(){
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {setCurrentUser(user)});
      return unsub;

  }, [])
  return currentUser;
}

export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
  return signOut(auth);
}



export function setUidProfile(nome){
  updateProfile(auth.currentUser, {displayName: nome}).then(() => {
    window.location.reload();
  })
}



//Database
//Database
//Database
//Database
//Database


const db = getFirestore(app);



export async function criarClube(nomeClube,chaveClube,descricaoClube,uidTreinador){
  try{
    await setDoc(doc(db, "ClubeTest/"+nomeClube), {
      chaveClube,
      descricaoClube,
      uidTreinador,
    });
    }catch{
      alert("Erro na criacao de clube");
    }
}

 criarClube("CNTN","pwclube","random descricao","12321312uidtreinador");

export async function juntarClube(nomeClube,uidAtual,nome){
  try{
    await setDoc(doc(db, "ClubeTest/"+nomeClube+"/atletas/", uidAtual), {
      nome
    });
    }catch{
      alert("Erro na criacao de clube");
    }
}

juntarClube("CNTN","currentUser.uid","currentUser.displayName");


export async function criarTreino(nomeClube,nome,data,descricao){
  try{
    await addDoc(collection(db, "ClubeTest/"+nomeClube+"/treinos/"), {
      nome,
      data,
      descricao
    });
    }catch{
      alert("Erro na criacao de clube");
    }
}

criarTreino("CNTN","Treino xpto teste","25/04/2022","20x 100 1'45 vo2 max");

/* async function testeDB(){
  try{
    await setDoc(doc(db, "cities/new-city-id"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
  });
  }catch{
    alert("Erro na criacao de clube");
  }
} 


testeDB();
*/


