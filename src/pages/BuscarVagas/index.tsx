import './style.scss';
import { Col, Row } from "react-bootstrap";
import CardVaga from "../../componentes/CardVaga";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import LinkButton from "../../componentes/LinkButton";
import LinkBack from "../../componentes/LinkBack";
import LinkText from "../../componentes/LinkText";
import SelectBox from "../../componentes/SelectBox";
import vagas from '../../assets/mockups/vagas-mockup.json';
import { Bookmarks, Facebook, SelectArrow, Notification } from "../../assets/icons/SVGicons";
import "../../typography.scss";
import ScrollContainer from 'react-indiana-drag-scroll';
import HeaderLogado from '../../componentes/HeaderLogado';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const vagasRecomendadas = vagas.recomendadas;

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

export default function BuscarVagas() {
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

  if (user && user.token.length > 0) {
    return (
      <>
        <HeaderLogado />
        <section className="buscar-secao-buscar mt-5">
          <LinkBack text="Voltar para área da candidata" />
          <Row className="mt-5 mx-auto ms-4">
            <input className="search-label" placeholder="Buscar vagas" type="text" />
          </Row>
        </section>

        <Row className="buscar-secao-filtros mt-5 mx-auto ms-4">
          <h3 className="title-sections">Filtros</h3>
          <ScrollContainer className="ms-8 ms-lg-20 scroll-container d-grid">
            <Row className="flex-nowrap row gap-xs-3 gap-lg-16">
              <LinkButton iconLeft={<SelectArrow className="icon-left-right-filtro float-end rotate-svg-180dg" />} className="me-2 button-icon-filtro " to="" text="Nível de experiência"></LinkButton>
              <LinkButton iconLeft={<SelectArrow className="icon-left-right-filtro float-end rotate-svg-180dg" />} className="me-2 button-icon-filtro " to="" text="Modalidade"></LinkButton>
              <LinkButton iconLeft={<SelectArrow className="icon-left-right-filtro float-end rotate-svg-180dg" />} className="me-2 button-icon-filtro " to="" text="Jornada de trabalho"></LinkButton>
              <LinkButton iconLeft={<SelectArrow className="icon-left-right-filtro float-end rotate-svg-180dg" />} className="me-2 button-icon-filtro " to="" text="Regime de contratação"></LinkButton>
              {/* <SelectBox className="" placeholder="Nível de experiência" optionValues={[]} optionTexts={[]} />
          <SelectBox className="mt-2" placeholder="Jornada de trabalho" optionValues={[]} optionTexts={[]} />
          <SelectBox className="mt-2" placeholder="Modalidade" optionValues={[]} optionTexts={[]} />
          <SelectBox className="mt-2" placeholder="Regime de contratação" optionValues={[]} optionTexts={[]} /> */}
            </Row>
          </ScrollContainer>

        </Row>
        <Row className="buscar-secao-minhas-acoes mt-5 ms-4 mx-auto">
          <h3 className="title-sections">Minhas ações</h3>
          <LinkButton iconRight={<Bookmarks className="icon-left-right-acoes float-start" />} className="me-2 button-icon-acoes " to="../candidaturas" text="Minhas Candidaturas"></LinkButton>
          <LinkButton iconRight={<Notification className="icon-left-right-acoes float-start" />} className="me-2 button-icon-acoes " to="" text="Meus Alertas"></LinkButton>
        </Row>
        <Row className="mb-5 mt-5 mx-auto ms-4 col-10 sm-col-3">
          <h3 className="title-sections">Recomendamos para você</h3>
          {vagas.length > 0 ? vagas.map((vaga, index) => {
            return <CardVaga key={index} nome_empresa={vaga.companyName} nome_vaga={vaga.name} salvo={vagasSalvas.includes(vaga._id)} img={vaga.jobPicture} id={vaga._id} />;
          }) : null}
        </Row>
        <Footer />
      </>


    );
  } else {
    return (
      <>
        <Header />
        <div id="not-logged-div" className="d-flex flex-column align-items-center text-center py-5 px-1">
          <h2 className="my-5">Ops! Esta página é de acesso exclusivo para usuárias</h2>
          <LinkButton className=" btn btn001 rounded-pill my-2" to="/register" text="Cadastre-se"></LinkButton>
          <LinkButton className="btn002 btn-light border border-dark border-2 rounded-pill my-2" to="/login" text="Entrar"></LinkButton>
        </div>
        <Footer />
      </>
    );
  }
}
