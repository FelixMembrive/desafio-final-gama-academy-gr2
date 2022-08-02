import { Button, Card, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg'
import icon from "../../assets/icons/icon.png"

import './style.scss'
import LinkButton from "../LinkButton";

interface ICardMentoraProps{
    logo_empresa?: string,
    empresa: string,
    cargo: string,
    foto_mentora?: string,
    nome_mentora: string,
    area_mentora: string,
    descricao_mentora: string,
    className?: string,
}

export default function CardMentora(props: ICardMentoraProps) {
  return (
                <Card className="card-mentoria border-0 p-xs-4 p-lg-7">
                    <Card.Body className="card-mentoria-body d-flex flex-column m-0 p-0">
                    <div className="cargoMentora">
                        <img src={props.logo_empresa} id="logo_empresa" alt={`logo da empresa ${props.empresa}`} className={`img-empresa-candidata img-fluid mb-2 mb-lg-3 ${props.className}`}/>
                        <p id="cargo" className="fw-semibold m-0 mb-1">{props.cargo}
                            <p id="empresa" className="fw-semibold m-0 mb-2">{props.empresa}</p>
                        </p>
                        <img src={icon} alt={`foto da mentora ${props.empresa}`} id="iconeMentoras" className={`img-empresa-candidata img-fluid mb-2 mb-lg-3 ${props.className}`}/>
                    </div>
                    <img src={props.foto_mentora} alt={`foto da mentora ${props.nome_mentora}`} id="imgMentora" className={`m-auto ${props.className}`}/>
                    <div className="card-mentoria-text">
                        <p className="fw-semibold m-0 mb-1">{props.nome_mentora}</p>
                        <p className="fw-semibold m-0 mb-2">{props.area_mentora}</p>
                        <p>{props.descricao_mentora}</p>
                    </div>
                    <div className="botoesCardMentora">
                        {/* removido para testar o deploy */}
                        {/* <Button className='verPerfil' to='#' id="verPerfil" text='Ver perfil'>Ver perfil</Button>
                        <Button className='agendarMentoria' to='#' id="agendarMentoria" text='Agendar mentoria'>Agendar mentoria</Button> */}
                    </div>
                    </Card.Body>
                </Card>
  );
}
