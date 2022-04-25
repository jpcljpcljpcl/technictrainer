import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormClube from '../../components/Forms/FormClube'

export default function CriarClube() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Criar/Entrar em Clube
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Criar/Entrar em Clube</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormClube />
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