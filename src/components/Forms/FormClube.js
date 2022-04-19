import React from 'react';
import { Form , Container, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    
<Container>
    <Row>
      <Form>
      <Form.Check inline label="Criar" name="entrada" type="radio" id="criarTreino" />
      <Form.Check inline label="Entrar" name="entrada" type="radio" id="criarEvento" />
      <Form.Control type="text" placeholder="Nome do Clube ou senha fornecida" />

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