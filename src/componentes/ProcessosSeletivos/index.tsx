import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';
import './style.scss';
import ImagemTriangulos from '../../assets/imagens/placeholder_triangulos.svg';

export default function ProcessosSeletivos() {

    return (
        <div className="process-section d-flex flex-column flex-lg-row-reverse px-8 py-9 px-sm-19 py-sm-19 py-lg-30 justify-content-xl-between align-items-lg-end pb-lg-50 pb-xxl-76" style={{backgroundColor:'white'}}>
                <img src={ImagemTriangulos} alt="" className="img-processos img-fluid bg-transparent mx-3 mb-8 mx-md-5 mb-lg-0"/>
                <div className='process-text bg-transparent d-flex flex-column'>
                    <h2 className="bg-transparent align-self-center align-self-lg-start">Processos Seletivos</h2>
                    <p className="texto-processos bg-transparent mb-8 align-self-center align-self-lg-start text-center text-lg-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo.</p>
                    <LinkButton to='' text='Registre seu portfolio' className='btn-processos btn btn-light bg-transparent mx-auto ms-lg-0 p-3 px-4'/>
                </div>
        </div>
    );
}