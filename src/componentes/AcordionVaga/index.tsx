import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll';
import { Accordion, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg';

import './style.scss';
import { ReactElement, useState } from "react";
import { BookmarkOutline, Bookmark } from 'react-ionicons';
import AccordionBody from "react-bootstrap/esm/AccordionBody";

interface IAcordionVagasProps {
    nome_vaga: string,
    nome_empresa: string,
    local_empresa: string,
    img?: string,
    className?: string,
}

export default function AcordionVaga(props: IAcordionVagasProps) {

    return (
        <Accordion className={`card-vagas border-0 p-0 m-0 ${props.className}`}>
            <Accordion.Item className='card-vagas border-0 p-0 m-0' eventKey="0">
            <Accordion.Header className="card-vagas-body d-flex justify-content-between align-items-center m-0 p-0">
                <div className='d-flex justify-content-start'>
                    <img src={props.img ? props.img : logo} alt={`logo da empresa ${props.nome_empresa}`} className="img-card-vagas me-8 me-10 img-fluid" />
                    <div className="card-vagas-text">
                        <p className="m-0">{props.nome_vaga}</p>
                        <p className="m-0">{props.nome_empresa}</p>
                        <p className="m-0">{props.local_empresa}</p>
                    </div>
                </div>
            </Accordion.Header>
            <AccordionBody>
                <p>HI</p>
            </AccordionBody>
            </Accordion.Item>
        </Accordion>
    );
}
