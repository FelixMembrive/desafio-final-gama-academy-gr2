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

        <Container className=" cont00 mt-0">
                <Row className="d-flex flex-column-reverse flex-md-row mb-5 mb-lg-0">

                    <Col md={7} className="grupotexto ms-2 ms-md-0"> 
                        <div >
                            <h2 className="tx1 lh-base  fw-bold text-start  mb-4  me-md-0">Frase de impacto sobre <br></br> o principal diferencial da empresa</h2>
                            <p className="tx2 fw-semibold text-start  me-md-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec vel<br></br> risus a nibh placerat volutpat eget vitae leo.</p>
                        </div>

                       <div className="btn_reco  ">     
                        
                            <LinkButton className="btn001 btn-secondary rounded-pill fs-4 me-3 mt-4 mt-md-3" to="" text="Registre-se"></LinkButton>
                            <LinkButton className="btn002 btn-light border border-dark border-2 rounded-pill fs-4 me-3 ms-0 ms-md-3 mt-3" to="" text="Conheça mais"></LinkButton>
                        
                       </div> 
                    </Col>


                    <Col md={5} className="colimgtopo">
                            <img className="imgtopo" src={img_400_390} />
                    </Col>
                </Row>

                <Row>
                    <Col className="textoemppar">
                        <p className="textoemppar2 fw-bolder  me-0 pe-5 ps text-center ">Empresas parceiras</p>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                       <div className="grupologoemp ">
                            <img className=" logo1 me-4 mt-0 mt-md-4 mb-0 mb-md-2" src={Emplog} width={140}/>
                            <img className=" logo1 me-4 mt-0 mt-md-4 mb-0 mb-md-2" src={Emplog} width={140}/>
                            <img className=" logo1 me-4 mt-4 mb-4 mb-md-2" src={Emplog} width={140}/>
                            <img className=" logo1 me-4 mt-4 mb-4 mb-md-2" src={Emplog} width={140}/>
                            
                           
                        </div>
                    </Col>
                </Row>
        </Container>

         );
}