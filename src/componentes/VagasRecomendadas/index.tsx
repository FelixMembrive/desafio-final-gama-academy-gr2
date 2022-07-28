import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Card, Row } from "react-bootstrap";
import vagas from '../../assets/mockups/vagas-mockup.json'
import CardVaga from "../CardVaga";

import './style.scss'

export default function VagasRecomendadas() {
    const vagasRecomendadas = vagas.recomendadas; 
    
  return (
    <div className="vagas-section-candidata py-11 pt-lg-26">
        <h2 className="titulo-vagas-candidata text-start ms-7 ms-lg-24 mb-xs-3 mb-lg-11">Vagas recomendadas para você</h2>
        <ScrollContainer className="ms-7 ms-lg-24 scroll-container d-grid">
        <Row className="row-cards-recomendados flex-nowrap row gap-3 gap-lg-5 ms-0">
        {vagasRecomendadas.map((vaga, index)=> {
          return <CardVaga key={index} nome_empresa={vaga.nome_empresa} nome_vaga={vaga.nome_vaga} salvo={vaga.salvo} img={vaga.logo_empresa} className=".cards-vagas-recomendadas-candidata"/>
        })}
        </Row>
      </ScrollContainer>
    </div>
  );
}
