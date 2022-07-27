import Logo from "../../assets/icons/Logo.png";
import "./style.scss";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function HeaderLogado() {
  return (
    <Navbar id="navStyle" expand="lg">
      <Container id="containerStyle">
        <Navbar.Brand id="navImg" href="#home">
          <img src={Logo} 
          className="d-inline-block align-top" 
          alt="Logo" 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="botaoToggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="bd-toc-item">
            <Nav.Link href="/buscarvagas" className="links">Área da candidata</Nav.Link>
            <Nav.Link className="links">Vagas</Nav.Link>
            <Nav.Link href="#link" className="links">Cursos</Nav.Link>
            <Nav.Link href="#link" className="links">Mentorias</Nav.Link>
            <Nav.Link href="#link" className="links">Blog</Nav.Link>
            <Nav.Link href="#link" className="links"  style={{color:"red"}}>Sair da conta</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}