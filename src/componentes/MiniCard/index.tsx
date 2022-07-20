import { Col } from "react-bootstrap";
import './styles.css'

interface IMiniCard {
  imgsrc: string,
  title: string,
  text: string
}

export default function MiniCard(props: IMiniCard) {
  return (
    <Col>
      <div className="card-conteudo-exclusivo">
          <img src={props.imgsrc}/>
        <div>
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
      </div>
  </Col>
  );
}