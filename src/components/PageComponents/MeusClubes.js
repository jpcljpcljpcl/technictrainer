import React from 'react';
import { Container, Row, Col, CardGroup, Card, Button} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import CriarClube from './CriarClube';
import { listarClubesPertencentes } from '../../firebase';
import { useAuth } from '../../firebase';


export default function MeusClubes() {
  const currentUser=useAuth();




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
        
    </Container>
  )
}