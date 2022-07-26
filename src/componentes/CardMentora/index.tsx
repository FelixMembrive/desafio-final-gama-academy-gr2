import { Card, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg'

import './style.scss'
import LinkButton from "../LinkButton";

interface ICardMentoraProps{
    nome_mentora: String,
    area_mentora: String,
    descricao_mentora: String,
}

export default function CardMentora(props: ICardMentoraProps) {
  return (
                <Card className="card-mentoria border-0 p-xs-4 p-lg-7">
                    <Card.Body className="card-mentoria-body d-flex flex-column m-0 p-0">
                    <img src={logo} alt={`foto da mentora ${props.nome_mentora}`} className="img-mentoria-candidata m-auto img-fluid mb-2 mb-lg-3"/>
                    <div className="card-mentoria-text">
                        <p className="fw-semibold m-0 mb-1">{props.nome_mentora}</p>
                        <p className="fw-semibold m-0 mb-2">{props.area_mentora}</p>
                        <p>{props.descricao_mentora}</p>
                    </div>
                    <LinkButton className='rounded-pill m-auto d-flex justify-content-center align-items-center' to='#' text='Ver perfil'/>
                    </Card.Body>
                </Card>
  );
}
