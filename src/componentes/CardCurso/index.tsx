import { Card } from 'react-bootstrap';
import './style.scss';
import dados from "../../assets/mockups/cursos-mockup.json"

export default function CardCurso() {

    const cursos = dados.cursos
    return (
      <div className="cards">
        {cursos.slice(0, 3).map((curso, index) => {
          return (

            <Card style={{ width: '18rem', border:'none' }}>
              <div className="card-curso">
              <Card.Body>
                <Card.Title>{curso.nome}</Card.Title>
                <Card.Text>{curso.descricao.length > curso.descricao.substring(0,25).length? `${curso.descricao.substring(0,25)}...` : `${curso.descricao}`}</Card.Text>
              </Card.Body>
              </div>
            </Card>
          );
        })}
      </div>
    );


}