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


  const handleCriarEntrada = () => {
    if (criarTreino.Check){
    criarEntrada("TesteSigasiga",nomeTreinoEvento.current.value,startDate,descricaoTreinoEvento.current.value,"treinos")
    }else
    criarEntrada("TesteSigasiga",nomeTreinoEvento.current.value,startDate,descricaoTreinoEvento.current.value,"eventos")
  };



  return (
   /*  criarEntrada("TesteSigasiga","Treino xpto teste","December 25, 1815","20x 100 1'45 vo2 max testestes","treinos"); */
<Container>
    <Row>
      <Badge pill bg="secondary">Clube FC (clube selecionado)</Badge>
      <h1>Dia %%%%% (selecionado)</h1>
      <DatePicker selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          locale="pt-PT" 
          ref={dataCriarTreinoEvento}/>
    </Row>
    <Row>
      <Form>
      
        <Form.Check inline label="Treino" name="entrada" type="radio" ref={criarTreino} />
        <Form.Check inline label="Evento" name="entrada" type="radio" ref={criarEvento} />
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