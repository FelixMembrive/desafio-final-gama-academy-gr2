import { ProgressBar, Card } from "react-bootstrap";
import AcordionVaga from "../AcordionVaga";
import LinkButton from "../LinkButton";
import './style.scss'

interface IVagasAndamentoProps {
    nome_vaga: string;
    nome_empresa: string;
    logo_empresa?: string;
    etapa_atual: number;
    candidatos: number;
    visualizada: boolean;
    baixada: boolean;
    etapas: {
        nome: string,
        candidatos: number,
        fase: string;
    }[];
}

export default function VagasAndamento(props: IVagasAndamentoProps) {
    return (
        <AcordionVaga nome_empresa={props.nome_empresa} nome_vaga={props.nome_vaga} img={props.logo_empresa}>
            <div>
                <Card>
                    <Card.Body className="d-flex">
                        <img src="https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/icons/face_3.png" alt="" />
                        <p>Atualmente tem {props.candidatos} candidatos concorrendo nesta vaga</p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="d-flex">
                        <img src="https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/icons/visibility.png" alt="" />
                        <p>A empresa {props.visualizada ? "visualizou" : "ainda não visualizou"} sua candidatura</p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="d-flex">
                        <img src="https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/icons/download.png" alt="" />
                        <p>A empresa {props.baixada ? "baixou" : "ainda não baixou"} seu currículo</p>
                    </Card.Body>
                </Card>
                <h6>Etapas do processo</h6>
                <ul>
                    {props.etapas.map((etapa, index) => {
                        return (
                            <li key={index} className={`vaga-etapa-${etapa.fase}`}>
                                <Card>
                                    <Card.Body>
                                        <h6>{etapa.nome}</h6>
                                        <p>{etapa.candidatos} pessoas nesta etapa</p>
                                    </Card.Body>
                                </Card>
                            </li>
                        );
                    })}
                </ul>
                <LinkButton to='#' text="Detalhes da vaga" />
            </div>
        </AcordionVaga>
    );
}