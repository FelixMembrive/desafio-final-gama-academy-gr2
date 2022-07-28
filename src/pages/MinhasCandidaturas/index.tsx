import { useState } from "react";
import { Title } from "../../componentes/FeatureCard/styles";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import { ButtonWrapper, Goback, Label, ListWrapper, MockItem, Toggle, Wrapper } from "./styles";
import ArrowBack from "../../assets/icons/arrow_back.png";

enum ApplicationFilter {
  Salvas = "salvas",
  EmAndamento = "emAndamento",
  Finalizadas = "finalizadas",
}

export default function MinhasCandidaturas() {
  const [selected, setSelected] = useState<ApplicationFilter>(ApplicationFilter.Salvas);

  // TODO: Remover o mock e utilizar mudanca de selected
  // para alterar resultado baseado na api
  const mockList = {
    [ApplicationFilter.Salvas]: [
      {
        title: "Product Design",
        subtitle: "Americanas",
      },
      {
        title: "UX Design",
        subtitle: "Decolar",
      },
    ],
    [ApplicationFilter.EmAndamento]: [
      {
        title: "UX Design",
        subtitle: "Decolar",
      },
    ],
    [ApplicationFilter.Finalizadas]: [
      {
        title: "UX Writing",
        subtitle: "next",
      },
      {
        title: "UX Design",
        subtitle: "Decolar",
      },
    ],
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <img src={ArrowBack} alt="arrow_back" />
          <Goback>Voltar para buscar vagas</Goback>
        </div>
        <Title>Minhas candidaturas</Title>
        <ButtonWrapper>
          <Toggle onClick={() => setSelected(ApplicationFilter.Salvas)} active={selected === "salvas"}>
            Salvas
          </Toggle>
          <Toggle onClick={() => setSelected(ApplicationFilter.EmAndamento)} active={selected === "emAndamento"}>
            Em andamento
          </Toggle>
          <Toggle onClick={() => setSelected(ApplicationFilter.Finalizadas)} active={selected === "finalizadas"}>
            Finalizadas
          </Toggle>
        </ButtonWrapper>
        <ListWrapper>
          {mockList[selected].map((item) => (
            <MockItem>
              <Label>{item.title}</Label>
              <Label>{item.subtitle}</Label>
            </MockItem>
          ))}
        </ListWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}
