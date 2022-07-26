import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Card, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg'

import './style.scss'
import LinkButton from "../LinkButton";

export default function MentoriaCandidata() {
    const dados = [
        {
            nome_mentora: "Nome",
            area_mentora: "Área de atuação",
            descricao_mentora: "Jornalista por formação, Product Designer na...",
        },
        {
            nome_mentora: "Nome",
            area_mentora: "Área de atuação",
            descricao_mentora: "Jornalista por formação, Product Designer na...",
        },
        {
            nome_mentora: "Nome",
            area_mentora: "Área de atuação",
            descricao_mentora: "Jornalista por formação, Product Designer na...",
        },
        {
            nome_mentora: "Nome",
            area_mentora: "Área de atuação",
            descricao_mentora: "Jornalista por formação, Product Designer na...",
        },
        {
            nome_mentora: "Nome",
            area_mentora: "Área de atuação",
            descricao_mentora: "Jornalista por formação, Product Designer na...",
        },
       
    ]
  return (
    <div className="mentorias-section-candidata py-11 pt-lg-26">
        <h2 className="titulo-mentoria-candidata text-start ms-7 ms-lg-24 mb-xs-3 mb-lg-11">Mentoras que te auxiliarão na sua carreira</h2>
        <ScrollContainer className="ms-7 ms-lg-24 scroll-container d-grid">
        <Row className="flex-nowrap row gap-xs-3 gap-lg-8 ms-0">
        {dados.map((cardInfo, index) => {
            return (
                <Card className="card-mentoria border-0 p-xs-4 p-lg-7">
                    <Card.Body className="card-mentoria-body d-flex flex-column m-0 p-0">
                    <img src={logo} alt={`foto da mentora ${cardInfo.nome_mentora}`} className="img-mentoria-candidata me-8 me-10 img-fluid"/>
                    <div className="card-mentoria-text">
                        <p>{cardInfo.nome_mentora}</p>
                        <p>{cardInfo.area_mentora}</p>
                        <p>{cardInfo.descricao_mentora}</p>
                    </div>
                    <LinkButton to='#' text='Ver perfil'/>
                    </Card.Body>
                </Card>
            )
        })}
        </Row>
      </ScrollContainer>
    </div>
  );
}
