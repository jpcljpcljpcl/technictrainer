import React from 'react';
import {Button} from 'react-bootstrap';
import {Form, Row} from 'react-bootstrap';

export default function App() {
  return (
<div>


<Form>


  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Nome</Form.Label>
    <Form.Control placeholder="Nome" />
  </Form.Group>

  <Form.Label>Data de Nascimento</Form.Label>
  <Form.Control type="date" name="dob" placeholder="Date of Birth" />
  </Row>

  <Form.Label>Sexo</Form.Label>
  <Form.Select aria-label="Default select example">
  <option value="1">Masculino</option>
  <option value="2">Feminino</option>
</Form.Select>

  <Form.Group className="mb-3" >
    <Form.Label>Morada</Form.Label>
    <Form.Control placeholder="Avenida 8 Julho" />
  </Form.Group>

  <Button type="submit">
    Submit
  </Button>
</Form>




</div>
  );
}