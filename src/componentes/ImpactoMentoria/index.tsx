import LinkButton from '../LinkButton';
import './style.scss';
import Imagem from '../../assets/imagens/placeholder_triangulos.svg';

export default function ImpactoMentoria() {

    return (
        <div className="containerMentoria" style={{backgroundColor:'#EFEFEF'}}>
            <div className='Mentoria textoMentoria'>
                <img src={Imagem} alt="" className="img-fluid bg-transparent align-center" id="imagem"/>
                    <h2 className="textoMentoria">Frase de impacto sobre mentoria</h2>
                    <p className="textoMentoria">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo.</p>
                    <LinkButton className="btn-secondary rounded-pill mt-4 mt-md-3 textoMentoria botao" id="botao" to="" text="Conheça as mentorias" />
                </div>
            </div>
    );
}