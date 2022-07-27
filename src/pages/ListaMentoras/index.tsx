import Button from "react-bootstrap/Button";
import ModalBS from "../../componentes/ModalBS";
import AlertBS from "../../componentes/AlertBS";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import Mentoras from "../../componentes/Mentoras";
import CardMentora from "../../componentes/CardMentora";

export default function ListaMentoras() {

  const dados = [
    {
      nome_mentora: "Nome",
      area_mentora: "Área de atuação",
      descricao_mentora: "Jornalista por formação, Product Designer na..."
    },
    {
      nome_mentora: "Nome",
      area_mentora: "Área de atuação",
      descricao_mentora: "Jornalista por formação, Product Designer na..."
    },
    {
      nome_mentora: "Nome",
      area_mentora: "Área de atuação",
      descricao_mentora: "Jornalista por formação, Product Designer na..."
    },
    {
      nome_mentora: "Nome",
      area_mentora: "Área de atuação",
      descricao_mentora: "Jornalista por formação, Product Designer na..."
    },
    {
      nome_mentora: "Nome",
      area_mentora: "Área de atuação",
      descricao_mentora: "Jornalista por formação, Product Designer na..."
    },
    {
      nome_mentora: "Nome",
      area_mentora: "Área de atuação",
      descricao_mentora: "Jornalista por formação, Product Designer na..."
    },

  ];
  return (
    <>
      <Header />
      <Mentoras />
      {dados.map((item, index) => {
        return (
          <CardMentora 
          className="card-mentora-lista"
          key={index} 
          nome_mentora={item.nome_mentora} 
          area_mentora={item.area_mentora} 
          descricao_mentora={item.descricao_mentora} />
        );
      })}
      <Footer />
    </>
  );
}
