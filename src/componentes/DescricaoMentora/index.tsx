import IconeFoto from "../../assets/icons/Logo.png"
import './style.scss';

export default function DescricaoMentora() {
    const mentora = 
        {
            nome: "Marli Isabelly Teresinha",
            area: "Frontend",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo. Curabitur sapien purus, laoreet vel sollicitudin id, rutrum a urna. Sed mattis commodo libero, sit amet tempus eros molestie eget. Praesent elementum nisi id massa mattis, at interdum neque vulputate. In vulputate velit consectetur tortor tempus mollis",
            foto: IconeFoto
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
