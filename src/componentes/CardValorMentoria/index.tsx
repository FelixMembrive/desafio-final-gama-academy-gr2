import { Card} from "react-bootstrap";

import './style.scss'
import LinkButton from "../LinkButton";

interface ICardValorMentoriaProps{
    tipo_mentoria: String,
    area_da_mentoria: String,
    tempo: String,
    valor: String,
    className?:string,
}

export default function CardValorMentoria(props: ICardValorMentoriaProps) {
  return (
                <Card className="card-valormentoria border-0 p-xs-4 p-lg-7">
                    <Card.Body className="card-valormentoria-body d-flex flex-column m-0 p-0">
                    <div className="card-valormentoria-text">
                        <p className="fw-semibold m-0 mb-3">{props.tipo_mentoria}</p>
                        <p className="fw-semibold m-0 mb-3">{props.area_da_mentoria}</p>
                        <p className="fw-semibold m-0 mb-3">{props.tempo}</p>
                        <p className="fw-semibold m-0 mb-3">{props.valor}</p>
                    </div>
                    <LinkButton className='rounded-pill text-center d-flex justify-content-center align-items-center' to='#' text='Agendar mentoria'/>
                    </Card.Body>
                </Card>
  );
}