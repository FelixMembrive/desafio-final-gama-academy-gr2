import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import IconeFoto from "../../assets/icons/Logo.png"
import DescricaoMentora from "../../componentes/DescricaoMentora";
import CardCurso from "../../componentes/CardCurso";
import LinkButton from "../../componentes/LinkButton";
import './style.scss';
import LinkText from "../../componentes/LinkText";

export default function Mentora() {
  return (
    <>
      <Header />
      <LinkText to="#" backArrow text="Voltar para Mentoras"/>
      <DescricaoMentora /> 
      <div id="btn-agendamento">
      <LinkButton className="d-flex justify-content-center rounded-pill my-8 mx-xs-6 mx-md-15 px-xs-5 py-4" to="" text="Ver valores para agendamento"></LinkButton>
      </div> 
      <div>
        <h5 className="px-xs-10 px-sm-60 px-md-20 px-lg-16 pt-5">Cursos relacionados</h5>
        <p className="px-xs-10 px-sm-60 px-md-20 px-lg-16 pb-5">Veja cursos que a mentora indica</p>
        <CardCurso />
      </div>
      <Footer />
    </>
  );
}
