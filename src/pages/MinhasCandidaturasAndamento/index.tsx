import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AcordionVaga from "../../componentes/AcordionVaga";

export default function MinhasCandidaturasAndamento() {
    return (
      <>
        <h1>CANDIDATURAS EM ANDAMENTO</h1>
        <AcordionVaga nome_vaga="Nome da Vaga" nome_empresa="Empresa" local_empresa="Local">
          <Link to="/">Link de teste</Link>
          <h2>Textinho de teste</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi iste quia! Placeat dolor cumque excepturi aspernatur aliquid laudantium nostrum.</p>
          <Button> Botão de teste </Button>
        </AcordionVaga>
      </>
    );
  }