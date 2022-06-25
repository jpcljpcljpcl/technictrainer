import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import { db, marcarPresenca, useAuth } from '../../firebase';
import Assiduidade from './Assiduidade';
import { doc, getDoc } from 'firebase/firestore';


export default function Home({currentUser, clubeSelected,atividadeSelecionada,tipoAtividadeSelecionada}) {
const [atividadeAtual,setAtividadeAtual]=useState()

const handleMarcar = async () => {
  await marcarPresenca(clubeSelected,atividadeSelecionada,tipoAtividadeSelecionada,currentUser.displayName)
  alert("Presença Confirmada");
}

  
  useEffect(() =>{
      const getAtividadeAtual = async() => {
          const docSnap = await getDoc(doc(db, "Clubes/"+clubeSelected+"/"+tipoAtividadeSelecionada+"/", atividadeSelecionada));
/*           if (docSnap.exists()) { */
            setAtividadeAtual(docSnap.data())
            /* console.log(docSnap.data()); */
      };
      if (clubeSelected != null && currentUser != null && 
        atividadeSelecionada != null && tipoAtividadeSelecionada != null)  {
      getAtividadeAtual();
    }
  },[clubeSelected && currentUser && atividadeSelecionada && tipoAtividadeSelecionada])

  return (
    <Container>
              <Row>
            <Navbar/>
        </Row>
        <Row>
            <Timebar/>
        </Row>
        <Row>
          <h1>Bem vindo/a {currentUser?.displayName}</h1>
        </Row>
        <Row>
        <Assiduidade atividadeAtual={atividadeAtual} currentUser={currentUser} clubeSelected={clubeSelected} atividadeSelecionada={atividadeSelecionada} tipoAtividadeSelecionada={tipoAtividadeSelecionada}/>
        <Button onClick={handleMarcar}>Confirmar Presença na Atividade Atual</Button>
        </Row>
        <Row>
          <center>
          <h3>{atividadeAtual?.nome}</h3>
          <h5>{atividadeAtual?.data.toDate().getDate()}/{atividadeAtual?.data.toDate().getMonth()}/{atividadeAtual?.data.toDate().getFullYear()} </h5>
          <div>{atividadeAtual?.descricao}</div>
          <div></div>
</center>
        
      </Row>
    </Container>

  )
}
