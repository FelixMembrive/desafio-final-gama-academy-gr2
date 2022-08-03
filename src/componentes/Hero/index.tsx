import { Container } from "react-bootstrap";
import styled from "styled-components";

// import Button from "react-bootstrap/Button";
import img_hero from "../../assets/imagens/img_hero.png";
import logo_gama_academy from "../../assets/imagens/logo_gama_academy.png";
import logo_loggi from "../../assets/imagens/logo_loggi.png";
import logo_nubank from "../../assets/imagens/logo_nubank.png";
import logo_tera from "../../assets/imagens/logo_tera.png";
import LinkButton from "../../componentes/LinkButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import "../../../src/colors.scss";
import "./styles.scss";

export default function Hero() {
    return (

        <Container className=" cont00 container-fluid mt-0">
            <div className="container-fluid">
                <Row className="d-flex flex-column-reverse flex-md-row mb-5 mb-lg-0">

                    <Col md={7} className="grupotexto ms-2 ms-md-0"> 
                        <div >

                            <div className="tx1-div">
                            <h2 className="tx1 lh-base fw-bold text-start  mb-4  me-md-0">Empoderando o mercado tech <span className="txfem">feminino</span></h2>
                            </div>

                            <p className="tx2 fw-bolder text-start ">Uma plataforma exclusiva para mulheres que querem se destacar no mundo da tecnologia</p>
                        </div>

                       <div className="btn_reco  ">     
                        
                            <LinkButton className=" btn btn001 rounded-pill"  to="" text="Cadastre-se"></LinkButton>
                            <LinkButton className="btn002 btn-light border border-dark border-2 rounded-pill" to="" text="Entrar"></LinkButton>
                        
                       </div> 
                    </Col>


                    <Col md={5} className="colimgtopo mt-0">
                            <img className="imgtopo" src={img_hero} />
                    </Col>


                </Row>

                <Row>
                    <Col className="textoemppar">
                        <p className="textoemppar2 fw-bolder  ms-2 pe-5 ps mb-4 text-center ">Empresas parceiras</p>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                       <div className="grupologoemp ">
                            <img className=" logo001 " src={logo_tera} width={140}/>
                            <img className=" logo002 " src={logo_gama_academy} width={140}/>
                            <img className=" logo003 " src={logo_nubank} width={140}/>
                            <img className=" logo004 " src={logo_loggi} width={140}/>
                            
                           
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

         );
}