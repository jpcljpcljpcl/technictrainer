import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, CardGroup, Card, Button} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import CriarClube from './CriarClube';
import { listarClubesPertencentes } from '../../firebase';
import { useAuth } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { where, query } from 'firebase/firestore';
import { userAtual, ClubeSelecionadoID } from '../../GlobalData';

export default function MeusClubes() {
  const [clubeAtualID,setClubeAtualID]=useContext(ClubeSelecionadoID);
  const userIdAtual = useContext(userAtual)

  const [clubes,setClubes]=useState([]);
  

  const atletasRef = collection(db, "ClubeTest");
  const q = query(atletasRef, where("uidAtletas","array-contains",userIdAtual))
const carregarClube = async (id) =>{
  setClubeAtualID(id);
}



  useEffect(() => {
    const getClubesPertencentes = async () => {
      const data = await getDocs(q);
      setClubes(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    }


    getClubesPertencentes();
  }, []);



  return (
    <Container>
        
        <Row>
            <Navbar/>
        </Row>
        <Row>
            <Timebar/>
        </Row>
        <Row>

        </Row>

        <Row>
        <CriarClube/>
        <div>
          <br/>
        </div>
        </Row>
        <Row>
          <p>{userIdAtual} Clube Selecionado : {clubeAtualID} </p>
        </Row>
        <Row>
            <CardGroup>
            
{clubes.map(club => {
  return (
<Card bg="light" style={{ width: '18rem', color: 'black'}}>
                <Card.Body>
                    <Card.Title>{club.id}</Card.Title>
                    <Card.Text>
                    {club.descricaoClube}                    
                    </Card.Text>
                    <Row>
                      <Col>
                        <Button onClick={() => {carregarClube(club.id)}}>Carregar Clube</Button>
                      </Col>
                    </Row>
                </Card.Body>
                </Card>

)})}
            </CardGroup>
        </Row>

        


    </Container>
  )
}