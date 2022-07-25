import { LinkContainer } from "react-router-bootstrap";
import { Col } from "react-bootstrap";
import './styles.scss'

interface IMiniCardB {
  to: string,
  imgsrc: string,
  title: string,
  text: string
}

export default function MiniCardB(props: IMiniCardB) {
  return (
    <Col>
      <div className="card-cursos-publicacoes">
          <LinkContainer to={props.to}>
          <img src={props.imgsrc}/>
          </LinkContainer>
        <div className="mt-3">
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
      </div>
  </Col>
  );
}