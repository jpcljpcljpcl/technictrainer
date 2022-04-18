import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';



export default function Home() {
  return (
    <Container>
              <Row>
            <Navbar/>
        </Row>
        <Row>
            <Timebar/>
        </Row>
        <Row></Row>
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

    </Container>

  )
}
