import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Container, Form, Modal, Row } from 'react-bootstrap';
import { db } from '../../firebase';


export default function Assiduidade({currentUser, clubeSelected,atividadeSelecionada,tipoAtividadeSelecionada}) {
    const [show, setShow] = useState(false);
    const [idsClube,setIdsClube]=useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    useEffect(() =>{
      const getIdsClube = async() => {
          const docSnap = await getDoc(doc(db, "ClubeTest/", clubeSelected));
/*           if (docSnap.exists()) { */
            setIdsClube(docSnap.data())
            console.log(docSnap.data());
      };
      if (clubeSelected != null && currentUser != null && 
        atividadeSelecionada != null && tipoAtividadeSelecionada != null)  {
          getIdsClube();
    }
  },[clubeSelected && currentUser && 
    atividadeSelecionada && tipoAtividadeSelecionada])



    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Assiduidade
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Assiduidade</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
    <Row>
      <Form>

      {idsClube.uidAtletas.map((idClube) => {
            return(
            <Form.Check type='checkbox' id={idClube} label={idClube}/>
            )
          })} 
        




      </Form>
    </Row>
</Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button>Guardar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }