import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Play, CloseOutline } from 'react-ionicons';
import './style.scss';

interface IModalProps {
  src: string;
}

export default function VideoModal(props: IModalProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" className="play btn-link bg-transparent p-0 m-0" onClick={handleShow}>
        <Play
          cssClasses='playIcon'
          color={'#ffffff'}
          height="100%"
          width="100%"
        />
      </Button>

      <div className={show? 'modal-background': 'modal-hide'} onClick={handleClose}>
        <Button variant="link" className="btn-link bg-transparent close" onClick={handleClose}>
          <CloseOutline
            style={{ 'background-color': 'transparent' }}
            color={'#d9d9d9'}
            height="50px"
            width="50px"
          />
        </Button>
        <iframe src={show? props.src : ''} title="Placeholder Video" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='img-fluid' />
      </div>
    </>
  );
}