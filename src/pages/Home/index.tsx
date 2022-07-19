import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>DESAFIO FINAL</h1>
      <Link to="/sobre"></Link>
      <Link to="/parceiros"></Link>
      <Link to="/ajuda"></Link>
      <Link to="/profissionais"></Link>
      <Link to="/vagas"></Link>
      <Link to="/perfil"></Link>
      <Button>Botão BS TESTE</Button>
      <AlertBS />
      <ModalBS />
    </>
  );
}
