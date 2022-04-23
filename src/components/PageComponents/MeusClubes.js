import React, { useEffect, useState } from 'react';
import { Container, Row, Col, CardGroup, Card, Button} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import CriarClube from './CriarClube';
import { listarClubesPertencentes } from '../../firebase';
import { useAuth } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';


export default function MeusClubes() {
  const currentUser=useAuth();

  const [clubes,setClubes]=useState([]);
  
  useEffect(() => {
    const getClubes = async () => {
      const data = await getDocs(collection(db, "ClubeTest"));
      setClubes(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }


    getClubes();
  }, []);



  return (
    <Container>
        
        <Row>
            <Navbar/>
        </Row>
        <Row>
            <Timebar/>
        </Row>
        <Row></Row>

        <Row>
        <CriarClube/>
        <div>
          <br/>
        </div>
        </Row>
        <Row>
            <CardGroup>
            <Card bg="dark" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Exemplo Clube</Card.Title>
                    <Card.Text>
                    EXEMPLO DESCRICAO CLUBE EXEMPLO DESCRICAO CLUBE EXEMPLO DESCRICAO CLUBE EXEMPLO DESCRICAO CLUBE EXEMPLO DESCRICAO CLUBE EXEMPLO DESCRICAO CLUBE EXEMPLO DESCRICAO CLUBE EXEMPLO DESCRICAO CLUBE EXEMPLO DESCRICAO CLUBE 
                    </Card.Text>
                    <Row>
                      <Col>
                        <Button>Carregar Clube</Button>
                      </Col>
                      <Col>
                        <Button>Criar Chave de Convite</Button>
                      </Col>
                    </Row>
                </Card.Body>
                </Card>



            </CardGroup>
        </Row>

        <div>
{clubes.map((clube) => {
  return (
    <div>
      {" "}
      <h1>{clube.id}</h1>
      <p> {clube.descricaoClube} </p>

    </div>

)})}
</div>
    </Container>
  )
}