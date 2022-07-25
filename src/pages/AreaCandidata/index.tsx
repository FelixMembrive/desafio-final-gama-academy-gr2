import SecaoAssinarNewsletter from "../../componentes/SecaoAssinarNewsletter";
import VagasRecomendadas from "../../componentes/VagasRecomendadas";
import CursosPublicacoes from "../../componentes/CursosPublicacoes";

export default function AreaCandidata() {
    return (
      <>
        <h1>PERFIL</h1>
        <VagasRecomendadas />
        <CursosPublicacoes title="Cursos que irão te capacitar ainda mais" />
        <CursosPublicacoes title="Publicações no blog que podem ajudar" />
        <SecaoAssinarNewsletter />
      </>
    );
  }