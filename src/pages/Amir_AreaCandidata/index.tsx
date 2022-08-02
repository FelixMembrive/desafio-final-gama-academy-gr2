import { Container } from "react-bootstrap";
import grafico_dados from "../../assets/imagens/grafico_dados.png";
import logo_lorena from "../../assets/imagens/img_lorena.png";
import HeaderLogado from "../../componentes/HeaderLogado";
import LinkButton from "../../componentes/LinkButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./styles.scss"
import { PortaVoltar } from "../../assets/icons/SVGicons";


export default function Amir_AreaCandidata() {
    return (
        <>
        <HeaderLogado/>
        <Container className=" " >

                 <Row className="d-flex flex-column flex-md-row justify-content-center align-items-center  ">
                
                    <Col xl={3} className=" col1_ac "> 
                        <div className="text-center" >
                            <img className="logo_lorena mb-2 " src={logo_lorena} width={75}/>
                            <h2 className="nome_usuario fs-5 ">Nome da usuária</h2>
                            
                        </div>

                        <div className="btns_ac_div ">
                            <LinkButton className="btn_ac_mensagens btn-primary border-0 fw-semibold rounded-pill d-flex justify-content-center align-items-center" to="" text="Mensagens"></LinkButton>
                            <LinkButton className="btn_ac_editar btn-primary border-0 fw-semibold rounded-pill d-flex justify-content-center align-items-center" to="" text="Editar perfil"></LinkButton>
                            <LinkButton className="btn_ac_curriculo btn-secondary  border-0 fw-semibold rounded-pill d-flex justify-content-center align-items-center " to="" text="Currículo"></LinkButton>
                            
                        
                        </div>
                        <div className="btn_ac_sair_div">
                            <div className="porta_sair mt-1">
                            <PortaVoltar/>
                            </div>
                            <LinkButton className="btn-link btn_ac_sair fs-6 text-bg-light text-decoration-none fw-semibold text-danger text-center"  to="" text="Sair da conta"></LinkButton>
                            
                        </div>
                    </Col>

                    <Col xl={9} className="img_ac_div img-fluid  ">
                            <img className="img_ac img-fluid " src={grafico_dados} width={960}/>
                    </Col>
                </Row>

                          
        </Container>
        </>
    );
  }