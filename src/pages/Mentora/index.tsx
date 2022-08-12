import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import DescricaoMentora from "../../componentes/DescricaoMentora";
import CardCurso from "../../componentes/CardCurso";
import LinkButton from "../../componentes/LinkButton";
import LinkBack from "../../componentes/LinkBack";
import './style.scss';
import { propTypes } from "react-bootstrap/esm/Image";
import HeaderLogado from "../../componentes/HeaderLogado";
import { useSelector } from "react-redux";

export default function Mentora() {
  window.scrollTo(0, 0)
  const user = useSelector((state: any) => state.persistedReducer);
  return (
    <>
      <HeaderLogado pic={user.pic} />
      <LinkBack text="Voltar para Mentoras" className="pt-5 ps-md-3"/>
      <div className="ps-md-3 ps-lg-5">
      <DescricaoMentora/> 
      <div>
      <LinkButton className="d-flex justify-content-center rounded-pill py-2 ms-4 my-5 btn-valores-agendamento" to="../mentora-agendamento" text="Ver valores para agendamento"></LinkButton>
      </div> 
      <div className="conteudos-recomendados">
        <h5>Conteúdos recomendados</h5>
        <p>Veja materiais que a mentora indica</p>
        <CardCurso containerClass="cards-mentora"/>
      </div>
      </div>
      <Footer />
    </>
  );
}
