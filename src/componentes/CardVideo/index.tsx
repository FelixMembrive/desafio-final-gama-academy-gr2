import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './style.css'

interface ICardVideoProps {
    videoTitle?: string;
    src: string;
    cardTitle: string;
    cardSubtitle: string;
    cardText: string;
}

export default function CardVideo(props: ICardVideoProps) {
  return (
      <Col className="card-col" style={{ width: "23rem"}}>
        <Card style={{ width: "23rem"}} className="card">
        <iframe className="card-img-top img-fluid" src={props.src} title={props.videoTitle? props.videoTitle: "video depoimento"} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <Card.Body>
            <Card.Title className="fs-5">{props.cardTitle}</Card.Title>
            <Card.Subtitle className="">{props.cardSubtitle}</Card.Subtitle>
            <Card.Text className="fs-6">
              {props.cardText}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
  );
}
