import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll';
import { Card, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg';

import './style.scss';
import { ReactElement, useEffect, useState } from "react";
import { BookmarkSimple } from 'phosphor-react';
import { useSelector } from "react-redux";
import axios from "axios";
import getStoredState from "redux-persist/es/getStoredState";

interface ICardVagasProps {
    nome_vaga: string,
    nome_empresa: string,
    local_empresa?: string,
    salvo: Boolean,
    img?: string,
    className?: string,
    id: string,
}

export default function CardVaga(props: ICardVagasProps) {
    const [salvar, setSalvar] = useState(props.salvo);
    const user = useSelector((state: any) => state.persistedReducer);
    const baseURL = 'https://tech-delas.herokuapp.com';

    useEffect(() => {
        setSalvar(props.salvo);
    }, [props.salvo]);

    const handleSalvar = async () => {
        setSalvar(true);
        const resUser = await axios.get(`${baseURL}/users/${user.id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`,
            }
        });
        const vagasSalvas = resUser.data.favoriteJobs;
        if (!vagasSalvas.includes(props.id)) {
            const resSalvarVaga = await axios.put(`${baseURL}/users/${user.id}`, {
                "favoriteJobs": [...vagasSalvas, props.id]
            }, {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                }
            });
        };
    };
    const handleNaoSalvar = async () => {
        setSalvar(false);
        const resUser = await axios.get(`${baseURL}/users/${user.id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`,
            }
        });
        const vagasSalvas = resUser.data.favoriteJobs;
        if (vagasSalvas.includes(props.id)) {
            const index = vagasSalvas.findIndex((vaga: any) => (vaga._id === props.id));
            vagasSalvas.splice(index, 1);
            const resSalvarVaga = await axios.put(`${baseURL}/users/${user.id}`, {
                "favoriteJobs": vagasSalvas
            }, {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                }
            });
        };
    };
    let icon: ReactElement | null = null;

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
