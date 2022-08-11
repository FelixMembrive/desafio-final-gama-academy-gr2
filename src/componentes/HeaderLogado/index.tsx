import Logo from "../../assets/icons/logo-techdelas.png";
import Notificacoes from "../../assets/icons/circle_notifications.png";
import "./style.scss";
import { useRef, useLayoutEffect } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { HorizontalLogo } from "../../assets/icons/SVGicons";

interface IHeaderLogadoProps {
  pic?: string;
}

export default function Header(props: IHeaderLogadoProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    if (ref.current !== null) {
      ref.current.style.setProperty('background-image', `url(${props.pic ? props.pic : "https://raw.githubusercontent.com/FelixMembrive/desafio-final-gama-academy-gr2/main/src/assets/icons/user.png"})`, 'important');
      ref.current.style.setProperty('background-size', `cover`, 'important');
      ref.current.style.setProperty('background-color', `#EDEDED`, 'important');
    }
  }, []);
  return (
    <Navbar id="navStyle-logado" expand="lg">
      <Container id="containerStyle-logado">
        <Navbar.Brand id="navImg-logado" href="/">
          <HorizontalLogo />
        </Navbar.Brand>
        {/*@ts-ignore*/}
        <Navbar.Toggle id="botaoToggleHeaderLogado" ref={ref} />
        <Navbar.Collapse id="basic-navbar-nav-logado">
          <div className="bd-toc-item-logado">
            <Nav.Link href="/areacandidata" className="links">Área da candidata</Nav.Link>
            <Nav.Link href="/buscarvagas" className="links">Vagas</Nav.Link>
            <Nav.Link href="#link" className="links">Cursos</Nav.Link>
            <Nav.Link href="/listamentoras" className="links">Mentoras</Nav.Link>
            <Nav.Link href="#link" className="links">Blog</Nav.Link>
            <Nav.Link href="#link" className="links">Notificações <img src={Notificacoes} id="notificacoes" /></Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}