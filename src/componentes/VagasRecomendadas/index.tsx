import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Card, Row } from "react-bootstrap";
import CardVaga from "../CardVaga";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './style.scss'

interface IVaga {
  _id: string;
  name: string;
  description: string;
  salary?: number,
  companyName: string;
  status: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  __v: number,
  jobPicture?: string;
  stage?: {
    title: string;
    numberOfCandidates?: number;
    status: string;
    _id: string;
  }[];
};

export default function VagasRecomendadas() {
  const user = useSelector((state: any) => state.persistedReducer);
  const baseURL = 'https://tech-delas.herokuapp.com';
  const [vagas, setVagas] = useState<IVaga[]>([]);
  const [vagasSalvas, setVagasSalvas] = useState<string[]>([]);

  useEffect(() => {
    const fetchVagas = async () => {

      // guardando todas as vagas encontradas
      const Resvagas = await axios.get(`${baseURL}/jobs`);
      setVagas(Resvagas.data);

      // guardando vagas salvas pelo usuário
      const ResvagasSalvas = await axios.get(`${baseURL}/users/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        }
      });
      setVagasSalvas(ResvagasSalvas.data.favoriteJobs);
    };
    fetchVagas();
  }, []);
    
  return (
    <div className="vagas-section-candidata py-11 pt-lg-26">
        <h2 className="titulo-vagas-candidata text-start ms-7 ms-lg-24 mb-xs-3 mb-lg-11">Vagas recomendadas para você</h2>
        <ScrollContainer className="ms-7 ms-lg-24 scroll-container d-grid">
        <Row className="row-cards-recomendados flex-nowrap row gap-3 gap-lg-5 ms-0">
        {vagas.length > 0 ? vagas.map((vaga, index) => {
            return <CardVaga key={index} nome_empresa={vaga.companyName} nome_vaga={vaga.name} salvo={vagasSalvas.includes(vaga._id)} img={vaga.jobPicture} id={vaga._id} />;
          }) : null}
        </Row>
      </ScrollContainer>
    </div>
  );
}
