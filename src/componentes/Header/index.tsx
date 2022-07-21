import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Logo from '../../assets/Logo.png'

import './style.css'

export default function Header() {
  return (
    <>
      <Navbar className='navbar'>
        <Container className="container1" xxl={2}>
          <Navbar.Brand href="#">
            <img
              src= { Logo }
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Container className="links" xxl={7}>
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
          <Container className="botoesContainer" xxl={3}>
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
    </>
  );
}
