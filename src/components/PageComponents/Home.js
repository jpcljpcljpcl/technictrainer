import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import { db, useAuth } from '../../firebase';
import Assiduidade from './Assiduidade';
import { doc, getDoc } from 'firebase/firestore';


export default function Home({currentUser, clubeSelected,atividadeSelecionada,tipoAtividadeSelecionada}) {
const [atividadeAtual,setAtividadeAtual]=useState()

  
  
  useEffect(() =>{
      const getAtividadeAtual = async() => {
          const docSnap = await getDoc(doc(db, "ClubeTest/"+clubeSelected+"/"+tipoAtividadeSelecionada+"/", atividadeSelecionada));
          if (docSnap.exists()) {
            setAtividadeAtual(docSnap.data())
            console.log(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
          
      };
      
      if ((clubeSelected && currentUser && 
        atividadeSelecionada && tipoAtividadeSelecionada) != null ){
      getAtividadeAtual();
    }
  },[clubeSelected && currentUser && 
    atividadeSelecionada && tipoAtividadeSelecionada])

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
        <Assiduidade />
        </Row>
        <Row>
          <h3>Treino dia %%</h3>  
{/*           <div>{atividadeAtual.nome}</div> */}
        

        
      </Row>
    </Container>

  )
}
