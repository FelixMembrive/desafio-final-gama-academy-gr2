import { Row, Container } from "react-bootstrap";
import MiniCardB from "../MiniCardB";
import './style.scss';
import MiniCardBImage from '../../assets/imagens/MiniCardBImage.png';
import dados from "../../assets/mockups/publicacoes-mockup.json";

interface ISecaoPublicacoes {
    title: string,
}

export default function SecaoPublicacoes(props:ISecaoPublicacoes) {
  const publicacoes = dados.publicacoes;
  return (
    <>
      <h5 className="ms-md-3 ms-lg-2 ms-xl-5 header-publicacoes">{props.title}</h5>
      <div className="cards">
        {publicacoes.slice(0, 3).map((publicacao, index) => {
        return (
      <Container fluid className="section-content">
      <Row>
          <MiniCardB to="/" imgsrc={MiniCardBImage} title={publicacao.nome} text={publicacao.descricao.length > publicacao.descricao.substring(0,70).length? `${publicacao.descricao.substring(0,70)}...` : `${publicacao.descricao}`} />
      </Row>
      </Container>
      )
      })}
      </div>
    </>
  )
};