import { Button, Container } from "react-bootstrap";
import grafico_dados from "../../assets/imagens/grafico_dados.png";
import LinkButton from "../LinkButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from "react-redux";
import { setUser } from '../../Store/modules/user';
import { useNavigate } from 'react-router-dom';

import { PortaVoltar } from "../../assets/icons/SVGicons";
import UploadAndDisplayImage from "../uploadphoto";

import BackgroundWaves from "../BackgroundWaves";
import cornerPattern from '../../assets/icons/cornerPattern.svg';
import centerPattern from '../../assets/icons/centerPattern.svg';

import "./styles.scss";

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

                <Row className="d-flex flex-column flex-md-row justify-content-center pb-3 mb-2 align-items-xl-center ">

                    <Col xl={3} className=" col1_ac align-items-center">
                        <div className="text-center" >
                            {/* <img className="logo_lorena mb-2 " src={props.pic ? props.pic : logo_usuaria} width={75} /> */}
                            <UploadAndDisplayImage/>
                            <h2 className="nome_usuario mt-3 fs-5 ">{props.name ? props.name : "Usuária"}</h2>
                            {/* <h2 className="nome_usuario mt-3 fs-5 ">{userName ? userName : "Usuária"}</h2> */}

                        </div>

                        <div className="btns_ac_div justify-content-center">
                            <LinkButton className="hover-primary-darker btn_ac_buscarv btn-primary border-0 fw-semibold rounded-pill d-flex justify-content-center align-items-center" to="../buscarvagas" text="Buscar vagas"></LinkButton>
                            <LinkButton className="hover-primary-darker btn_ac_minhasc btn-primary border-0 fw-semibold rounded-pill d-flex justify-content-center align-items-center" to="../candidaturas" text="Minhas candidaturas"></LinkButton>
                            <LinkButton className="hover-primary-subtle btn_ac_editarc btn-secondary fw-semibold rounded-pill d-flex justify-content-center align-items-center " to="" text="Editar currículo"></LinkButton>


                        </div>


                        <div className="btn_ac_sair_div">
                            <div className="porta_sair">
                                <PortaVoltar />
                            </div>
                            <div className="btn_ac_sair2">
                                <Button className="btn_ac_sair" onClick={handleLogout} >Sair da conta</Button>
                            </div>
                        </div>


                    </Col>

                    <Col xl={9} className="img_ac_div img-fluid justify-content-center justify-content-xl-center ">
                        <img className="img_ac img-fluid " src={grafico_dados} width={960} />
                    </Col>
                </Row>
{/* 
                <BackgroundWaves className="leftPattern"pattern={cornerPattern}/>
                <BackgroundWaves className="rightPattern" pattern={cornerPattern} paddingImage={"700px"}/>
                <BackgroundWaves className="centerPattern" pattern={centerPattern} paddingImage={"4000px"}/> */}

            </Container>
        </>
    );
}