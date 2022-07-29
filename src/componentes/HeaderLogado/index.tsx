import Logo from "../../assets/icons/logo-techdelas.png";
import "./style.scss";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <Navbar id="navStyle-logado" expand="lg">
      <Container id="containerStyle-logado">
        <Navbar.Brand id="navImg-logado" href="#home">
          <img src={Logo} 
          className="d-inline-block align-top" 
          alt="Logo" 
          id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle  id="botaoToggleHeaderLogado"/>
        <Navbar.Collapse id="basic-navbar-nav-logado">
          <div className="bd-toc-item-logado">
            <Nav.Link href="/buscarvagas" className="links">Área da candidata</Nav.Link>
            <Nav.Link href="#link" className="links">Vagas</Nav.Link>
            <Nav.Link href="#link" className="links">Cursos</Nav.Link>
            <Nav.Link href="#link" className="links">Mentoras</Nav.Link>
            <Nav.Link href="#link" className="links">Blog</Nav.Link>
            <Nav.Link href="#link" className="links">Notificações</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}