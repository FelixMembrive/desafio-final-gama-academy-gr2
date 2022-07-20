import { LinkContainer } from "react-router-bootstrap";
import { Col } from "react-bootstrap";
import './styles.css'

interface IMiniCard {
  to: string,
  imgsrc: string,
  title: string,
  text: string
}

export default function MiniCard(props: IMiniCard) {
  return (
    <Col>
      <div className="card-conteudo-exclusivo">
          <LinkContainer to={props.to}>
          <img src={props.imgsrc}/>
          </LinkContainer>
        <div>
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
      </div>
  </Col>
  );
}