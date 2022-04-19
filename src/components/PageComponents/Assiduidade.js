import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormAssiduidade from '../../components/Forms/FormAssiduidade'

export default function Assiduidade() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
            <FormAssiduidade/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button onClick="">Guardar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }