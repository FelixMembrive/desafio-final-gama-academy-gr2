import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import { Link } from "react-router-dom";
import Depoimentos from "../../componentes/Depoimentos";
import LinkButton from "../../componentes/LinkButton";

export default function HomeDev() {
  return (
    <>
      <div className="m-3 bg-secondary">
        <LinkButton to="/home" text="Home" variant="primary" className="m-1" />
        <LinkButton to="/areacandidata" text="Área da Candidata" variant="info" className="m-1" />
        <LinkButton to="/buscarvagas" text="Buscar Vagas" variant="danger" className="m-1" />
        <LinkButton to="/candidaturas-salvas" text="Candidaturas Salvas" variant="success" className="m-1" />
        <LinkButton to="/candidaturas-finalizadas" text="Candidaturas Finalizadas" variant="warning" className="m-1" />
        <LinkButton to="/candidaturas-andamento" text="Candidaturas em Andamento" variant="dark" className="m-1" />
        <LinkButton to="/listamentoras" text="Lista de Mentoras" variant="light" className="m-1" />
      </div>
      <LinkButton to="#" text="primary" variant="primary" className="m-1" />
      <LinkButton to="#" text="primary-darker" variant="primary-darker" className="m-1" />
      <LinkButton to="#" text="primary-lighter" variant="primary-lighter" className="m-1" />
      <LinkButton to="#" text="primary-subtle" variant="primary-subtle" className="m-1" />
      <br />
      <LinkButton to="#" text="secondary" variant="secondary" className="m-1" />
      <LinkButton to="#" text="secondary-darker" variant="secondary-darker" className="m-1" />
      <LinkButton to="#" text="secondary-lighter" variant="secondary-lighter" className="m-1" />
      <LinkButton to="#" text="secondary-subtle" variant="secondary-subtle" className="m-1" />
      <br />
      <LinkButton to="#" text="success" variant="success" className="m-1" />
      <LinkButton to="#" text="success-darker" variant="success-darker" className="m-1" />
      <LinkButton to="#" text="success-lighter" variant="success-lighter" className="m-1" />
      <LinkButton to="#" text="success-subtle" variant="success-subtle" className="m-1" />
      <br />
      <LinkButton to="#" text="warning" variant="warning" className="m-1" />
      <LinkButton to="#" text="warning-darker" variant="warning-darker" className="m-1" />
      <LinkButton to="#" text="warning-lighter" variant="warning-lighter" className="m-1" />
      <LinkButton to="#" text="warning-subtle" variant="warning-subtle" className="m-1" />
      <br />
      <LinkButton to="#" text="danger" variant="danger" className="m-1" />
      <LinkButton to="#" text="danger-darker" variant="danger-darker" className="m-1" />
      <LinkButton to="#" text="danger-lighter" variant="danger-lighter" className="m-1" />
      <LinkButton to="#" text="danger-subtle" variant="danger-subtle" className="m-1" />
      <br />
      <LinkButton to="#" text="info" variant="info" className="m-1" />
      <LinkButton to="#" text="info-custom" variant="info-custom" className="m-1" />
      <LinkButton to="#" text="info-darker" variant="info-darker" className="m-1" />
      <LinkButton to="#" text="info-lighter" variant="info-lighter" className="m-1" />
      <LinkButton to="#" text="info-subtle" variant="info-subtle" className="m-1" />
      <br />
      <LinkButton to="#" text="dark" variant="dark" className="m-1" />
      <LinkButton to="#" text="dark-1" variant="dark-1" className="m-1" />
      <LinkButton to="#" text="dark-2" variant="dark-2" className="m-1" />
      <LinkButton to="#" text="dark-3" variant="dark-3" className="m-1" />
      <LinkButton to="#" text="dark-4" variant="dark-4" className="m-1" />
      <br />
      <LinkButton to="#" text="light" variant="light" className="m-1" />
      <LinkButton to="#" text="light-1" variant="light-1" className="m-1" />
      <LinkButton to="#" text="light-2" variant="light-2" className="m-1" />
      <LinkButton to="#" text="light-3" variant="light-3" className="m-1" />
      <LinkButton to="#" text="light-4" variant="light-4" className="m-1" />
    </>

  );
}
