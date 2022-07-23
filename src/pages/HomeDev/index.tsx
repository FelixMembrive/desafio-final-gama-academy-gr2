import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import { Link } from "react-router-dom";
import Depoimentos from "../../componentes/Depoimentos";
import LinkButton from "../../componentes/LinkButton";

export default function HomeDev() {
  return (
    <>
      <div>
        <LinkButton to="/pesquisa" text="vagas" variant="danger" className="m-1" />
        <LinkButton to="/areacandidata" text="perfil" variant="info" className="m-1" />
      </div>
      <Button>Botão BS TESTE</Button>
      <ModalBS />
    </>
  );
}
