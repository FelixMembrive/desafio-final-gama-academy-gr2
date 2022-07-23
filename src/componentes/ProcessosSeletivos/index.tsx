import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';
import './style.scss';
import ImagemTriangulos from '../../assets/imagens/placeholder_triangulos.svg';

export default function ProcessosSeletivos() {

    return (
        <div className="process-section d-flex flex-column flex-lg-row-reverse px-8 py-9" style={{backgroundColor:'white'}}>
                <img src={ImagemTriangulos} alt="" className="img-fluid bg-transparent"/>
                <div className='process-text bg-transparent d-flex flex-column align-center'>
                    <h2 className="bg-transparent">Processos Seletivos</h2>
                    <p className="bg-transparent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus a nibh placerat volutpat eget vitae leo.</p>
                    <LinkButton to='' text='Registre seu portfolio' className='btn btn-light bg-transparent'/>
                </div>
        </div>
    );
}