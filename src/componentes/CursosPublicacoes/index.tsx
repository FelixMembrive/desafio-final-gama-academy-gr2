import { Row, Container } from "react-bootstrap";
import MiniCardB from "../MiniCardB";
import './style.scss';
import MiniCardBImage from '../../assets/imagens/MiniCardBImage.png';

interface ICursosPublicacoes {
    title: string,
}

export default function CursosPublicacoes(props:ICursosPublicacoes) {
  return (
    <Container fluid className="section-content">
    <h1>{props.title}</h1>
    <Row>
        <MiniCardB to="/" imgsrc={MiniCardBImage} title="Lorem ipsum dolor" text="texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto" />
        <MiniCardB to="/" imgsrc={MiniCardBImage} title="Lorem ipsum dolor" text="texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto" />
        <MiniCardB to="/" imgsrc={MiniCardBImage} title="Lorem ipsum dolor" text="texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto" />
    </Row>
    </Container>
  )
};