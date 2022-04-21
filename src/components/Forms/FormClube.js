import React from 'react';
import { Form , Container, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { criarClube } from '../../firebase';
import Nav from 'react-bootstrap/Nav'


export default function App() {


  return (

<Container>
    <Row>
    <Nav variant="pills" defaultActiveKey="criar">
  <Nav.Item>
    <Nav.Link eventKey="criar" checked>Criar</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="entrar">Entrar</Nav.Link>
  </Nav.Item>
</Nav>


      <Form>
      <Form.Check inline label="Criar" name="criarentraclube" type="radio" id="radioCriar"/>
      <Form.Check inline label="Entrar" name="criarentraclube" type="radio" id="radioEntrar"  />
      <Form.Control type="text" placeholder="Nome do Clube ou senha fornecida" />

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1 ">
    <Form.Label>Descrição do Clube</Form.Label>
    <Form.Control as="textarea" rows={3}/>
    </Form.Group>

      </Form>
    </Row>

    <Row>
    <h2>Gerar Chave de Convite</h2>
    </Row>
    <Row>
      <Form>
        <Row>
          <Col>
            <Button type="submit">Gerar Chave</Button>
          </Col>
          <Col>
            <Form.Control plaintext readOnly defaultValue="Chave" />
          </Col>
        </Row>
      </Form>
    </Row>
</Container>
  );
}