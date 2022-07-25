import { Container } from "react-bootstrap";
import areagrafica_candidaturas from "../../assets/imagens/areagrafica_candidaturas.png";
import logo_boyzin from "../../assets/imagens/logo_boyzin.png";
import LinkButton from "../../componentes/LinkButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Amir_AreaCandidata() {
    return (
        <Container fluid="">

                 <Row className="d-flex flex-column flex-md-row me-4">
                
                    <Col xl={3} className="pe-0"> 
                        <div className="text-center mt-5" >
                            <img className=" mt-5 mb-4 " src={logo_boyzin} width={75}/>
                            <h2 className="nome_usuario fs-5 mb-5 ">Nome da usuária</h2>
                            
                        </div>

                        <div className="d-block text-center ms-3 me-0 ">
                            <LinkButton className="btn-secondary p-2 border border-0 text-body fw-semibold w-100 ms-0 ms-md-0 mt-3" to="" text="Editar perfil"></LinkButton>
                            <LinkButton className="btn-secondary p-2 border border-0 text-body fw-semibold w-100 ms-0 ms-md-0 mt-3" to="" text="Editar currículo"></LinkButton>
                            <LinkButton className="btn-secondary p-2 border border-0 text-body fw-semibold w-100 ms-0 ms-md-0 mt-3" to="" text="Minhas candidaturas"></LinkButton>
                            <LinkButton className="btn-secondary p-2 border border-0 text-body fw-semibold w-100 ms-0 ms-md-0 mt-3" to="" text="Meus alertas"></LinkButton>
                        </div>
                    </Col>

                    <Col xl={9} className="">
                            <img className=" img-fluid align-middle ms-3 mt-4 mb-0 mb-lg-5 me-5 pe-0 pt-4 h-75 " src={areagrafica_candidaturas} width={960}/>
                    </Col>
                </Row>

                          
        </Container>
    );
  }