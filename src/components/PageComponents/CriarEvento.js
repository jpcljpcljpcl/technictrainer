import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormCalendario from '../../components/Forms/FormCalendario'
import { Row, Col } from 'react-bootstrap';

export default function CriarEvento({clubeSelected}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <Row>
        <Col md>
        <Button variant="primary" onClick={handleShow}>
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