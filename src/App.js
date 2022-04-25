import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-calendar/dist/Calendar.css';
import Home from './components/PageComponents/Home'
import Calendario from './components/PageComponents/Calendario'
import MeusClubes from './components/PageComponents/MeusClubes'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import FormLogin from './FormLogin'
import ProtectedRoutes from './components/PageComponents/ProtectedRoutes'
import FormName from './FormName'
import { db, useAuth } from './firebase';
import { Button } from 'react-bootstrap';
import { userAtual, ClubeSelecionadoID } from './GlobalData';
import { doc, getDoc } from 'firebase/firestore';



export default function App() {
  const [clubeSelecionadoID,setClubeSelecionadoID]= useState();
  const [atividadeSelecionada,setAtividadeSelecionada]= useState();
  const [tipoAtividadeSelecionada,setTipoAtividadeSelecionada]= useState();

  const currentUser=useAuth();

  useEffect(() => {
    const getClubeAtual = async () => {
    const docSnap = await getDoc(doc(db, "UsersTest/"+currentUser.uid));
    setClubeSelecionadoID(docSnap.data().clubeAtual)
    setAtividadeSelecionada(docSnap.data().atividadeAtual)
    setTipoAtividadeSelecionada(docSnap.data().tipoAtividade)
  }
  if (currentUser != null){
  getClubeAtual();
}
},[currentUser]) ;






  
  return (
    <div className="App">
    <div className="p-3 bg-dark text-white">
            <div>UID: {currentUser?.uid}</div>
            <div>Email: {currentUser?.email}</div>
            <div>Nome: {currentUser?.displayName}</div>
            <div>Clube Selecionado: {clubeSelecionadoID}</div>
            <div><Button href="/setname">changename</Button></div>
{/*
<br />
<br />
<br />
       <FormLogin/> */}

<br/>
<br/>
<userAtual.Provider value={currentUser?.uid}>
  <ClubeSelecionadoID.Provider value={[clubeSelecionadoID,setClubeSelecionadoID]}>
    <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/login" element={<FormLogin />} />
          <Route path="/setname" element={<FormName />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home currentUser={currentUser} clubeSelected={clubeSelecionadoID} atividadeSelecionada={atividadeSelecionada} tipoAtividadeSelecionada={tipoAtividadeSelecionada}/>} />
          <Route path="/calendar" element={<Calendario currentUser={currentUser} clubeSelected={clubeSelecionadoID} atividadeSelecionada={atividadeSelecionada}/>} />
          <Route path="/clubs" element={<MeusClubes />} />
          </Route>
        
        </Routes>
      </div>
    </BrowserRouter>
  </ClubeSelecionadoID.Provider>
</userAtual.Provider>
{/*   */}
</div>
</div>
);
}
 