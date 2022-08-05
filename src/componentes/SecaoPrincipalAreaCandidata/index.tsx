import { Button, Container } from "react-bootstrap";
import grafico_dados from "../../assets/imagens/grafico_dados.png";
import logo_usuaria from "../../assets/icons/user.png";
import HeaderLogado from "../HeaderLogado";
import LinkButton from "../LinkButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from "react-redux";
import { setUser } from '../../Store/modules/user';
import { useNavigate } from 'react-router-dom';

import "./styles.scss";
import { PortaVoltar } from "../../assets/icons/SVGicons";

interface IAreaCandidataProps {
    name?: string;
    pic?: string;
}


export default function SecaoPrincipalAreaCandidata(props: IAreaCandidataProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(
            setUser({
                token: "",
                id: "",
                name: "",
                pic: "",
            }));
        navigate("/");
    };
    return (
        <>
            <Container className=" " >

                <Row className="d-flex flex-column flex-md-row justify-content-center pb-5 mb-2 align-items-xl-center ">

                    <Col xl={3} className=" col1_ac align-items-center">
                        <div className="text-center" >
                            <img className="logo_lorena mb-2 " src={props.pic ? props.pic : logo_usuaria} width={75} />
                            <h2 className="nome_usuario fs-5 ">{props.name ? props.name : "Usuária"}</h2>

                        </div>

                        <div className="btns_ac_div justify-content-center">
                            <LinkButton className="btn_ac_buscarv btn-primary border-0 fw-semibold rounded-pill d-flex justify-content-center align-items-center" to="../BuscarVagas" text="Buscar vagas"></LinkButton>
                            <LinkButton className="btn_ac_minhasc btn-primary border-0 fw-semibold rounded-pill d-flex justify-content-center align-items-center" to="../MinhasCandidaturas" text="Minhas candidaturas"></LinkButton>
                            <LinkButton className="btn_ac_editarc btn-secondary fw-semibold rounded-pill d-flex justify-content-center align-items-center " to="" text="Editar currículo"></LinkButton>


                        </div>


                        <div className="btn_ac_sair_div">
                            <div className="porta_sair mt-1 mt-xl-2">
                                <PortaVoltar />
                            </div>
                            <div className="btn_ac_sair2">
                                <Button className="btn-link btn_ac_sair fs-6 text-bg-light text-decoration-none fw-semibold text-danger text-center" onClick={handleLogout} >Sair da conta</Button>
                            </div>
                        </div>


                    </Col>

                    <Col xl={9} className="img_ac_div img-fluid justify-content-center justify-content-xl-center ">
                        <img className="img_ac img-fluid " src={grafico_dados} width={960} />
                    </Col>
                </Row>


            </Container>
        </>
    );
}