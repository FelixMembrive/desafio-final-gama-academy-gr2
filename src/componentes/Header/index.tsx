import Logo from "../../assets/Logo.png";
import "./style.scss";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <Navbar id="navStyle" bg="light" expand="lg">
      <Container id="containerStyle">
        <Navbar.Brand id="navImg" href="#home">
          <img src={Logo} className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="botaoToggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="bd-toc-item">
            <Nav.Link href="#home">Processos seletivos</Nav.Link>
          </div>
          <div className="bd-toc-item">
            <Nav.Link href="#link">Cursos</Nav.Link>
          </div>
          <Nav.Link href="#link">Mentorias</Nav.Link>
          <div className="bd-toc-item">
            <Button id="registre" href="#" size="lg">
              Registre-se
            </Button>
          </div>
          <div className="bd-toc-item">
            <Button id="login" href="#" variant="outline" size="lg">
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
