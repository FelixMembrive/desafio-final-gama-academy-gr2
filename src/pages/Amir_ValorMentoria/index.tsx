import { Container } from "react-bootstrap";
import CardValorMentoria from "../../componentes/CardValorMentoria";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkText from "../../componentes/LinkText";
import logo1 from "../../assets/imagens/foto_logada_mariaisabel.png";
import HeaderLogado from "../../componentes/HeaderLogado";
import Footer from "../../componentes/Footer";


import CardVaga from "../../componentes/CardVaga";


import "./style.scss"



export default function Amir_ValorMentoria() {
    return (
        <>
        <HeaderLogado/>
        <Container className="">
            <Row className=" textolink ">
                <LinkText  to="" className=" textolink2 text-decoration-none" text=" Voltar para perfil da Mentora"></LinkText>
            </Row>
   
            <img className="logofoto position-static" src={logo1}/>
            
            
            <Row className=" dados_monitora d-flex flex-column flex-md-row ">

                <h2 className="nome_monitora fw-bolder">Maria Isabel</h2>

                <h3 className="area_monitora ">UX/UI Design</h3>

                <p className="lorem1">Designer gráfico por formação, atualmente é Product Designer na Americanas 
                S.A. Possui experências em empresas como Submarino, Shoptime e Hurb.
                </p>
            </Row>
       
            <Row className=" cardsvalormentoria d-flex justify-content-around flex-sm-row me-4 g-5 ms-0 mt-2 ">
                <CardValorMentoria className="" tipo_mentoria="Primeira vez" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="Gratuito" ></CardValorMentoria>
                <CardValorMentoria className="" tipo_mentoria="Valor normal" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="R$ 50,00"></CardValorMentoria>
                <CardValorMentoria className="" tipo_mentoria="Primeira vez" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="Gratuito"></CardValorMentoria>

               
                <CardVaga></CardVaga>

            </Row>
                          
        </Container>
        <Footer/>
        </>
        
    );
  }