import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { DayPicker } from 'react-day-picker';
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import 'react-day-picker/dist/style.css';

export default function Calendario() {
  return (
    <Container>
        <Row>
            <Navbar/>
        </Row>
        <Row>
            <Timebar/>
        </Row>
        <Row>
        <h1>Dia %%%%%%% (dia selecionado) (primeira vez abre com o dia atual)</h1>
</Row>

<Row>
    <Col>
        <h1>Agenda Diaria</h1>
        <div>Agenda com horario de tarefas</div>
        <div>Agenda com horario de tarefas</div>
        <div>Agenda com horario de tarefas</div>
        <div>Agenda com horario de tarefas</div>
        <div>Agenda com horario de tarefas</div>
        <div>Agenda com horario de tarefas</div>
    </Col>
    <Col>
        <Row>
            <DayPicker mode="single"/>
        </Row>
        <Row>
            <Button>Criar Evento</Button>
        </Row>
    </Col>
</Row>



    </Container>
  )
}
