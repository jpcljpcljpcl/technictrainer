import React from 'react';
import { Form , Container, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    
<Container>
    <Row>
      <h1>Criar ou Entrar em Clube</h1>
    </Row>
    <Row>
      <Form>
      <Form.Check inline label="Criar" name="entrada" type="radio" id="criarTreino" />
      <Form.Check inline label="Entrar" name="entrada" type="radio" id="criarEvento" />



      <Form.Control type="text" placeholder="Nome do Clube ou senha fornecida" />
      <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Row>
    <br />
    <Row>
    <h1>Gerar Chave de Convite</h1>
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