import { Row } from "react-bootstrap";
import ScrollContainer from "react-indiana-drag-scroll";
import FeatureCard from "../FeatureCard";
import { Wrapper, Title } from "./styles";

const ExplicacaoFeatures = () => {
  let dados = [
    {
      title: "Lorem ipsum dolor ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna. Sed mattis commodo libero, sit amet tempus eros molestie eget. Praesent elementum nisi id massa mattis, at interdum neque vulputate. In vulputate velit consectetur tortor tempus mollis",
      link: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
    {
      title: "Lorem ipsum dolor ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna. Sed mattis commodo libero, sit amet tempus eros molestie eget. Praesent elementum nisi id massa mattis, at interdum neque vulputate. In vulputate velit consectetur tortor tempus mollis",
      link: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
    {
      title: "Lorem ipsum dolor ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna. Sed mattis commodo libero, sit amet tempus eros molestie eget. Praesent elementum nisi id massa mattis, at interdum neque vulputate. In vulputate velit consectetur tortor tempus mollis",
      link: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
  ];

  return (
    <Wrapper>
      <Title>Explicação das features da plataforma</Title>
      <ScrollContainer className="ms-8 ms-lg-20 scroll-container d-grid">
        <Row className="flex-nowrap row gap-xs-3 gap-lg-16">
          {dados.map((item) => {
            return <FeatureCard title={item.title} description={item.description} link={item.link} />;
          })}
        </Row>
      </ScrollContainer>
    </Wrapper>
  );
};

export default ExplicacaoFeatures;
