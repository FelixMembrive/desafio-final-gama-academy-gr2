import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Logo from '../../assets/Logo.png'
import { StyleHeader } from './style';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <StyleHeader>
      <Navbar className='navbar'>
        <Container className="container1">
          <Navbar.Brand href="#">
            <img
              src= { Logo }
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Container className="links">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Processos seletivos
                </a></li>
                <li className="nav-item">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cursos
                </a></li>
                <li className="nav-item">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Mentorias
                </a></li>
            </ul>
          </Container>
          <Container className="botoesContainer">
            <li className="liButton">
              <Button id="registre" href="#" size="lg">
                  Registre-se
              </Button>
            </li>
            <li>
            <Button id="login" href="#" variant="outline" size="lg">
                Login
            </Button>
            </li>
          </Container>
        </Container>
      </Navbar>
    </StyleHeader>
  );
}
