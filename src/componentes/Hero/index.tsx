import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import img_400_390 from "../../assets/imagens/img_400_390.png";
import Emplog from "../../assets/imagens/Emplog_360_150_46.png";
import LinkButton from "../../componentes/LinkButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./styles.scss"

export default function Hero() {
    return (

        <Container className="mt-5 mb-5">
                <Row className="d-flex flex-column-reverse flex-md-row mb-5 mb-lg-0">
                    <Col md={7} className="ps-0 text-center justify-content-around mt-5 align-items-center ms-5 ms-md-0"> 
                        <div >
                            <h2 className="tx1 fs-2 lh-base  fw-bolder text-start mt-5  mt-md-5 pt-md-5 mb-4 me-2 me-md-0">Frase de impacto sobre <br></br> o principal diferencial da empresa</h2>
                            <p className="tx2 fw-normal text-start me-2 me-md-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec vel<br></br> risus a nibh placerat volutpat eget vitae leo.</p>
                        </div>

                        <div className="d-flex flex-column flex-md-row mt-4 me-5 me-md-0">
                            <LinkButton className="btn-secondary rounded-pill mt-4 mt-md-3" to="" text="Registre-se"></LinkButton>
                            <LinkButton className="btn-light border border-dark border-2 rounded-pill ms-0 ms-md-4 mt-3" to="" text="Conheça mais"></LinkButton>
                        </div>
                    </Col>


                    <Col md={5} className="ps-0 pe-3 text-center ms-2 ms-md-0">
                            <img className="img-fluid mt-4 pt-4 h-75" src={img_400_390} width={400} height={390}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="fw-bolder mt-5 mt-md-3 pt-3 pt-md-0 me-0 pe-5 ps text-center ">Empresas parceiras</p>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                       <div className=" ">
                            <img className="me-4 mt-0 mt-md-4 mb-0 mb-md-5" src={Emplog} width={140}/>
                            <img className="me-4 mt-0 mt-md-4 mb-0 mb-md-5" src={Emplog} width={140}/>
                            <img className="me-4 pt-4 mb-4 mb-md-4 mb-md-5" src={Emplog} width={140}/>
                            <img className="me-4 mt-4 mb-4 mb-md-5" src={Emplog} width={140}/>
                            
                           
                        </div>
                    </Col>
                </Row>
        </Container>

         );
}