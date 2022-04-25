import React, { Component, useContext, useEffect, useRef } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import 'react-day-picker/dist/style.css';
import CriarEvento from './CriarEvento';
import {useState} from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { db } from '../../firebase';
import { collection, connectFirestoreEmulator, doc, getDocs, query, where } from 'firebase/firestore';
import { ClubeSelecionadoID, userAtual} from '../../GlobalData';
import { el } from 'date-fns/locale';


export default function Calendario({currentUser, clubeSelected}) {
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState(today);
    const [atividades,setAtividades]=useState([]);
    const [clubeSelecionadoID,setClubeSelecionadoID]=useContext(ClubeSelecionadoID)
    const [isBusy,setIsBusy]=useState(false);
    const [treinoEvento,setTreinoEvento]=useState();
    const verEvento = useRef();
    const verTreino = useRef();

    const atividadesRef = collection(db, "ClubeTest/"+clubeSelected+"/"+treinoEvento);
    const q = query(atividadesRef, where("data","==",selectedDay), )
    
    const querySnapshot = query(collection(db, "ClubeTest/"+clubeSelected+"/"+treinoEvento));


    useEffect(() =>{
        setIsBusy(true);
        const getAtividades = async() => {
            const data = await getDocs(q);
            setAtividades(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
            setIsBusy(false);
        };
          
        
        if (clubeSelected != null ){
            getAtividades();
        }
    },[clubeSelected, selectedDay,  /* , tipoEventoTreino  */])
      


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
        <Form>
        <Form.Check inline label="Treino" name="entrada" type="radio" ref={verTreino} onClick={() => setTreinoEvento("treinos")}/>
        <Form.Check inline label="Evento" name="entrada" type="radio" ref={verEvento} onClick={() => setTreinoEvento("eventos")}/>
       </Form>
       {/*  <Button onClick={() => {handleCarregarAtividade()}}>Carregar</Button> */}

{/*        
 {atividades.map(atividade => {
  return (
<Card bg="light" style={{ width: '18rem', color: 'black'}}>
                <Card.Body>
                    <Card.Title>{atividade.nome}</Card.Title>
                    <Card.Text>
                    {atividade.descricao}                    
                    </Card.Text>
                    <Row>
                      <Col>
                        <Button>Carregar Clube</Button>
                      </Col>
                    </Row>
                </Card.Body>
                </Card>

)})}
 */}



       
 {atividades.map((atividade) => {
            return(
                <div>{atividade.nome}</div>
            )
        })} 
    </Col>
    <Col>
        <Row>
        <DayPicker 
/*             fromYear={2020} 
            toYear={2030} 
            captionLayout="dropdown"  */
            mode="single"
    /*         required
            selected={selectedDay} */
            onSelect={setSelectedDay}
            locale={pt}
            />
        </Row>
        <Row>
            <CriarEvento clubeSelected={clubeSelected}/>
        </Row>
    </Col>
</Row>



    </Container>
  )
}
