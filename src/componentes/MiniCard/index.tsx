import { LinkContainer } from "react-router-bootstrap";
import { Col } from "react-bootstrap";
import './styles.scss'

interface IMiniCard {
  to: string,
  imgsrc?: string,
  title: string,
  text: string
}

export default function MiniCard(props: IMiniCard) {
  return (
      <div className="card-conteudo-exclusivo">
          <LinkContainer to={props.to}>
          <img src={props.imgsrc}/>
          </LinkContainer>
        <div className="content">
          <h6>{props.title}</h6>
          <p>{props.text}</p>
        </div>
      </div>
  );
}