import VideoModal from "../VideoModal";
import { Description, Iframe, Title, Placeholder, Wrapper } from "./styles";

interface Props {
  title: string;
  description: string;
  link: string;
}

const FeatureCard = (props: Props) => {
  return (
    <Wrapper>
      <Placeholder>
        <VideoModal src={props.link} />
      </Placeholder>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Wrapper>
  );
};

export default FeatureCard;
