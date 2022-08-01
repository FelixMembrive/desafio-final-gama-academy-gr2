import AcordionVaga from "../AcordionVaga";
import './style.scss';
import { Link } from "react-router-dom";

interface IVagasFinalizadasProps {
    key: number;
    nome_vaga: string;
    nome_empresa: string;
    logo_empresa?: string;
    feedback: string;
    areas: {
        area: string,
        meios: { nome: string, link: string; }[];
    }[];
}

export default function VagasFinalizadas(props: IVagasFinalizadasProps) {
    const feedbackDividido = props.feedback.split(".");
    return (
        <AcordionVaga nome_empresa={props.nome_empresa} nome_vaga={props.nome_vaga} img={props.logo_empresa}>
            <div className="container-acordion-body-vagas-finalizadas">
                <h6 className="mb-4">Retorno sobre a sua candidatura</h6>
                {feedbackDividido.map((feedback, index)=>{
                    return (
                        <p className="feedback-vagas-finalizadas mb-4">{feedback}</p>
                    )
                })}
                <div className="vagas-areas-container">
                    <p className="my-4">Áreas a serem melhoradas e como conseguir:</p>
                    <ol className="lista-areas-vagas-finalizadas">
                        {props.areas.map((item, index) => {
                            return (
                                <li key={index} className="">
                                    <h6 className="titulo-item-meios-vagas-finalizadas">{item.area}</h6>
                                    <ul className="p-0 lista-meios-vagas-finalizadas">
                                        {item.meios.map((meio, index) => {
                                            return (
                                                <li>
                                                    <Link to="/listamentoras">{meio.nome}</Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ol>
                </div>
                <p>Mais uma vez, gostaríamos de agradecer seu interesse e participação até o momento.</p>
                <p>Atenciosamente,</p>
                <p>Equipe da {props.nome_empresa}.</p>
            </div>
        </AcordionVaga>
    );
}