import { Container } from "react-bootstrap";
import areagrafica_candidaturas from "../../assets/imagens/areagrafica_candidaturas.png";
import logo_boyzin from "../../assets/imagens/logo_boyzin.png";
import LinkButton from "../../componentes/LinkButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./styles.scss"


export default function Amir_AreaCandidata() {
    return (
        <Container className=" " >

                 <Row className="d-flex flex-column flex-md-row justify-content-center align-items-center  ">
                
                    <Col xl={3} className=" col1_ac justify-content-center "> 
                        <div className="text-center" >
                            <img className="logo_boyzin mb-4 " src={logo_boyzin} width={75}/>
                            <h2 className="nome_usuario fs-5 ">Nome da usuária</h2>
                            
                        </div>

                        <div className="btns_ac_div d-block  ">
                            <LinkButton className="btn_ac_perfil btn-secondary text-start p-2 border border-0 text-body fw-semibold w-100 ms-0 ms-md-0 " to="" text="Editar perfil"></LinkButton>
                            <LinkButton className="btn_ac_curr btn-secondary text-start p-2 border border-0 text-body fw-semibold w-100 ms-0 ms-md-0 " to="" text="Editar currículo"></LinkButton>
                            <LinkButton className="btn_ac_cand btn-secondary text-start p-2 border border-0 text-body fw-semibold w-100 ms-0 ms-md-0 " to="" text="Minhas candidaturas"></LinkButton>
                            <LinkButton className="btn_ac_alertas btn-secondary text-start p-2 border border-0 text-body fw-semibold w-100 ms-0 ms-md-0 " to="" text="Meus alertas"></LinkButton>
                        
                        </div>
                        <div className="btn_ac_sair_div">
                            <LinkButton className="btn-link btn_ac_sair fs-6 text-bg-light text-decoration-none fw-semibold text-danger text-center text-opacity-50 "  to="" text="Sair da conta"></LinkButton>
                        </div>
                    </Col>

                    <Col xl={9} className="img_ac_div img-fluid  ">
                            <img className="img_ac img-fluid " src={areagrafica_candidaturas} width={960}/>
                    </Col>
                </Row>

                          
        </Container>
    );
  }