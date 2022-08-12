import { Card } from 'react-bootstrap';
import './style.scss';
import dados from "../../assets/mockups/cursos-mockup.json"
import { propTypes } from 'react-bootstrap/esm/Image';

interface iCardsPropsContainer {
  containerClass?: string
}

export default function CardCurso(props: iCardsPropsContainer ) {

    const cursos = dados.cursos
    return (
      <div className={props.containerClass}>
        {cursos.slice(5, 8).map((curso, index) => {
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