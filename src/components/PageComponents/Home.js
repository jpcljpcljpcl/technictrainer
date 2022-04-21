import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import { useAuth } from '../../firebase';
import Assiduidade from './Assiduidade';

export default function Home() {
  
  const currentUser=useAuth();

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
        <div>Treino ....</div>
        <div>Treino ....</div>
        <div>Treino ....</div>
        <div>Treino ....</div>
        <div>Treino ....</div>
        <div>Treino ....</div>
        <div>Treino ....</div>
        <div>Treino ....</div>
        <div>Treino ....</div>
        <div>Treino ....</div>

        
      </Row>
    </Container>

  )
}
