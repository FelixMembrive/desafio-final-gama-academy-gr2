import { Description, Iframe, Title, Img, Wrapper } from "./styles";

interface Props {
  title: string;
  description: string;
  img: string;
}

const FeatureCard = (props: Props) => {
  return (
    <Wrapper>
      <Img src={props.img} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Wrapper>
  );
};

export default FeatureCard;
