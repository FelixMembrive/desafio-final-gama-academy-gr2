import ScrollContainer from 'react-indiana-drag-scroll'
import { Row, Container } from "react-bootstrap";
import MiniCard from '../MiniCard';
import DefaultMiniCardImage from "../../assets/imagens/DefaultMiniCardImage.png";
import './styles.css'

interface IConteudosExclusivos {
    title: string,
    substitle: string,
}

export default function ConteudosExclusivos(props:IConteudosExclusivos) {
  return (
      <Container fluid className="container-conteudos">
        <div className="content">
          <h2>{props.title}</h2>
          <p>{props.substitle}</p>
          <ScrollContainer className="scroll-container">
          <Row className="flex-nowrap">
          <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna."/>
          <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna."/>
          <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna."/>
          <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna."/>
          <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna."/>
          <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna."/>
          <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna."/>
          </Row>
        </ScrollContainer>
        </div>
      </Container>
  );
}