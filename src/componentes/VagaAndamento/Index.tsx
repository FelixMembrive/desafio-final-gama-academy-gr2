import { ProgressBar, Card } from "react-bootstrap";
import AcordionVaga from "../AcordionVaga";
import LinkButton from "../LinkButton";

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
        fase: string
    }[];
}

export default function VagasAndamento(props: IVagasAndamentoProps){
    return(
        <AcordionVaga nome_empresa={props.nome_empresa} nome_vaga={props.nome_vaga} img={props.logo_empresa}>
            <div>
                <Card>
                    <Card.Body>
                        {/* <img src="../../assets/icons/face_3.png" alt="" /> */}
                        <p>Atualmente tem {props.candidatos} candidatos concorrendo nesta vaga</p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <p>A empresa {props.visualizada? "visualizou" : "ainda não visualizou"} sua candidatura</p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <p>A empresa {props.baixada? "baixou" : "ainda não baixou"} seu currículo</p>
                    </Card.Body>
                </Card>
                <h6>Etapas do processo</h6>
                <p>etapa atual: {props.etapa_atual}</p>
                <LinkButton to='#' text="Detalhes da vaga"/>
            </div>
        </AcordionVaga>
    );
}