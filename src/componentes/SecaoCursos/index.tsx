import { Row, Container } from "react-bootstrap";
import MiniCardB from "../MiniCardB";
import './style.scss';
import dados from "../../assets/mockups/cursos-mockup.json";

interface ISecaoCursos {
    title: string,
}

export default function SecaoCursos(props:ISecaoCursos) {
  const cursos = dados.cursos;
  return (
    <>
        <h5 className="ms-md-3 ms-lg-2 ms-xl-5 header-cursos">{props.title}</h5>
        <div className="cards">
          {cursos.slice(0, 3).map((curso, index) => {
          return (
        <Container fluid className="section-content">
        <Row>
            <MiniCardB to="/" imgsrc={curso.imagem} title={curso.curso} text={curso.descricao.length > curso.descricao.substring(0,70).length? `${curso.descricao.substring(0,70)}...` : `${curso.descricao}`} />
        </Row>
        </Container>
          )
        })}
    </div>
    </>
  )
};