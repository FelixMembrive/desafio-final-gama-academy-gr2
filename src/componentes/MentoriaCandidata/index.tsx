import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Card, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg'

import './style.scss'
import LinkButton from "../LinkButton";
import CardMentora from "../CardMentora";

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
        <h2 className="titulo-mentoria-candidata text-start ms-7 ms-lg-24 mb-xs-3 mb-lg-14">Mentoras que te auxiliarão na sua carreira</h2>
        <ScrollContainer className="ms-7 ms-lg-24 scroll-container d-grid">
        <Row className="flex-nowrap row gap-xs-3 gap-lg-8 ms-0">
        {dados.map((cardInfo, index) => {
            return (
                <CardMentora nome_mentora={cardInfo.nome_mentora} area_mentora={cardInfo.area_mentora} descricao_mentora={cardInfo.descricao_mentora} key={index}/>
            )
        })}
        </Row>
      </ScrollContainer>
    </div>
  );
}
