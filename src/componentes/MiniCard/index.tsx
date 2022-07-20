import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './styles.css'

interface IMiniCard {
  imgsrc: string,
  title: string,
  text: string
}

export default function MiniCard(props: IMiniCard) {
  return (
    <Col>
      <div className="card">
        <img src={props.imgsrc}/>
      <div className="card-content">
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
      </div>
  </Col>
  );
}