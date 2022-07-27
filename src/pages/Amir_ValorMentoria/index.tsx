import { Container } from "react-bootstrap";
import CardValorMentoria from "../../componentes/CardValorMentoria";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkText from "../../componentes/LinkText";
import logo1 from "../../assets/imagens/logo1.png";

import "./style.scss"



export default function Amir_ValorMentoria() {
    return (
        <Container className=" pt-5">
            <Row className=" textolink mt-5 mb-5 pb-5 pt-5 fs-6">
                <LinkText backArrow to="" text=" Voltar para perfil da Mentora"></LinkText>
            </Row>
   
            <img className="logofoto position-static mb-5 pb-5" src={logo1}/>
            
            
            <Row className=" dados_monitora d-flex flex-column flex-md-row ">

                <h2 className="nome_monitora mt-5 pt-5">Nome</h2>

                <h3 className="area_monitora mb-5">Área de atuação</h3>

                <p className="lorem1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat
                volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna. 
                Sed mattis commodo libero, sit amet tempus eros molestie eget. Praesent elementum nisi id 
                massa mattis, at interdum neque vulputate. In vulputate velit consectetur tortor tempus mollis
                </p>
            </Row>

            <Row className="lorem2 d-flex flex-column flex-md-row">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat 
                eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna. Sed mattis
                commodo libero, sit amet tempus eros molestie eget. Praesent elementum nisi id massa mattis, at 
                interdum neque vulputate. In vulputate velit consectetur tortor tempus mollis
                </p>
            </Row>

            <Row className=" cardsvalormentoria d-flex justify-content-around flex-sm-row me-4 g-5 ms-0 mt-2 ">
                <CardValorMentoria className="" tipo_mentoria="Primeira vez" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="Gratuito" ></CardValorMentoria>
                <CardValorMentoria className="" tipo_mentoria="Valor normal" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="R$ 50,00"></CardValorMentoria>
                <CardValorMentoria className="" tipo_mentoria="Primeira vez" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="Gratuito"></CardValorMentoria>
            </Row>
            
            
                          
        </Container>
    );
  }