import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import LinkButton from "../../componentes/LinkButton";
import Header from "../../componentes/Header"
import ConteudosExclusivos from "../../componentes/ConteudosExclusivos";
import Depoimentos from "../../componentes/Depoimentos";
import Footer from "../../componentes/Footer";


export default function Home() {
  return (
    <>
      <Header />

      <div>
        <LinkButton to="/sobre" text="sobre" variant="primary" className="m-1"/>
        <LinkButton to="/parceiros" text="parceiros" variant="secondary" className="m-1"/>
        <LinkButton to="/ajuda" text="ajuda" variant="success" className="m-1"/>
        <LinkButton to="/profissionais" text="profissionais" variant="warning" className="m-1"/>
        <LinkButton to="/vagas" text="vagas" variant="danger" className="m-1"/>
        <LinkButton to="/perfil" text="perfil" variant="info" className="m-1"/>
      </div>
      <Button>Botão BS TESTE</Button>
      <ModalBS />
      <Depoimentos />
      <ConteudosExclusivos title="Conteúdos exclusivos" substitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. "/>
      <Footer />
    </>
  );
}
