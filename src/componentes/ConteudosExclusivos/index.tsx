import ScrollContainer from 'react-indiana-drag-scroll'
import { Row, Container } from "react-bootstrap";
import MiniCard from '../MiniCard';
import DefaultMiniCardImage from "../../assets/imagens/DefaultMiniCardImage.png";
import './styles.scss'

interface IConteudosExclusivos {
    title: string,
    substitle: string,
}

export default function ConteudosExclusivos(props:IConteudosExclusivos) {
  return (
      <Container fluid className="container-conteudos">
        <div className="content">
          <h2>{props.title}</h2>
          <p id="subtitle">{props.substitle}</p>
          <ScrollContainer className="scroll-container">
          <Row className="flex-nowrap">
            <div className="carousel-section">
              <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh"/>
              <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh"/>
              <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh"/>
            </div>
            <div className="carousel-section">
              <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh"/>
              <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh"/>
              <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh"/>
            </div>
            <div className="carousel-section">
              <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh"/>
              <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh"/>
              <MiniCard to={"link"} imgsrc={DefaultMiniCardImage} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh"/>
            </div>
          </Row>
        </ScrollContainer>
        </div>
      </Container>
  );
}