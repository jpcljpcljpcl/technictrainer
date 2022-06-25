import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormCalendario from '../../components/Forms/FormCalendario'
import { Row, Col } from 'react-bootstrap';
import { verificarTreinador } from '../../firebase';

export default function CriarEvento({clubeSelected, currentUser}){
    const [show, setShow] = useState(false);
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

    return (
      <>
      <Row>
        <Col md>
        <Button variant="primary" onClick={handleShow} disabled={desativo}>
          Criar Evento
        </Button>
        </Col>
      </Row>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Criar Treino/Evento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormCalendario clubeSelected={clubeSelected}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }