import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll';
import { Card, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg';

import './style.scss';
import { ReactElement, useState } from "react";
import { BookmarkSimple } from 'phosphor-react'

interface ICardVagasProps {
    nome_vaga: string,
    nome_empresa: string,
    local_empresa?: string,
    salvo: Boolean | null,
    img?: string,
    className?: string,
}

export default function CardVaga(props: ICardVagasProps) {
    const [salvar, setSalvar] = useState(props.salvo === true);
    const handleSalvar = () => {
        setSalvar(true);
    };
    const handleNaoSalvar = () => {
        setSalvar(false);
    };
    let icon: ReactElement | null = null;

    if (props.salvo !== null) {
        if (salvar) {
            icon = <div className="icone-vagas-salvar m-0 p-0 d-flex">
                <BookmarkSimple
                    onClick={handleNaoSalvar}
                    color="#000000"
                    height="100%"
                    width="100%"
                    alt="salva"
                    weight="fill"
                />
            </div>;
        } else {
            icon = <div className="icone-vagas-salvar m-0 p-0 d-flex">
                <BookmarkSimple
                    onClick={handleSalvar}
                    color="#000000"
                    height="100%"
                    width="100%"
                    weight="regular"
                    alt="salvar"
                />
            </div>;
        }
    }

    return (
        <Card className={`card-vagas border-0 p-3 p-lg-4 ${props.className}`}>
            <Card.Body className="card-vagas-body d-flex justify-content-between align-items-center p-0">
                <div className='d-flex justify-content-start '>
                    <img src={props.img ? props.img : logo} alt={`logo da empresa ${props.nome_empresa}`} className="img-card-vagas me-3 melg--5 img-fluid" />
                    <div className="card-vagas-text">
                        <p className="m-0">{props.nome_vaga}</p>
                        <p className="m-0">{props.nome_empresa}</p>
                    </div>
                </div>
                {icon}
            </Card.Body>
        </Card>
    );
}
