import { Container } from "react-bootstrap";
import CardValorMentoria from "../../componentes/CardValorMentoria";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import "./style.scss"


export default function Amir_ValorMentoria() {
    return (
        <Container fluid="">
                 
            <CardValorMentoria className="" tipo_mentoria="Primeira vez" area_da_mentoria="Mentoria de x área" tempo="30 min" valor="Gratuito"></CardValorMentoria>
                          
        </Container>
    );
  }