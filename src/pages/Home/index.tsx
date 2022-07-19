import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import LinkButton from "../../componentes/LinkButton";

export default function Home() {
  return (
    <>
      <h1>DESAFIO FINAL</h1>
      <div>
        <LinkButton to="/sobre" text="sobre" variant="primary" className="m-1"/>
        <LinkButton to="/parceiros" text="parceiros" variant="secondary" className="m-1"/>
        <LinkButton to="/ajuda" text="ajuda" variant="success" className="m-1"/>
        <LinkButton to="/profissionais" text="profissionais" variant="warning" className="m-1"/>
        <LinkButton to="/vagas" text="vagas" variant="danger" className="m-1"/>
        <LinkButton to="/perfil" text="perfil" variant="info" className="m-1"/>
      </div>
      <Button>Botão BS TESTE</Button>
      <AlertBS />
      <ModalBS />
    </>
  );
}
