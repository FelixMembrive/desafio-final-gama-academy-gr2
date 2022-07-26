import { Card } from 'react-bootstrap';
import './style.scss';

export default function CardCurso() {

    const cursos = [
        {
            nome: "Curso X",
            descricao: "Lorem ipsum dolor sit amet.",
        },
        {
            nome: "Curso Y",
            descricao: "Lorem ipsum dolor sit quia.",
        },
        {
            nome: "Curso Z",
            descricao: "Lorem ipsum dolor sit velit.",
        },
        {
            nome: "Curso A",
            descricao: "Lorem ipsum dolor sit putus.",
        },
        {
            nome: "Curso B",
            descricao: "Lorem ipsum dolor sit cortex.",
        },
    ]
    return (
      <div className="cards">
        {cursos.slice(0, 3).map((curso, index) => {
          return (

            <Card style={{ width: '18rem' }}>
              <div className="card-curso">
              <Card.Body>
                <Card.Title>{curso.nome}</Card.Title>
                <Card.Text>{curso.descricao}</Card.Text>
              </Card.Body>
              </div>
            </Card>
          );
        })}
      </div>
    );


}