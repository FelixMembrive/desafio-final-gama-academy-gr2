import LinkButton from '../LinkButton';
import './style.scss';
import Imagem from '../../assets/imagens/depoimentos.png';

export default function ImpactoMentoria() {

    return (
        <>
        <img src={Imagem} alt="" className="img-fluid bg-transparent align-center" id="imagem"/>
        <div className="containerMentoria">
            <h2>Seja mentorada pelas melhores do mercado</h2>
            <div className='Mentoria'>
                    <p >Tire todas as suas dúvidas e tenha uma especialista para te ajudar a se destacar na sua carreira.</p>
                    <button className="botaoImpactoMentoria">Conheça as mentorias</button>
                </div>
            </div>
    </>
    );
}