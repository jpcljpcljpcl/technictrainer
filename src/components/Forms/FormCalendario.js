import React from 'react';
import { Form , Container, Row, Badge} from 'react-bootstrap';

export default function App() {
  return (
    
<Container>
    <Row>
      <Badge pill bg="secondary">Clube FC (clube selecionado)</Badge>
      <h1>Dia %%%%% (selecionado)</h1>

    </Row>
    <Row>
      <Form>
      
      <Form.Check inline label="Treino" name="entrada" type="radio" id="criarTreino" />
      <Form.Check inline label="Evento" name="entrada" type="radio" id="criarevento" />

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Form>
    </Row>
</Container>
  );
}