import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';
import './style.scss';
import ImagemTriangulos from '../../assets/imagens/placeholder_triangulos.svg';
import '../../typography.scss'

export default function ProcessosSeletivos() {

    return (
        <div className="process-section d-flex flex-column justify-content-between p-4">
                <div className='process-text bg-transparent d-flex flex-column'>
                    <h2 className=" h2-processos bg-transparent align-self-center align-self-lg-start my-3 tp-heading-3">Processos Seletivos</h2>
                    <p className="texto-processos align-self-center align-self-lg-start text-center text-lg-start tp-body-normal">Não perca a oportunidade de ser vista pelas melhores empresas de tecnologia</p>
                </div>
                <LinkButton to='/register' text='Registre seu portfolio' className='btn-processos btn mx-auto ms-lg-0 p-3 mb-4 rounded-pill d-flex justify-content-center align-items-center'/>
        </div>
    );
}