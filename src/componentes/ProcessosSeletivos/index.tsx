import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';
import './style.scss';
import ImagemTriangulos from '../../assets/imagens/placeholder_triangulos.svg';

export default function ProcessosSeletivos() {

    return (
        <div className="process-section">
                <div className='process-text bg-transparent d-flex flex-column'>
                    <h2 className=" h2-processos bg-transparent align-self-center align-self-lg-start">Processos Seletivos</h2>
                    <p className="texto-processos bg-transparent mb-8 align-self-center align-self-lg-start text-center text-lg-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo.</p>
                    <LinkButton to='' text='Registre seu portfolio' className='btn-processos btn btn-light bg-transparent mx-auto ms-lg-0 p-3 px-4'/>
                </div>
        </div>
    );
}