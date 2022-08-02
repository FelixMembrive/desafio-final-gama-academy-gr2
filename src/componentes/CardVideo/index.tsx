import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './style.scss';
import VideoModal from "../VideoModal";
import image from "../../assets/imagens/imagem-video1.png";
import '../../typography.scss';

interface ICardVideoProps {
  videoTitle?: string;
  src: string;
  cardTitle: string;
  cardSubtitle: string;
  cardText: string;
  imgSrc?: string;
}

export default function CardVideo(props: ICardVideoProps) {
  return (
    <Col className="card-col">
      <Card className="img rounded d-flex flex-column justify-content-end">
        <Card.Img src={image} className="m-0"/>
        <VideoModal src={props.imgSrc? props.imgSrc : props.src} />
        <Card.Body className="p-0">
          <div className="depo-info rounded">
            <h3 className="text-start tp-heading-4">{props.cardTitle}</h3>
            <p className="text-start tp-body-small depo-info-cargo">{props.cardSubtitle}</p>
            <p className="text-start tp-body-small">{props.cardText}</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
