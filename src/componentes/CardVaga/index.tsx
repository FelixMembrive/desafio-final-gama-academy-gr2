import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll';
import { Card, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg';

import './style.scss';
import { ReactElement, useState } from "react";
import { BookmarkOutline, Bookmark } from 'react-ionicons';

interface ICardVagasProps {
    nome_vaga: string,
    nome_empresa: string,
    local_empresa: string,
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
                <Bookmark
                    onClick={handleNaoSalvar}
                    color={'#00000'}
                    height="100%"
                    width="100%"
                />
            </div>;
        } else {
            icon = <div className="icone-vagas-salvar m-0 p-0 d-flex">
                <BookmarkOutline
                    onClick={handleNaoSalvar}
                    color={'#00000'}
                    height="100%"
                    width="100%"
                />
            </div>;
        }
    }

    return (
        <Card className={`card-vagas border-0 p-xs-5 p-lg-7 ${props.className}`}>
            <Card.Body className="card-vagas-body d-flex justify-content-between align-items-center m-0 p-0">
                <div className='d-flex justify-content-start '>
                    <img src={props.img ? props.img : logo} alt={`logo da empresa ${props.nome_empresa}`} className="img-card-vagas me-8 me-10 img-fluid" />
                    <div className="card-vagas-text">
                        <p className="m-0">{props.nome_vaga}</p>
                        <p className="m-0">{props.nome_empresa}</p>
                        <p className="m-0">{props.local_empresa}</p>
                    </div>
                </div>
                {icon}
            </Card.Body>
        </Card>
    );
}
