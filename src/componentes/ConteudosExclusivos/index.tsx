import { Row, Col, Container } from "react-bootstrap";
import MiniCardB from '../MiniCardB';
import dados from '../../assets/mockups/conteudos-exclusivos.json'
import './styles.scss'

interface IConteudosExclusivos {
    title: string,
    substitle: string,
}

export default function ConteudosExclusivos(props:IConteudosExclusivos) {
  const conteudos = dados.conteudos;
  return (
      <Container fluid className="container-conteudos">

          <h3>{props.title}</h3>
          <p id="subtitle">{props.substitle}</p>
          <div className="card-section">
            {conteudos.slice(0, 4).map((conteudo, index) => {
              return (
                <MiniCardB to="/" imgsrc={conteudo.imagem} title={conteudo.nome} text={conteudo.descricao.length > conteudo.descricao.substring(0,70).length? `${conteudo.descricao.substring(0,70)}...` : `${conteudo.descricao}`} />
              )
            })}
          </div>   
      </Container>
  );

}