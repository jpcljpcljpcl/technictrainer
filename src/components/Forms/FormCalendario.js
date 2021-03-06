import React from 'react';
import { Form , Container, Row, Badge, Button} from 'react-bootstrap';
import { criarEntrada, useAuth } from '../../firebase';
import { useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormCalendario({clubeSelected}) {
  const criarTreino = useRef();
  const criarEvento = useRef();
  const nomeTreinoEvento = useRef();
  const descricaoTreinoEvento = useRef();
  const dataCriarTreinoEvento = useRef();

  const [startDate, setStartDate] = useState(new Date());
  const [active, setActive] = useState();

  const handleCriarEntrada = async () => {
    const event = new Date(startDate);
    event.setHours(0);
    event.setMinutes(0);
    event.setSeconds(0);
    if (active === 0){
    await criarEntrada(clubeSelected,nomeTreinoEvento.current.value,event,descricaoTreinoEvento.current.value,"treinos")
    window.location.reload();
    }
    if (active === 1){
    await criarEntrada(clubeSelected,nomeTreinoEvento.current.value,event,descricaoTreinoEvento.current.value,"eventos")
    window.location.reload();
    }
    if (active == null){
      alert("Selecione Tipologia")
    }
    
  };



  return (
   
<Container><center>
    <Row>
      <Badge pill bg="secondary">{clubeSelected}</Badge>
      <h3>Selecione data</h3>
      <DatePicker selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          ref={dataCriarTreinoEvento}/>
    </Row>
    <Row>
      <Form>
      
        <Form.Check inline label="Treino" name="entrada" type="radio" ref={criarTreino} onClick={() => setActive(0)}/>
        <Form.Check inline label="Evento" name="entrada" type="radio" ref={criarEvento} onClick={() => setActive(1)}/>
        <Form.Control type="text" placeholder="Titulo Treino/Evento" ref={nomeTreinoEvento}/>
        <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={4} placeholder="Descrição" ref={descricaoTreinoEvento}/>
        </Form.Group>
        <Button onClick={handleCriarEntrada}>Criar</Button>
        
      </Form>
    </Row></center>
</Container>
  );
}