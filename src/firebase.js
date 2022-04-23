// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useState, useEffect } from "react";
import { getFirestore,arrayUnion, collection, Timestamp ,addDoc, doc, setDoc,updateDoc, getDoc, getDocs, collectionGroup, query, where, } from "firebase/firestore";

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


export const db = getFirestore(app);

//////////////////////////
//criar clube
export async function criarClube(nomeClube,chaveClube,descricaoClube,uidTreinador){
  try{
    await setDoc(doc(db, "ClubeTest/"+nomeClube), {
      chaveClube,
      descricaoClube,
      uidTreinador,
      uidAtletas: [],
    });
    }catch{
      alert("Erro na criacao de clube");
    }
}
/*  criarClube("CNTN","pwclube","random descricao","12321312uidtreinador"); */
////////////////////////////////




////////////////////////////
//juntarClube
export async function juntarClube(nomeClube,uidAtual,nome){
  try{
    await setDoc(doc(db, "ClubeTest/"+nomeClube+"/atletas/", uidAtual), {
      nome,
    });
    await updateDoc(doc(db, "ClubeTest/",nomeClube),{
      uidAtletas: arrayUnion(uidAtual),
    }, { merge: true });
    }catch{
      alert("Erro na criacao de clube");
    }
}
/* juntarClube("CNTN","currentUser.Teste","currentUser.displayName"); */
////////////////////////////////








////////////////////////////////
//ListarClubes
export async function listarClubes(){
 const querySnapshot = await getDocs(collection(db, "ClubeTest"));
  try {
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());

});
  } catch {
    alert("Erro");
  }
}
/* listarClubes(); */
////////////////////////////////



////////////////////////////////
//ListarClubesPertencentes
export async function listarClubesPertencentes(uidAtual){
  const atletasRef = collection(db, "ClubeTest");
  const q = query(atletasRef, where("uidAtletas","array-contains",uidAtual), )
  const q2 = query(atletasRef, where("uidTreinador", "==" ,uidAtual), )

  try {
   const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  })

  const querySnapshot2 = await getDocs(q2);
  querySnapshot2.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

  } catch  {
    alert("Erro")
  }
 }
/*  listarClubesPertencentes("TaXMVDlbNKhh0TH7SuekZsNgdaB3") */
/////////////////////////////////




////////////////////////////////
//CriarEntrada na agenda
export async function criarEntrada(nomeClube,nome,data,descricao,tipoTreinoEvento){
  try{
    await addDoc(collection(db, "ClubeTest/"+nomeClube+"/"+tipoTreinoEvento), {
      nome,
      data,
      descricao,
      assiduidade: []
    });
    }catch{
      alert("Erro");
    }
}
criarEntrada("TesteSigasiga","Treino xpto teste","December 25, 1815","20x 100 1'45 vo2 max testestes","treinos");
////////////////////////////////


////////////////////////////////
//Gerir Assiduidade
export async function gerirAssiduidade(nomeClube,tipoTreinoEvento,uidTreinoEvento,arrayPresencas){
  try{
      await updateDoc(doc(db, "ClubeTest/"+nomeClube+"/"+tipoTreinoEvento,uidTreinoEvento),{
        assiduidade: arrayUnion.apply(this, arrayPresencas),
    });
    }catch{
      alert("Erro");
    }
}
/* gerirAssiduidade("CNTN","treinos","6WEr3F4x0jxUlh0CyPOV",["currentUser.Teste", "currentUser.uid"]); */
////////////////////////////////



////////////////////////////////
//ListarAgenda
export async function listarAgenda(nomeClube,tipoTreinoEvento){
  const querySnapshot = await getDocs(collection(db, "ClubeTest/"+nomeClube+"/"+tipoTreinoEvento));
   try {
 querySnapshot.forEach((doc) => {
   // doc.data() is never undefined for query doc snapshots
   console.log(doc.id, " => ", doc.data());
 });
   } catch {
     alert("Erro");
   }
 }
/*  listarAgenda("CNTN","treinos"); */
 ////////////////////////////////


 ////////////////////////////////
//listarAgendaEqualTo
export async function listarAgendaEqualTo(nomeClube,tipoTreinoEvento,data){
  const atletasRef = collection(db, "ClubeTest/"+nomeClube+"/"+tipoTreinoEvento);
  const q = query(atletasRef, where("data","==",new Date(data)), )


  try {
   const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  } catch  {
    alert("Erro")
  }
 }
/*  listarAgendaEqualTo("CNTN","eventos","1815/12/25") */
/////////////////////////////////



 ////////////////////////////////
//teste
export async function testeDoc(uidAtual){
 const atletasRef = collection(db, "ClubeTest");
 const q = query(atletasRef, where("uidAtletas","array-contains",uidAtual), )
 
 try {
  const querySnapshot = await getDocs(q);
 querySnapshot.forEach((doc) => {
   // doc.data() is never undefined for query doc snapshots
   console.log(doc.id, " => ", doc.data());
 });
 } catch  {
   alert("Erro")
 }
 
}
/*  testeDoc("currentUser.uid"); */


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


