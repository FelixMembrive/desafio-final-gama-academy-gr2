import Logo from "../../assets/icons/logo-techdelas.png";
import "./style.scss";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import LinkButton from "../LinkButton";

export default function Header() {
  return (
    <Navbar id="navStyle" expand="lg">
      <Container id="containerStyle">
        <Navbar.Brand id="navImg" href="#home">
          <img src={Logo}
            className="d-inline-block align-top"
            alt="Logo"
            id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle id="botaoToggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="botaoStyle">
            <LinkButton id="cadastre" className="botoesHeader" to="/register" size="lg" text="Cadastre-se" />
            <LinkButton id="login" className="botoesHeader" to="/login" variant="outline" size="lg" text="Entrar" />
          </div>
          <div className="bd-toc-item">
            <Nav.Link className="links">
              <LinkButton to="/buscarvagas" size="lg" text="Vagas" className="bg-transparent border-0" />
            </Nav.Link>
            <Nav.Link className="links"></Nav.Link>
            <Nav.Link className="links">
              <LinkButton to="/buscarvagas" size="lg" text="Cursos" className="bg-transparent border-0" />
            </Nav.Link>
            <Nav.Link className="links">
              <LinkButton to="/ListaMentoras" size="lg" text="Mentorias" className="bg-transparent border-0" />
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
