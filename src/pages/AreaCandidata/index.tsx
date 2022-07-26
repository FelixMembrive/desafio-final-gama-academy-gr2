import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import MentoriaCandidata from "../../componentes/MentoriaCandidata";
import SecaoAssinarNewsletter from "../../componentes/SecaoAssinarNewsletter";
import VagasRecomendadas from "../../componentes/VagasRecomendadas";
import CursosPublicacoes from "../../componentes/CursosPublicacoes";

export default function AreaCandidata() {
    return (
      <>
        <Header />
        <VagasRecomendadas />
        <CursosPublicacoes title="Cursos que irão te capacitar ainda mais" />
        <MentoriaCandidata />
        <CursosPublicacoes title="Publicações no blog que podem ajudar" />
        <SecaoAssinarNewsletter />
        <Footer />
      </>
    );
  }