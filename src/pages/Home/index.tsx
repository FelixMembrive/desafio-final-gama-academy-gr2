import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import LinkButton from "../../componentes/LinkButton";
import Header from "../../componentes/Header";
import ConteudosExclusivos from "../../componentes/ConteudosExclusivos";
import Depoimentos from "../../componentes/Depoimentos";
import Footer from "../../componentes/Footer";
import ProcessosSeletivos from "../../componentes/ProcessosSeletivos";
import ExplicacaoFeatures from "../../componentes/ExplicacaoFeatures";

export default function Home() {
  return (
    <>
      <Header />
      <Depoimentos />
      <ExplicacaoFeatures />
      <ProcessosSeletivos />
      <ConteudosExclusivos
        title="Conteúdos exclusivos"
        substitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. "
      />
      <Footer />
    </>
  );
}
