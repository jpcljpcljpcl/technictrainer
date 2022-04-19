import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import 'react-day-picker/dist/style.css';
import CriarEvento from './CriarEvento';
import {useState} from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function Calendario() {
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState(today);

  return (
    <Container>
        <Row>
            <Navbar/>
        </Row>
        <Row>
            <Timebar/>
        </Row>
        <Row>
        <h5>{format(selectedDay, 'PPP', {locale: pt})}</h5>
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
        <DayPicker 
/*             fromYear={2020} 
            toYear={2030} 
            captionLayout="dropdown"  */
            mode="single"
            required
            selected={selectedDay}
            onSelect={setSelectedDay}
            locale={pt}
            />
        </Row>
        <Row>
            <CriarEvento/>
        </Row>
    </Col>
</Row>



    </Container>
  )
}
