import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Row } from "react-bootstrap";

import './style.scss'

export default function Depoimentos() {
    const dados = [
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            thumbnail:"https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/imagens/imagem-video1.png",
            nome: "Lu Ferreira",
            profissao: "Product Designer",
            empresa: "Google",
            texto: "“A plataforma Tech Delas me ajudou a conseguir o meu primeiro emprego, depois de 10 meses de transição consegui meu primeiro sim”"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            thumbnail:"https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/imagens/imagem-video2.png",
            nome: "Júlia Sato",
            profissao: "Product Manager",
            empresa: "Facebook",
            texto: "“Ouvir outras profissionais mulheres, nas mentorias, me incentivou a seguir em frente na área de tecnologia. Porque percebi que eu também era capaz”"
        },
        {
            src: "https://www.youtube.com/embed/ScMzIvxBSi4",
            thumbnail:"https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/imagens/imagem-video3.png",
            nome: "Ana Soares",
            profissao: "Front End Developer",
            empresa: "Nubank",
            texto: "“Receber um feedback personalizado, ao final do processo seletivo, me ajudou a perceber em quais pontos eu precisava melhorar para a próxima candidatura”"
        },
    ]
  return (
    <div className="depo-section pb-4 pt-4 pt-lg-5">
        <h2 className="text-start ms-4 ms-lg-5 mb-4 mb-lg-11">O que as pessoas dizem</h2>
        <ScrollContainer className="ms-4 ms-lg-5 scroll-container d-grid">
        <Row className="flex-nowrap row gap-xs-3 gap-lg-16">
        {dados.map((cardInfo, index) => {
            return (
                <CardVideo videoTitle="video placeholder" src={cardInfo.src} cardTitle={cardInfo.nome} cardSubtitle={`${cardInfo.profissao}, ${cardInfo.empresa}`} cardText={cardInfo.texto} key={index} imgSrc={cardInfo.thumbnail}/>
            )
        })}
        </Row>
      </ScrollContainer>
    </div>
  );
}
