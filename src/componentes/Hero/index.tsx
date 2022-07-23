import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import ex1 from "../../assets/imagens/ex1.jpg";
import LinkButton from "../../componentes/LinkButton";

// import "./styles.css"

export default function Hero() {
    return (
        <Container className="ps-5">
            <div className="d-flex">
                <div>
                    <div>
                        <h2 className="tx1 fs-2 fw-bolder text-start mt-5 pt-5 mb-3">Frase de impacto sobre hello word <br></br> o principal diferencial da empresa</h2>
                        <p className="tx2 fw-semibold text-start mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec vel<br></br> risus a nibh placerat volutpat eget vitae leo.</p>
                    </div>
                    <div className="mt-4">
                    <LinkButton className="btn-secondary" to="" text="Registre-se"></LinkButton>
                    <LinkButton className="btn-secondary ms-3" to="" text="Conheça mais"></LinkButton>
                    </div>
                </div>
                <div>
                    <img className="mt-5 pt-4 ms-5 h-75 " src={ex1} height={390} width={400}/>
                </div>
            </div>


            <div>
                <div>
                    <p className="fw-bolder mt-4 me-5 pe-5 ps text-center ">Empresas parceiras</p>
                </div>
                <div>
                    <img src="#2" />
                    <img src="#3" />
                    <img src="#4" />
                    <img src="#5" />
                </div>
            </div>
        </Container>
    );
}