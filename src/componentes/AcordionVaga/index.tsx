import React from 'react';
import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll';
import { Accordion, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg';

import './style.scss';
import { ReactElement, useState } from "react";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

interface IAcordionVagasProps {
    nome_vaga: string,
    nome_empresa: string,
    img?: string,
    className?: string,
    children?: React.ReactNode,
}

export default function AcordionVaga(props: IAcordionVagasProps) {

    return (
        <Accordion className={`acordion-vagas border-0 p-0 m-0 ${props.className}`}>
            <Accordion.Item className='item-vagas border-0 p-0 m-0' eventKey="0">
            <Accordion.Header className="acordion-vagas-header d-flex justify-content-between align-items-center m-0 p-0">
                <div className='d-flex justify-content-start'>
                    <img src={props.img ? props.img : logo} alt={`logo da empresa ${props.nome_empresa}`} className="img-acordion-vagas me-3 img-fluid " />
                    <div className="acordion-vagas-text">
                        <p className="m-0">{props.nome_vaga}</p>
                        <p className="m-0">{props.nome_empresa}</p>
                    </div>
                </div>
            </Accordion.Header>
            <AccordionBody className="acordion-vagas-body">
                {props.children}
            </AccordionBody>
            </Accordion.Item>
        </Accordion>
    );
}
