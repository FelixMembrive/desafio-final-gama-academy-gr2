import { Container } from "react-bootstrap";
import CardValorMentoria from "../../componentes/CardValorMentoria";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkText from "../../componentes/LinkText";
import logo1 from "../../assets/imagens/logo1.png";

import "./style.scss"



export default function Amir_ValorMentoria() {
    return (
        <Container className="ms-2">
            <Row className=" textolink mt-5">
                <LinkText backArrow to="" text=" Voltar para perfil da Mentora"></LinkText>
            </Row>
   
            <img className="logofoto position-static" src={logo1}/>
            
            
            <Row className="dados_monitora d-flex flex-column flex-md-row ">
                <h2 className="nome_monitora fw-semibold ">Nome</h2>

                <h3 className="area_monitora fw-semibold">Área de atuação</h3>

                <p className="lorem1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat
                volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna. 
                Sed mattis commodo libero, sit amet tempus eros molestie eget. Praesent elementum nisi id 
                massa mattis, at interdum neque vulputate. In vulputate velit consectetur tortor tempus mollis
                </p>
            </Row>

            <Row className="lorem2 d-flex flex-column flex-md-row">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat 
                eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna. Sed mattis
                commodo libero, sit amet tempus eros molestie eget. Praesent elementum nisi id massa mattis, at 
                interdum neque vulputate. In vulputate velit consectetur tortor tempus mollis
                </p>
            </Row>

            <Row className=" d-flex flex-column flex-md-row me-4 gy-5 ms-0">
                <CardValorMentoria className="" tipo_mentoria="Primeira vez" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="Gratuito"></CardValorMentoria>
                <CardValorMentoria className="" tipo_mentoria="Valor normal" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="R$ 50,00"></CardValorMentoria>
                <CardValorMentoria className="" tipo_mentoria="Primeira vez" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="Gratuito"></CardValorMentoria>
            </Row>
            
            
                          
        </Container>
    );
  }