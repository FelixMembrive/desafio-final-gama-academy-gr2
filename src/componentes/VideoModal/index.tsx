import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Play } from 'react-ionicons';
import './style.scss'

export default function VideoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" className="btn-link bg-transparent" onClick={handleShow}>
        <Play
        style={{'background-color':'transparent'}}
          color={'#ffffff'}
          height="50px"
          width="50px"
        />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <iframe src="https://www.youtube.com/embed/ScMzIvxBSi4" title="Placeholder Video" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Modal>
    </>
  );
}

// render (<ModalBS />);