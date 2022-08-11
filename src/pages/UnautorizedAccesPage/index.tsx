import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import LinkButton from "../../componentes/LinkButton";

export default function UnautorizedAccesPage() {
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