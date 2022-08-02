import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Row } from "react-bootstrap";

import './style.scss'

export default function Depoimentos() {
    const dados = [
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Lu Ferreira",
            profissao: "Product Designer",
            empresa: "Google",
            texto: "“A plataforma Tech Delas me ajudou a conseguir o meu primeiro emprego, depois de 10 meses de transição consegui meu primeiro sim”"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Cauane Nogueira",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "“A plataforma Tech Delas me ajudou a conseguir o meu primeiro emprego, depois de 10 meses de transição consegui meu primeiro sim”"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Liz Maitê dos Santos",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "“A plataforma Tech Delas me ajudou a conseguir o meu primeiro emprego, depois de 10 meses de transição consegui meu primeiro sim”"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Helena da Silva",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "“A plataforma Tech Delas me ajudou a conseguir o meu primeiro emprego, depois de 10 meses de transição consegui meu primeiro sim”"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Ana Vitoria dos Santos",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "“A plataforma Tech Delas me ajudou a conseguir o meu primeiro emprego, depois de 10 meses de transição consegui meu primeiro sim”"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Isabella Cavalcanti",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "“A plataforma Tech Delas me ajudou a conseguir o meu primeiro emprego, depois de 10 meses de transição consegui meu primeiro sim”"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            nome: "Lara Maria Aragão",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "“A plataforma Tech Delas me ajudou a conseguir o meu primeiro emprego, depois de 10 meses de transição consegui meu primeiro sim”"
        },
    ]
  return (
    <div className="depo-section pb-4 pt-xs-4 pt-lg-5">
        <h2 className="text-start ms-4 ms-lg-5 mb-xs-3 mb-lg-11">O que as pessoas dizem</h2>
        <ScrollContainer className="ms-4 ms-lg-5 scroll-container d-grid">
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
