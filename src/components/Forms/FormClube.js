import React, { useRef } from 'react';
import { Form , Container, Button, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { adicionarUserClube, criarClube, useAuth } from '../../firebase';

export default function App() {
  const currentUser= useAuth();
  const nomeClube = useRef();
  const descricaoClube = useRef();
  const criarSenha = useRef();

  const handleClubeCriar = () => {
    criarClube(nomeClube.current.value,criarSenha.current.value,descricaoClube.current.value,currentUser.uid)
  };

  const handleClubeEntrar = () => {
    adicionarUserClube(nomeClube.current.value,currentUser.uid,currentUser.displayName)
  };


  return (
<Container>
    <Row>

      <Form>
        <h3>Criar</h3>
      <Form.Control type="text" placeholder="Nome do Clube" ref={nomeClube}/>
      <br/>
      <Form.Group className="mb-3" >
    <Form.Label>Descrição do Clube</Form.Label>
    <Form.Control as="textarea" rows={4} ref={descricaoClube}/>
    <Form.Control type="text" placeholder="Criar senha de Acesso" ref={criarSenha}/>
    </Form.Group>
    <Button onClick={handleClubeCriar} >Criar</Button>
      </Form>
    </Row>
    <br/>
    <Row>
      <Form>
        <h3>Entrar</h3>
      <Form.Control type="text" placeholder="Senha de Acesso" />
      <br/>
      <Button onClick={handleClubeEntrar}>Entrar</Button>
      </Form>
    </Row>
</Container>
  );
}