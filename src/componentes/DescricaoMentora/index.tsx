import FotoExemplo from "../../assets/imagens/foto_logada_mariaisabel.png"
import './style.scss';

export default function DescricaoMentora() {
    const mentora = 
        {
            nome: "Maria Isabel",
            area: "UX/UI Design",
            descricao: "Designer gráfica por formação, atualmente é Product Designer na Americanas S.A. Possui experências em empresas como Submarino, Shoptime e Hurb.",
            foto: FotoExemplo
        }
    
    return (
        <>
        <div className="foto-mentora">
          <img src={mentora.foto} alt="Foto da Mentora" className="px-xs-10 px-sm-60 px-md-20 px-lg-16 pt-5 pb-10"/>
        </div>
        <h5 id="mentora-nome">{mentora.nome}</h5>
        <h6 id="mentora-area">{mentora.area}</h6>
        <p id="mentora-descricao">{mentora.descricao}</p>
        </>

        );
}
