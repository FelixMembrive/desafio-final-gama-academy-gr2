import { Container } from "react-bootstrap";
import CardValorMentoria from "../../componentes/CardValorMentoria";
import CardValorMentoria2 from "../../componentes/CardValorMentoria2";
import Row from 'react-bootstrap/Row';
import logo1 from "../../assets/imagens/foto_logada_mariaisabel.png";
import HeaderLogado from "../../componentes/HeaderLogado";
import LinkBack from "../../componentes/LinkBack";
import Footer from "../../componentes/Footer";


import CardVaga from "../../componentes/CardVaga";


import "./style.scss"



export default function Amir_ValorMentoria() {
    return (
        <>
        <HeaderLogado/>
        <Container className="">
            
            <Row className=" textolink ">
                <LinkBack className="textolink2" text="Voltar para perfil da Mentora"/>
            </Row>
   
            <img className="logofoto position-static" src={logo1}/>
            
            
            <Row className=" dados_monitora d-flex flex-column flex-md-row ">

                <h2 className="nome_monitora fw-bolder">Maria Isabel</h2>

                <h3 className="area_monitora ">UX/UI Design</h3>

                <p className="lorem1">Designer gráfico por formação, atualmente é Product Designer na Americanas 
                S.A. Possui experências em empresas como Submarino, Shoptime e Hurb.
                </p>
            </Row>
       
            <div className="cardsvm_div">
                <Row className=" cardsvalormentoria me-4 g-5 ms-0 ">
                    <CardValorMentoria className="" tipo_mentoria="Primeira mentoria" area_da_mentoria=". Mentoria de UX/UI design" tempo=". 30 minutos" valor=". Primeira mentoria é de graça! " ></CardValorMentoria>
                    <CardValorMentoria className="" tipo_mentoria="Valor mentoria completa" area_da_mentoria=". Mentoria de UX/UI design" tempo=". 60 minutos" valor=". R$ 80,00"></CardValorMentoria>
                    <CardValorMentoria2 className="" tipo_mentoria="Valor apoie outra mulher" area_da_mentoria=". Mentoria de UX/UI design" tempo=". 60 minutos para uma mulher que precisa da sua aduda, 60 minutos pra você" valor=". R$ 150,00"></CardValorMentoria2>
                </Row>
            </div>
                          
        </Container>
        <Footer/>
        </>
        
    );
  }