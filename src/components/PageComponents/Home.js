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
      <div>Email logado : {currentUser?.email}</div>
              <Row>
            <Navbar/>
        </Row>
        <Row>
            <Timebar/>
        </Row>
        <Row>
        <Assiduidade />
        </Row>
        <Row>
        <div>
            Treino ....
            Treino ....
            Treino ....
            Treino ....
            Treino ....
            Treino ....
            Treino ....
            Treino ....
            
            
        </div>
      </Row>
    </Container>

  )
}
