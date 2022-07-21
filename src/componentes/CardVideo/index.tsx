import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './style.scss';
import { useState } from 'react';
import placeholder from "../../assets/imagens/placeholder_img.svg";
import VideoModal from "../VideoModal";

interface ICardVideoProps {
  videoTitle?: string;
  src: string;
  cardTitle: string;
  cardSubtitle: string;
  cardText: string;
}

export default function CardVideo(props: ICardVideoProps) {
  const [isPlaying, setisPlaying] = useState(false);

  const handleClick = () => {
    setisPlaying(current => !current);
  };
  return (
    <Col className="card-col">
      <div className="img rounded d-flex flex-column justify-content-end" onClick={handleClick}>
        <VideoModal src={props.src}/>
        <h3 className="fs-5 bg-transparent">{props.cardTitle}</h3>
        <p className="text-start bg-transparent ">{props.cardSubtitle}</p>
        <p className="fs-6 bg-transparent">{props.cardText}</p>
      </div>
    </Col>
  );
}
