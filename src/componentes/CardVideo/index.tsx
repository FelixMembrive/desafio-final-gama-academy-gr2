import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function CardVideo() {
  return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/200/200" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
  );
}
