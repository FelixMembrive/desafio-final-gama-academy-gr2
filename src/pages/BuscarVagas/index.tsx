import { Col, Row } from "react-bootstrap";
import CardVaga from "../../componentes/CardVaga";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import LinkButton from "../../componentes/LinkButton";
import LinkBack from "../../componentes/LinkBack";
import LinkText from "../../componentes/LinkText";
import SelectBox from "../../componentes/SelectBox"; 
import vagas from '../../assets/mockups/vagas-mockup.json';
import { Bookmarks, Facebook, SelectArrow } from "../../assets/icons/SVGicons";
import './style.scss';

const vagasRecomendadas = vagas.recomendadas;

export default function BuscarVagas() {
  return (
    <>
      <Header />
      <section className="buscar-secao-buscar mt-5">
        <LinkBack text="Voltar para área da candidata"></LinkBack>
        <Row className="mt-5 mx-auto col-10 sm-col-3">
          <input placeholder="Buscar vagas" type="text" />
        </Row>
      </section>

      <Row className="buscar-secao-filtros mt-5 mx-auto col-10 sm-col-3">
        <h3>Filtros</h3>
        <SelectBox className="" placeholder="Nível de experiência" optionValues={[]} optionTexts={[]} />
        <SelectBox className="mt-2" placeholder="Jornada de trabalho" optionValues={[]} optionTexts={[]} />
        <SelectBox className="mt-2" placeholder="Modalidade" optionValues={[]} optionTexts={[]} />
        <SelectBox className="mt-2" placeholder="Regime de contratação" optionValues={[]} optionTexts={[]} />
      </Row>
      <Row className="buscar-secao-minhas-acoes mt-5 mx-auto col-10 sm-col-3">
        <h3>Minhas ações</h3>
        <LinkButton iconRight={<Bookmarks className="icon-left-right float-start"/>} className="button-icon mt-2" to="" text="Minhas Candidaturas"></LinkButton>
        <LinkButton iconLeft={<SelectArrow className="icon-left-right float-end"/>} className="mt-2" to="" text="Meus Alertas"></LinkButton>
      </Row>
      <Row className="mt-5 mx-auto col-10 sm-col-3">
        <h3>Recomendamos para você</h3>
        {vagasRecomendadas.map((vaga, index)=> {
          return <CardVaga key={index} nome_empresa={vaga.nome_empresa} nome_vaga={vaga.nome_vaga} salvo={vaga.salvo} img={vaga.logo_empresa} />
        })}
      </Row>
      <Footer />
    </>


  );
}
