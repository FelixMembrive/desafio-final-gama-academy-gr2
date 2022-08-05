import LinkButton from '../LinkButton';
import './style.scss';
import Imagem from '../../assets/imagens/depoimentos.png';

export default function ImpactoMentoria() {

    return (
        <div className="divImpactoMentoria">
        <img src={Imagem} alt="" className="img-fluid bg-transparent align-center" id="imagem"/>
        <div className="containerMentoria">
            <h2>Seja mentorada pelas melhores do mercado</h2>
            <div className='Mentoria'>
                <div id="backgroundMentoria" ></div>
                <h2 id='h2768'>Seja mentorada pelas melhores do mercado</h2>
                <p>Tire todas as suas dúvidas e tenha uma especialista para te ajudar a se destacar na sua carreira.</p>
                <a href="listamentoras">
                <button className="botaoImpactoMentoria">Conheça as mentorias</button>
                </a>
            </div>
        </div>
    </div>
    );
}