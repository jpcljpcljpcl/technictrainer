import React from 'react';
import { Form , Container, Row, Badge, Button} from 'react-bootstrap';
import { criarEntrada, useAuth } from '../../firebase';
import { useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const currentUser= useAuth();
  const criarTreino = useRef();
  const criarEvento = useRef();
  const nomeTreinoEvento = useRef();
  const descricaoTreinoEvento = useRef();
  const dataCriarTreinoEvento = useRef();

  const [startDate, setStartDate] = useState(new Date());
  const [active, setActive] = useState();

  const handleCriarEntrada = () => {
    if (active == 0){
    criarEntrada("TesteSigasiga",nomeTreinoEvento.current.value,startDate,descricaoTreinoEvento.current.value,"treinos")
    }
    if (active == 1)
    criarEntrada("TesteSigasiga",nomeTreinoEvento.current.value,startDate,descricaoTreinoEvento.current.value,"eventos")
    if (active == null){
      alert("Selecione Tipologia")
    }
  };



  return (
   /*  criarEntrada("TesteSigasiga","Treino xpto teste","December 25, 1815","20x 100 1'45 vo2 max testestes","treinos"); */
<Container>
    <Row>
      <Badge pill bg="secondary">Clube FC (clube selecionado)</Badge>
      <h3>Selecione data</h3>
      <DatePicker selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          locale="pt-PT" 
          ref={dataCriarTreinoEvento}/>
    </Row>
    <Row>
      <Form>
      
        <Form.Check inline label="Treino" name="entrada" type="radio" ref={criarTreino} onClick={() => setActive(0)}/>
        <Form.Check inline label="Evento" name="entrada" type="radio" ref={criarEvento} onClick={() => setActive(1)}/>
        <Form.Control type="text" placeholder="Titulo Treino/Evento" ref={nomeTreinoEvento}/>
        <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={4} ref={descricaoTreinoEvento}/>
        </Form.Group>
        <Button onClick={handleCriarEntrada}>Criar</Button>
      </Form>
    </Row>
</Container>
  );
}