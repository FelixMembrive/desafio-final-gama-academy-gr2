import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Play, X } from 'phosphor-react';
import './style.scss';
import PlayIcon from '../../assets/icons/play_button.png'

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
      </Button>

      <div className={show? 'modal-background': 'modal-hide'} onClick={handleClose}>
        <Button variant="link" className="btn-link bg-transparent close" onClick={handleClose}>
        <X size={50} weight="fill" color='#e9e9e9'/>
        </Button>
        <iframe src={show? props.src : ''} title="Placeholder Video" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='img-fluid' />
      </div>
    </>
  );
}