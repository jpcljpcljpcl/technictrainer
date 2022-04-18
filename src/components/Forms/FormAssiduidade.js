import React from 'react';
import { Form , Container, Button, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    
<Container>
    <Row>
      <h1>Assiduidade</h1>
    </Row>
    <Row>
      <Form>
        <Form.Check type='checkbox' id='checkbox' label='Joao'/>
        <Button type="submit">Submit</Button>
      </Form>
    </Row>
</Container>
  );
}