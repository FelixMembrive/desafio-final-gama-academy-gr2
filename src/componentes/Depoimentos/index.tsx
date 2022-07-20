import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Row } from "react-bootstrap";

export default function Depoimentos() {
  return (
    <div>
        <h2>O que as pessoas dizem</h2>
        <ScrollContainer className="scroll-container">
        <Row className="flex-nowrap">
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        <CardVideo />
        </Row>
      </ScrollContainer>
    </div>
  );
}
