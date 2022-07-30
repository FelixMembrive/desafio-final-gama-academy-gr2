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
            <div className="card-valormentoria_div">
                <Card className="card-valormentoria border-0">
                    <Card.Body className="card-valormentoria-body d-flex flex-column m-0 p-0">
                    <div className="card-valormentoria-text">
                        <p className=" cabecario fw-normal">{props.tipo_mentoria}</p>
                        <div className="text_div">
                            <p className=" text01">{props.area_da_mentoria}</p>
                            <p className=" text02">{props.tempo}</p>
                            <p className=" text03">{props.valor}</p>
                        </div>
                    </div>
                        <div className="btn_001_div d-flex justify-content-end">
                    <LinkButton className='btn_0001 rounded-pill text-center d-flex justify-content-center align-items-center' to='#' text='Agendar mentoria'/>
                        </div>
                    </Card.Body>
                </Card>
            </div> 
  );
}