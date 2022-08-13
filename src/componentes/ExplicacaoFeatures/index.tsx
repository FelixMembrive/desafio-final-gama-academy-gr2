import { Row } from "react-bootstrap";
import ScrollContainer from "react-indiana-drag-scroll";
import FeatureCard from "../FeatureCard";
import { Wrapper, Title } from "./styles";
import Image_1 from "../../assets/imagens/servicosTechDelas/img1.png";
import Image_2 from "../../assets/imagens/servicosTechDelas/img2.png";
import Image_3 from "../../assets/imagens/servicosTechDelas/img3.png";

const ExplicacaoFeatures = () => {
  let dados = [
    {
      title: "Parcerias ",
      description: "Temos parcerias exclusivas e descontos especiais com as maiores escolas de technologia do Brasil",
      img: Image_1,
    },
    {
      title: "Mentoras",
      description: "Juntamos as melhores profisisonais do mercado para te ajudar na construção de uma carreira impecável",
      img: Image_2,
    },
    {
      title: "Curadoria de conteúdo ",
      description: "Acesse nosso blog para ter acesso aos melhores conteúdos sobre tecnologia, soft skills, entrevistas e muito mais",
      img: Image_3,
    },
  ];

  return (
    <Wrapper>
        <Title>Serviços da Tech Delas</Title>
    <ScrollContainer className="ms-8 ms-lg-20 scroll-container d-grid">
        <Row className="flex-nowrap row gap-xs-4 gap-lg-16">
          {dados.map((item) => {
            return <FeatureCard title={item.title} description={item.description} img={item.img} />;
          })}
        </Row>
      </ScrollContainer>
    </Wrapper>
  );
};

export default ExplicacaoFeatures;
