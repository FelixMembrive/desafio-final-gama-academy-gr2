import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import CardCurso from "../../componentes/CardCurso";
import './style.scss';

export default function Mentora() {
  return (
    <>
      <Header />

        <div>
          <h5 className="px-xs-10 px-sm-60 px-md-20 px-lg-16 pt-5">Cursos relacionados</h5>
          <p className="px-xs-10 px-sm-60 px-md-20 px-lg-16 pb-5">Veja cursos que a mentora indica</p>
        <CardCurso />
        </div>
      <Footer />
    </>
  );
}
