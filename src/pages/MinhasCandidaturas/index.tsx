import { useState } from "react";
import { Title } from "../../componentes/FeatureCard/styles";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import { ButtonWrapper, Goback, Label, ListWrapper, MockItem, Toggle, Wrapper } from "./styles";
import ArrowBack from "../../assets/icons/arrow_back.png";
import mockData from '../../assets/mockups/vagas-mockup.json';
import CardVaga from "../../componentes/CardVaga";
import AcordionVaga from "../../componentes/AcordionVaga";
import VagasAndamento from "../../componentes/VagaAndamento";
import LinkBack from "../../componentes/LinkBack";

enum ApplicationFilter {
  Salvas = "salvas",
  EmAndamento = "em_andamento",
  Finalizadas = "finalizadas",
}

export default function MinhasCandidaturas() {
  const [selected, setSelected] = useState<ApplicationFilter>(ApplicationFilter.Salvas);

  // TODO: Remover o mock e utilizar mudanca de selected
  // para alterar resultado baseado na api

  const renderList = () => {
    if (selected == "salvas") {
      return mockData[selected].map((item, index) => (
        <CardVaga key={index} nome_vaga={item.nome_vaga} nome_empresa={item.nome_empresa} salvo={item.salvo} img={item.logo_empresa} />
      ));
    } else if (selected == "em_andamento") {
      return mockData[selected].map((item, index) => {
        const etapa_atual = item.etapas.filter((etapa)=> etapa.fase === "em_andamento");
        const index_etapa_atual = item.etapas.indexOf(etapa_atual[0])
        return (
          <div className="mb-3" key={index}>
            <VagasAndamento 
            key={index}
            nome_vaga={item.nome_vaga} 
            nome_empresa={item.nome_empresa} 
            logo_empresa={item.logo_empresa} 
            candidatos={item.candidaturas} 
            visualizada={item.visualizada} 
            baixada={item.baixada} 
            etapas={item.etapas} 
            etapa_atual={index_etapa_atual}
            />
          </div>
        )
      });
    } else if (selected == "finalizadas") {
      return mockData[selected].map((item, index) => (
        <div className="mb-3" key={index}>
          <AcordionVaga key={index} nome_vaga={item.nome_vaga} nome_empresa={item.nome_empresa} img={item.logo_empresa}>
            <p>Dados da empresa</p>
          </AcordionVaga>
        </div>
      ));
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        {/* <div>
          <img src={ArrowBack} alt="arrow_back" />
          <Goback>Voltar para buscar vagas</Goback>
        </div> */}
        <LinkBack className="mt-4" text="Voltar para buscar vagas"></LinkBack>
        <Title>Minhas candidaturas</Title>
        <ButtonWrapper>
          <Toggle onClick={() => setSelected(ApplicationFilter.Salvas)} active={selected === "salvas"}>
            Salvas
          </Toggle>
          <Toggle onClick={() => setSelected(ApplicationFilter.EmAndamento)} active={selected === "em_andamento"}>
            Em andamento
          </Toggle>
          <Toggle onClick={() => setSelected(ApplicationFilter.Finalizadas)} active={selected === "finalizadas"}>
            Finalizadas
          </Toggle>
        </ButtonWrapper>
        <ListWrapper>
          {renderList()}
        </ListWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
