import { useState } from "react";
import { Title } from "../../componentes/FeatureCard/styles";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import { ButtonWrapper, Goback, Label, ListWrapper, MockItem, Toggle, Wrapper } from "./styles";
import ArrowBack from "../../assets/icons/arrow_back.png";
import mockData from '../../assets/mockups/vagas-mockup.json';
import CardVaga from "../../componentes/CardVaga";
import AcordionVaga from "../../componentes/AcordionVaga";
import VagasAndamento from "../../componentes/VagaAndamento/Index";
import VagasFinalizadas from "../../componentes/VagaFinalizada";
import LinkBack from "../../componentes/LinkBack";
import { Row } from "react-bootstrap";
import HeaderLogado from "../../componentes/HeaderLogado";
import BackgroundWaves from "../../componentes/BackgroundWaves";
import cornerPattern from '../../assets/icons/cornerPattern.svg';
import centerPattern from '../../assets/icons/centerPattern.svg';
import LinkButton from "../../componentes/LinkButton";
import { useSelector } from "react-redux";

enum ApplicationFilter {
  Salvas = "salvas",
  EmAndamento = "em_andamento",
  Finalizadas = "finalizadas",
}

export default function MinhasCandidaturas() {
  window.scrollTo(0, 0)
  const user = useSelector((state: any) => state.persistedReducer);
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
        const etapa_atual = item.etapas.filter((etapa) => etapa.fase === "em_andamento");
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
          <VagasFinalizadas
            key={index}
            nome_vaga={item.nome_vaga}
            nome_empresa={item.nome_empresa}
            logo_empresa={item.logo_empresa}
            feedback={item.retorno}
            areas={item.melhorias}
          />
        </div>
      ));
    }
  };

  if (user && user.token.length > 0) {
  return (
    <>
      <HeaderLogado pic={user.pic} />
      <Row className="mt-5">
        <LinkBack text="Voltar para buscar vagas" />
      </Row>
      <Wrapper>
        {/* <div>
          <img src={ArrowBack} alt="arrow_back" />
          <Goback>Voltar para buscar vagas</Goback>
        </div> */}
        {/* <LinkBack className="mt-4" text="Voltar para buscar vagas"></LinkBack> */}
        <Title className="ms-3" >Minhas candidaturas</Title>
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
      <BackgroundWaves className="leftPattern" pattern={cornerPattern} />
      <BackgroundWaves className="rightPattern" pattern={cornerPattern} paddingImage={"350px"} />
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
