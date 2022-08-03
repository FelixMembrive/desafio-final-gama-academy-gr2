import { Container } from "react-bootstrap";
import HeaderLogado from "../../componentes/HeaderLogado";
import Footer from "../../componentes/Footer";
import LinkButton from "../../componentes/LinkButton";


import "./style.scss"



export default function Amir_Redirec_MentAge() {
    return (
        <>
        <HeaderLogado/>
       <div>
        <Container className="d-flex flex-column justify-content-center text-center">
                
                <h4 className=" cab001 fw-bolder">Sair do Tech Delas</h4>

            <div className="mb-3">
                <h5 className="text_02 ">Você seguiu um link no <span className="spantech">techdelas.com</span> que redireciona para 
                <span className="spanhttp" style={{color:'#601C4F'}}> https://calendly.com/mariaisabel/mentoria-gratis?month=2022-08
                    </span></h5>
            </div>

            <div className="btn01_red_div">
            {/* <LinkButton className="btn01_red btn-primary border-0 fw-semibold rounded-pill d-flex flex-column justify-content-center align-items-center" to="" text="Seguir Link"></LinkButton> */}
                <LinkButton className="btn01_red btn-primary border-0 fw-semibold rounded-pill justify-content-center pt-2" to="" text="Seguir Link"></LinkButton>
            </div>  

                <p className="pg_03 fw-semibold">Somente clique em links de fontes que você confia.</p>
                          
        </Container>
       </div>
        <Footer/>
        </>
        
    );
  }