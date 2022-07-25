import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import { Link } from "react-router-dom";
import Depoimentos from "../../componentes/Depoimentos";
import LinkButton from "../../componentes/LinkButton";

export default function HomeDev() {
  return (
    <>
      <div className="m-3">
        <LinkButton to="/home" text="Home" variant="primary" className="m-1" />
        <LinkButton to="/areacandidata" text="Área da Candidata" variant="info" className="m-1" />
        <LinkButton to="/pesquisa" text="Peqsuisa de Vagas" variant="danger" className="m-1" />
        <ModalBS />
      </div>

    </>
  );
}
