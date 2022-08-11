import CardVideo from "../CardVideo";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Card, Row } from "react-bootstrap";
import logo from '../../assets/icons/icone_vaga.svg'

import './style.scss'
import LinkButton from "../LinkButton";
import CardMentora from "../CardMentora";

export default function MentoriaCandidata() {
    const dados = [
        {
          logo_empresa: "https://i.im.ge/2022/08/02/Fy93uc.logo1.png",
          empresa: "Americanas",
          cargo: "Product Designer Senior",
          foto_mentora:"https://i.im.ge/2022/08/02/Fy9Q0G.Medium-shot-smiley-girl-posing-with-wall.png",
          nome_mentora: "Maria Isabel",
          area_mentora: "UX/UI Design",
          descricao_mentora: "Designer gráfica por formação, atualmente é Product Designer na Americanas S.A. Possui exp...",
        },
        {
          logo_empresa:"https://i.im.ge/2022/08/02/Fy9Y9L.logo2.png",
          empresa: "Americanas",
          cargo: "Product Designer Senior",
          foto_mentora:"https://i.im.ge/2022/08/02/Fy9OSz.mentora2.png",
          nome_mentora: "Júlia Guimarães",
          area_mentora: "Front-End",
          descricao_mentora: "Analista e desenvolvedora de sistemas por formação, atualmente é Software Engineer na Lo...",
        },
        {
          logo_empresa:"https://i.im.ge/2022/08/02/Fy98La.logo3.png",
          cargo: "Product Designer Senior",
          empresa: "Americanas",
          foto_mentora:"https://i.im.ge/2022/08/02/Fy9s8X.mentora3.png",
          nome_mentora: "Camila Abreu",
          area_mentora: "Back-End",
          descricao_mentora: "Engenheira da computação por formação, atualmente é Software Engineer na Loggi, possui..."
        },
        {
          logo_empresa:"https://i.im.ge/2022/08/02/Fy9gQx.logo4.png",
          cargo: "Product Designer Senior",
          empresa: "Americanas",
          foto_mentora:"https://i.im.ge/2022/08/02/Fy97M8.mentora4.png",
          nome_mentora: "Nome",
          area_mentora: "Área de atuação",
          descricao_mentora: "Jornalista por formação, Product Designer na..."
        },
        {
          logo_empresa:"https://i.im.ge/2022/08/02/Fy9b8G.logo5.png",
          cargo: "Product Designer Senior",
          empresa: "Americanas",
          foto_mentora:"https://i.im.ge/2022/08/02/Fy9LJY.mentora5.png",
          nome_mentora: "Nome",
          area_mentora: "Área de atuação",
          descricao_mentora: "Jornalista por formação, Product Designer na..."
        },
        {
          logo_empresa:"https://i.im.ge/2022/08/02/Fy9CP0.logo6.png",
          cargo: "Product Designer Senior",
          empresa: "Americanas",
          foto_mentora:"https://i.im.ge/2022/08/02/Fy9hdD.mentora6.png",
          nome_mentora: "Nome",
          area_mentora: "Área de atuação",
          descricao_mentora: "Jornalista por formação, Product Designer na..."
        },
        {
          logo_empresa:"https://i.im.ge/2022/08/02/Fy9EkT.logo7.png",
          cargo: "Product Designer Senior",
          empresa: "Americanas",
          foto_mentora:"https://i.im.ge/2022/08/02/Fy9iN4.mentora7.png",
          nome_mentora: "Nome",
          area_mentora: "Área de atuação",
          descricao_mentora: "Jornalista por formação, Product Designer na..."
        },
        {
          logo_empresa:"https://i.im.ge/2022/08/02/Fy9AdW.logo8.png",
          cargo: "Product Designer Senior",
          empresa: "Americanas",
          foto_mentora:"https://i.im.ge/2022/08/02/Fy90fC.mentora8.png",
          nome_mentora: "Nome",
          area_mentora: "Área de atuação",
          descricao_mentora: "Jornalista por formação, Product Designer na..."
        },
      ];
  return (
    // <div className="mentorias-section-candidata py-11 pt-lg-26">
    //     <h2 className="titulo-mentoria-candidata text-start ms-7 ms-lg-24 mb-xs-3 mb-lg-14">Mentoras que te auxiliarão na sua carreira</h2>
    //     <ScrollContainer className="ms-7 ms-lg-24 scroll-container d-grid">
    //     <Row className="flex-nowrap row gap-xs-3 gap-lg-8 ms-0">
    //     {dados.map((item, index)=>{
    //       return(
    //         <CardMentora key={index} logo_empresa={item.logo_empresa} empresa={item.empresa} cargo={item.cargo} foto_mentora={item.foto_mentora} nome_mentora={item.nome_mentora} area_mentora={item.area_mentora} descricao_mentora={item.descricao_mentora}/>
    //         )
    //       })}
    //     </Row>
    //   </ScrollContainer>
    // </div>
        <div className="mentorias-section-candidata">
        <h2 className="titulo-mentoria-candidata">Mentoras que te auxiliarão na sua carreira</h2>
        <ScrollContainer className="">
        <Row className="flex-nowrap row">
        {dados.map((item, index)=>{
          return(
            <CardMentora key={index} logo_empresa={item.logo_empresa} empresa={item.empresa} cargo={item.cargo} foto_mentora={item.foto_mentora} nome_mentora={item.nome_mentora} area_mentora={item.area_mentora} descricao_mentora={item.descricao_mentora}/>
            )
          })}
        </Row>
      </ScrollContainer>
    </div>
    
  );
}
