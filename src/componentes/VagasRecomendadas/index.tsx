import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Card, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg'

import './style.scss'

export default function VagasRecomendadas() {
    const dados = [
        {
            nome_vaga: "Nome da vaga",
            nome_empresa: "Empresa",
            local_empresa: "Local"
        },
        {
            nome_vaga: "Nome da vaga",
            nome_empresa: "Empresa",
            local_empresa: "Local"
        },
        {
            nome_vaga: "Nome da vaga",
            nome_empresa: "Empresa",
            local_empresa: "Local"
        },
        {
            nome_vaga: "Nome da vaga",
            nome_empresa: "Empresa",
            local_empresa: "Local"
        },
        {
            nome_vaga: "Nome da vaga",
            nome_empresa: "Empresa",
            local_empresa: "Local"
        },
        {
            nome_vaga: "Nome da vaga",
            nome_empresa: "Empresa",
            local_empresa: "Local"
        },
    ]
  return (
    <div className="vagas-section-candidata py-11 pt-lg-26">
        <h2 className="titulo-vagas-candidata text-start ms-7 ms-lg-24 mb-xs-3 mb-lg-11">Vagas recomendadas para você</h2>
        <ScrollContainer className="ms-7 ms-lg-24 scroll-container d-grid">
        <Row className="flex-nowrap row gap-xs-3 gap-lg-8 ms-0">
        {dados.map((cardInfo, index) => {
            return (
                <Card className="card-vagas border-0 p-xs-4 p-lg-7">
                    <Card.Body className="card-vagas-body d-flex m-0 p-0">
                    <img src={logo} alt={`logo da empresa ${cardInfo.nome_empresa}`} className="img-vagas-candidata me-8 me-10 img-fluid"/>
                    <div className="card-vagas-text">
                    <p className="m-0">{cardInfo.nome_vaga}</p>
                    <p className="m-0">{cardInfo.nome_empresa}</p>
                    <p className="m-0">{cardInfo.local_empresa}</p>
                    </div>
                    </Card.Body>
                </Card>
            )
        })}
        </Row>
      </ScrollContainer>
    </div>
  );
}
