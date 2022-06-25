import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Container, Modal, Row } from 'react-bootstrap';
import { db, verificarTreinador } from '../../firebase';


export default function Assiduidade({atividadeAtual, currentUser, clubeSelected,atividadeSelecionada,tipoAtividadeSelecionada}) {
    const [show, setShow] = useState(false);
    const [idsClube,setIdsClube]=useState([]);
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


    useEffect(() =>{
      const getIdsClube = async() => {
          const docSnap = await getDoc(doc(db, "Clubes/"+clubeSelected+"/"+tipoAtividadeSelecionada+"/", atividadeSelecionada));
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

      {idsClube?.assiduidade?.map((idClube) => {
            return(
            <p>{idClube} </p>
            )
          })} 



    </Row>
</Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }