import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import MentoriaCandidata from "../../componentes/MentoriaCandidata";
import SecaoAssinarNewsletter from "../../componentes/SecaoAssinarNewsletter";
import VagasRecomendadas from "../../componentes/VagasRecomendadas";
import SecaoCursos from "../../componentes/SecaoCursos";
import SecaoPublicacoes from "../../componentes/SecaoPublicacoes";
import HeaderLogado from "../../componentes/HeaderLogado";
import SecaoPrincipalAreaCandidata from "../../componentes/SecaoPrincipalAreaCandidata";
import { useSelector } from "react-redux";
import LinkButton from "../../componentes/LinkButton";

export default function AreaCandidata() {
  const user = useSelector((state: any) => state.persistedReducer);
  
  if (user && user.token.length > 0) {
    return (
      <>
        <HeaderLogado pic={user.pic}/>
        <SecaoPrincipalAreaCandidata name={user.name} pic={user.pic} />
        <VagasRecomendadas />
        <SecaoCursos title="Cursos que irão te capacitar ainda mais" />
        <MentoriaCandidata />
        <SecaoPublicacoes title="Publicações no blog que podem ajudar" />
        <SecaoAssinarNewsletter />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div id="not-logged-div" className="d-flex flex-column align-items-center text-center py-5 px-1">
          <h2 className="my-5">Ops! Esta página é de acesso exclusivo para usuárias</h2>
          <LinkButton className=" btn btn001 rounded-pill my-2" to="/register" text="Cadastre-se"></LinkButton>
          <LinkButton className="btn002 btn-light border border-dark border-2 rounded-pill my-2" to="/login" text="Entrar"></LinkButton>
        </div>
        <Footer />
      </>
    );
  }
}