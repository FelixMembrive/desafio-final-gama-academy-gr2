import { LinkContainer } from "react-router-bootstrap";
import { Col } from "react-bootstrap";
import './styles.scss'

interface IMiniCardB {
  to: string,
  imgsrc?: string,
  title: any,
  text: string,
}

export default function MiniCardB(props: IMiniCardB) {
  return (
    <Col className="ps-lg-4">
      <div className="card-cursos-publicacoes">
          <LinkContainer to={props.to} className="img-container">
          <img src={props.imgsrc}/>
          </LinkContainer>
        <div className="mt-3">
          <h6>{props.title}</h6>
          <p>{props.text}</p>
        </div>
      </div>
  </Col>
  );
}