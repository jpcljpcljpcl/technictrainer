import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Container, Form, Modal, Row } from 'react-bootstrap';
import { db, verificarTreinador } from '../../firebase';


export default function Assiduidade({currentUser, clubeSelected,atividadeSelecionada,tipoAtividadeSelecionada}) {
    const [show, setShow] = useState(false);
    const [idsClube,setIdsClube]=useState();
    const [nomes,setNomes]=useState([]);
    const [desativo, setDesativo] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlePermissao = async () => {
      if (await verificarTreinador(clubeSelected,currentUser.uid)){
        setDesativo(false);
      }else {
        setDesativo(true);
      }
      
    };

    handlePermissao();


/*     function getNomes() {
      {idsClube.uidAtletas.map((idClube) => {
        return(
        
        )
      })}  
    } */
/*   
    const q = query(collection(db, "UsersTest"), where("id","array-contains",userIdAtual)); */


    useEffect(() =>{
      const getNomes = async() => {
          const docSnap = await getDoc(doc(db, "Clubes/", clubeSelected));
          if (docSnap.exists()) {
            setNomes(docSnap.data())
            }
      };
      if (idsClube != null)  {
          getNomes();
    }
  },[clubeSelected && currentUser && 
    atividadeSelecionada && tipoAtividadeSelecionada])


    useEffect(() =>{
      const getIdsClube = async() => {
          const docSnap = await getDoc(doc(db, "Clubes/", clubeSelected));
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


/*  useEffect(() =>{
  {idsClube.uidAtletas.map((idClube) => {
    return(
    <Form.Check type='checkbox' id={idClube} label={idClube}/>
    )
  })}  



}) */

    



    return (
      <>
        <Button variant="primary" onClick={handleShow} disabled={desativo}>
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
{/* 
      {idsClube.uidAtletas.map((idClube) => {
            return(
            <Form.Check type='checkbox' id={idClube} label={idClube}/>
            )
          })}  */}
        




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