import React from 'react';
import { Form , Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    
<Container>
    <Row>
      <Form>
        <Form.Check type='checkbox' id='checkbox' label='Joao'/>
        <Form.Check type='checkbox' id='checkbox' label='Ricardo'/>
        <Form.Check type='checkbox' id='checkbox' label='Pedro'/>
      </Form>
    </Row>
</Container>
  );
}