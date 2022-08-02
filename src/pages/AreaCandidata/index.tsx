import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import MentoriaCandidata from "../../componentes/MentoriaCandidata";
import SecaoAssinarNewsletter from "../../componentes/SecaoAssinarNewsletter";
import VagasRecomendadas from "../../componentes/VagasRecomendadas";
import SecaoCursos from "../../componentes/SecaoCursos";
import SecaoPublicacoes from "../../componentes/SecaoPublicacoes";
import HeaderLogado from "../../componentes/HeaderLogado";

export default function AreaCandidata() {
    return (
      <>
        <HeaderLogado />
        <VagasRecomendadas />
        <SecaoCursos title="Cursos que irão te capacitar ainda mais" />
        <MentoriaCandidata />
        <SecaoPublicacoes title="Publicações no blog que podem ajudar" />
        <SecaoAssinarNewsletter />
        <Footer />
      </>
    );
  }