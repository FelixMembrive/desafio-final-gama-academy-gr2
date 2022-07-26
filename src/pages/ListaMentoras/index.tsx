import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import Mentoras from "../../componentes/Mentoras";
import CardMentora from "../../componentes/CardMentora";

export default function ListaMentoras() {
  return (
    <>
      <Header />
      <Mentoras />
      <CardMentora />
      <Footer />
    </>
  );
}
