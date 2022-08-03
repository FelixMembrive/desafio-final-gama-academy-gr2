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

const vagasRecomendadas = vagas.recomendadas;

export default function BuscarVagas() {
  return (
    <>
      <Header />
      <section className="buscar-secao-buscar mt-5">
        <LinkBack text="Voltar para área da candidata"></LinkBack>
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
        <LinkButton iconRight={<Bookmarks className="icon-left-right-acoes float-start" />} className="me-2 button-icon-acoes " to="" text="Minhas Candidaturas"></LinkButton>
        <LinkButton iconRight={<Notification className="icon-left-right-acoes float-start" />} className="me-2 button-icon-acoes " to="" text="Meus Alertas"></LinkButton>
      </Row>
      <Row className="mb-5 mt-5 mx-auto ms-4 col-10 sm-col-3">
        <h3 className="title-sections">Recomendamos para você</h3>
        {vagasRecomendadas.map((vaga, index) => {
          return <CardVaga key={index} nome_empresa={vaga.nome_empresa} nome_vaga={vaga.nome_vaga} salvo={vaga.salvo} img={vaga.logo_empresa} />
        })}
      </Row>
      <Footer />
    </>


  );
}
