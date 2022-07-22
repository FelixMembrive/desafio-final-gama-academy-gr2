import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import LinkButton from "../../componentes/LinkButton";
<<<<<<< HEAD
import Header from "../../componentes/Header"
=======
import ConteudosExclusivos from "../../componentes/ConteudosExclusivos";
import Depoimentos from "../../componentes/Depoimentos";
import Footer from "../../componentes/Footer";

>>>>>>> 6116fedc1d63d5e2f792a21be0e6147a1d6ace67

export default function Home() {
  return (
    <>
      <Header />
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
      <ConteudosExclusivos title="Conteúdos exclusivos" substitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. "/>
      <Depoimentos />
      <Footer />
    </>
  );
}
