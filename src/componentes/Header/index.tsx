import Logo from "../../assets/icons/Logo.png";
import "./style.scss";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function Header() {
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
          <div className="botaoStyle">
            <Button id="registre" href="#" size="lg">
              Registre-se
            </Button>
            <Button id="login" href="#" variant="outline" size="lg">
              Login
            </Button>
          </div>
          <div className="bd-toc-item">
            <Nav.Link href="#home" className="links">Vagas</Nav.Link>
            <Nav.Link href="#link" className="links">Cursos</Nav.Link>
            <Nav.Link href="#link" className="links">Mentorias</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
