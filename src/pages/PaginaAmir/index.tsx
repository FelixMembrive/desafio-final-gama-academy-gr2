import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import img_400_390 from "../../assets/imagens/img_400_390.png";
import Emplog from "../../assets/imagens/Emplog_360_150_46.png";
import LinkButton from "../../componentes/LinkButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./styles.scss"

export default function PaginaAmir() {
    return (

        <Container fluid="sm">
            <div className="fundo">
                <Row className="d-flex flex-column-reverse flex-md-row">
                    <Col sm={6}> 
                        <div >
                            <h2 className="tx1 fs-2 lh-base  fw-bolder text-start mt-5  mt-md-5 pt-md-5 mb-4">Frase de impacto sobre <br></br> o principal diferencial da empresa</h2>
                            <p className="tx2 fw-normal text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec vel<br></br> risus a nibh placerat volutpat eget vitae leo.</p>
                        </div>

                        <div className="d-flex flex-column flex-md-row mt-4">
                            <LinkButton className="btn-secondary rounded-pill mt-4 mt-md-3" to="" text="Registre-se"></LinkButton>
                            <LinkButton className="btn-light border border-dark border-2 rounded-pill ms-0 ms-md-4 mt-3" to="" text="Conheça mais"></LinkButton>
                        </div>
                    </Col>

                    <Col sm={6}>
                            <img className=" mt-4 mb-md-5 pe-2 pt-4 h-75 " src={img_400_390} width={380}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="fw-bolder mt-5 mt-md-3 pt-3 pt-md-0 me-5 pe-5 ps text-center ">Empresas parceiras</p>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                       <div className="">
                            <img className="me-4 mt-0 mt-md-4" src={Emplog} width={140}/>
                            <img className="me-4 mt-0 mt-md-4" src={Emplog} width={140}/>
                            <img className="me-4 mt-4" src={Emplog} width={140}/>
                            <img className="me-4 mt-4" src={Emplog} width={140}/>
                            
                           
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

         );
}