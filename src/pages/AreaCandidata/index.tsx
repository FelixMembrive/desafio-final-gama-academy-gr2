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
import BackgroundWaves from "../../componentes/BackgroundWaves";
import cornerPattern from '../../assets/icons/cornerPattern.svg';
import centerPattern from '../../assets/icons/centerPattern.svg';
import UnautorizedAccesPage from "../UnautorizedAccesPage";


export default function AreaCandidata() {
  // window.scrollTo(0, 0)
  
  const user = useSelector((state: any) => state.persistedReducer);

  if (user && user.token.length > 0) {
    
    return (
      <>
        <HeaderLogado pic={user.pic} />
        {/* <SecaoPrincipalAreaCandidata name={user.name} pic={user.pic} /> */}
        <SecaoPrincipalAreaCandidata name={user.name} />
        <VagasRecomendadas />
        <SecaoCursos title="Cursos que irão te capacitar ainda mais" />
        <MentoriaCandidata/>
        <SecaoPublicacoes title="Publicações no blog que podem ajudar" />
        <SecaoAssinarNewsletter />
        <Footer />

        <BackgroundWaves className="leftPattern" pattern={cornerPattern} />
        <BackgroundWaves className="rightPattern" pattern={cornerPattern} paddingImage={"700px"} />
        <BackgroundWaves className="centerPattern" pattern={centerPattern} paddingImage={"1750px"} />
        {/* <BackgroundWaves className="centerPattern" pattern={centerPattern} paddingImage={"4000px"}/> */}
      </>
    );
  } else {
    return (
      // <>
      //   <Header />

      //   <div id="not-logged-div" className="d-flex flex-column align-items-center text-center py-5 px-1">
      //     <h2 className="my-5">Ops! Esta página é de acesso exclusivo para usuárias</h2>
      //     <LinkButton className=" btn btn001 rounded-pill my-2" to="/register" text="Cadastre-se"></LinkButton>
      //     <LinkButton className="btn002 btn-light border border-dark border-2 rounded-pill my-2" to="/login" text="Entrar"></LinkButton>
      //   </div>
      //   <Footer />
      // </>

      <UnautorizedAccesPage/>
    );
  }
}