import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCUysolgrljlfYsG2U12Rw8oMB1_JWYiAI",
  authDomain: "technictrainer-de426.firebaseapp.com",
  projectId: "technictrainer-de426",
  storageBucket: "technictrainer-de426.appspot.com",
  messagingSenderId: "950786264016",
  appId: "1:950786264016:web:428d1519df0c6c969647d5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);