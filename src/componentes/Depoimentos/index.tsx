import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Button, Row } from "react-bootstrap";

import './style.scss'

export default function Depoimentos() {
    const dados = [
        {
            src: "https://www.youtube.com/embed/NpEaa2P7qZI",
            nome: "Mariana Benício Porto",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            src: "https://www.youtube.com/embed/NpEaa2P7qZI",
            nome: "Cauane Maria Nogueira",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            src: "https://www.youtube.com/embed/NpEaa2P7qZI",
            nome: "Liz Maitê Aparecida dos Santos",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            src: "https://www.youtube.com/embed/NpEaa2P7qZI",
            nome: "Silvana Helena da Silva",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            src: "https://www.youtube.com/embed/NpEaa2P7qZI",
            nome: "Vitoria Paula Santos Jesus",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            src: "https://www.youtube.com/embed/NpEaa2P7qZI",
            nome: "Hadassa Isabella Cavalcanti",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            src: "https://www.youtube.com/embed/NpEaa2P7qZI",
            nome: "Lara Maria Aragão",
            profissao: "Product Designer",
            empresa: "Nome da Empresa",
            texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ]
  return (
    <div className="depo-section">
        <h2>O que as pessoas dizem</h2>
        <ScrollContainer className="mt-7 scroll-container d-grid">
        <Row className="flex-nowrap row">
        {dados.map((cardInfo) => {
            return (
                <CardVideo videoTitle="video placeholder" src={cardInfo.src} cardTitle={cardInfo.nome} cardSubtitle={`${cardInfo.profissao}, ${cardInfo.empresa}`} cardText={cardInfo.texto}/>
            )
        })}
        </Row>
      </ScrollContainer>
    </div>
  );
}
