import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Button, Row } from "react-bootstrap";

import './style.scss'

export default function Depoimentos() {
    const dados = [
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Mariana Benício Porto",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Cauane Nogueira",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Liz Maitê dos Santos",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Helena da Silva",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Ana Vitoria dos Santos",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Isabella Cavalcanti",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Lara Maria Aragão",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec"
        },
    ]
  return (
    <div className="depo-section mb-8">
        <h2 className="text-start ms-8 ms-lg-20 mb-xs-3 mb-lg-11 mt-xs-4 mt-lg-26">O que as pessoas dizem</h2>
        <ScrollContainer className="ms-8 ms-lg-20 scroll-container d-grid">
        <Row className="flex-nowrap row gap-xs-3 gap-lg-16">
        {dados.map((cardInfo, index) => {
            return (
                <CardVideo videoTitle="video placeholder" src={cardInfo.src} cardTitle={cardInfo.nome} cardSubtitle={`${cardInfo.profissao}, ${cardInfo.empresa}`} cardText={cardInfo.texto} key={index}/>
            )
        })}
        </Row>
      </ScrollContainer>
    </div>
  );
}
