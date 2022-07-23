import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './style.scss';
import VideoModal from "../VideoModal";

interface ICardVideoProps {
  videoTitle?: string;
  src: string;
  cardTitle: string;
  cardSubtitle: string;
  cardText: string;
}

export default function CardVideo(props: ICardVideoProps) {
  return (
    <Col className="card-col">
      <div className="img rounded d-flex flex-column justify-content-end">
        <VideoModal src={props.src} />
        <div className="depo-info rounded mt-16 mt-lg-76">
          <h3 className="fs-5 bg-transparent fw-semibold text-start my-1 ms-3">{props.cardTitle}</h3>
          <p className="fs-8 subtitle text-start bg-transparent m-0 ms-3">{props.cardSubtitle}</p>
          <p className="fs-6 text-start bg-transparent m-0 ms-3 mx-lg-4 mb-3 mb-lg-5 mt-2 mt-lg-3 lh-lg">{props.cardText}</p>
        </div>
      </div>
    </Col>
  );
}
