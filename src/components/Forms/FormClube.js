import React, { useRef } from 'react';
import { Form , Container, Button, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { adicionarUserClube, confirmarSenha, criarClube, useAuth, verificarClube } from '../../firebase';

export default function App() {
  const currentUser= useAuth();
  const nomeClube = useRef();
  const descricaoClube = useRef();
  const criarSenha = useRef();
  const senhaClube = useRef();
  const nomeEntrarClube = useRef();

  const handleClubeCriar = async () => {
    if(await verificarClube(nomeClube.current.value)){
      alert("Nome de clube já existente.");
    } else{
    await criarClube(nomeClube.current.value,criarSenha.current.value,descricaoClube.current.value,currentUser.uid)
    window.location.reload();}
  };

  const handleClubeEntrar = async () => {
    if (await confirmarSenha(nomeEntrarClube.current.value,senhaClube.current.value) === true){
    await adicionarUserClube(nomeEntrarClube.current.value,currentUser.uid,currentUser.displayName)
    window.location.reload();
    }else {
      alert("Dados incorretos");
    }
    
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
    <Form.Control type="text" placeholder="Senha de Acesso" ref={criarSenha}/>
    </Form.Group>
    <Button onClick={handleClubeCriar}>Criar</Button>
      </Form>
    </Row>
    <br/>
    <Row>
      <Form>
        <h3>Entrar</h3>
      <Form.Control type="text" placeholder="Nome do Clube" ref={nomeEntrarClube}/>
      <br/>
      <Form.Control type="text" placeholder="Senha de Acesso" ref={senhaClube} />
      <br/>
      <Button onClick={handleClubeEntrar}>Entrar</Button>
      </Form>
    </Row>
</Container>
  );
}