import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, CardGroup, Card, Button} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Timebar from '../Navbar/Timebar';
import CriarClube from './CriarClube';
import { carregarClube, verClubeAtual} from '../../firebase';
import { getDocs, collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { where, query } from 'firebase/firestore';
import { userAtual} from '../../GlobalData';


export default function MeusClubes() {
  const userIdAtual = useContext(userAtual)
  const [clubes,setClubes]=useState([]);

  const [clubeAtual, setClubeAtual] = useState();



  useEffect(() => {
    const getClubeAtual = async () => {
    const docSnap = await getDoc(doc(db, "UsersTest/"+userIdAtual));
    setClubeAtual(docSnap.data().clubeAtual)
  }
  getClubeAtual();
});


  const handleCarregarClube = async (id) =>{
  await carregarClube(id,userIdAtual);
  window.location.reload();
}


 const q = query(collection(db, "ClubeTest"), where("uidAtletas","array-contains",userIdAtual));


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
          <p>
            Clube Selecionado : {clubeAtual} </p>
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
                        <Button onClick={() => {handleCarregarClube(club.id)}}>Carregar Clube</Button>
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