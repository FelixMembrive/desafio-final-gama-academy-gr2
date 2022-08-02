import React from 'react';
import { Card } from "react-bootstrap";
import { useRef, useLayoutEffect } from "react";
import AcordionVaga from "../AcordionVaga";
import LinkButton from "../LinkButton";
import './style.scss';

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
    const lineLength = (props.etapas.length -1) *76;
    console.log(lineLength)
    const ref = useRef<HTMLHeadingElement>(null);
    useLayoutEffect(() => {
        if(ref.current !== null){
            ref.current.style.setProperty('height', `${lineLength}px`, 'important');
        }
      }, []);
    return (
        <AcordionVaga nome_empresa={props.nome_empresa} nome_vaga={props.nome_vaga} img={props.logo_empresa}>
            <div>
                <Card>
                    <Card.Body className=" card-rosto d-flex align-items-center">
                        <img className='icon-vagas-andamento rosto' src="https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/icons/face_3.png" alt="" />
                        <p>Atualmente tem {props.candidatos} candidatos concorrendo nesta vaga</p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className=" card-olho d-flex align-items-center">
                        <img className='icon-vagas-andamento olho' src="https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/icons/visibility.png" alt="" />
                        <p>A empresa {props.visualizada ? "visualizou" : "ainda não visualizou"} sua candidatura</p>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="card-download d-flex align-items-center">
                        <img className='icon-vagas-andamento download' src="https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/icons/download.png" alt="" />
                        <p>A empresa {props.baixada ? "baixou" : "ainda não baixou"} seu currículo</p>
                    </Card.Body>
                </Card>
                <h6 className="my-4">Etapas do processo</h6>
                <div className="vagas-etapas-container">
                    <div className="div-colorida" ref={ref}> </div>
                    <ul>
                        {props.etapas.map((etapa, index) => {
                            return (
                                <li key={index} className={`vaga-etapa-${etapa.fase}`}>
                                    <Card className="mt-3">
                                        <Card.Body className="p-2">
                                            <h6>{etapa.nome}</h6>
                                            <p className="m-0" >{etapa.candidatos} pessoas nesta etapa</p>
                                        </Card.Body>
                                    </Card>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <LinkButton to='#' className="btn-light" text="Detalhes da vaga" />
            </div>
        </AcordionVaga>
    );
}