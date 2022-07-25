import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';
import './style.scss';
import ImagemTriangulos from '../../assets/imagens/placeholder_triangulos.svg';
import SelectBox from '../SelectBox';

export default function SecaoAssinarNewsletter() {

    return (
        <section className="assinar-newsletter">
            <div className="title">
                <h3>Assine nossa newsletter</h3>
            </div>
            <div className="fields">
                <input placeholder="Digite seu e-mail" type="text" />
                <SelectBox
                    className=""
                    placeholder="Sua área"
                    // inputId="sua-area-select"
                    optionValues={[1, 2, 3, 4, 5, 6, 7]}
                    optionTexts={[
                        "Enfermagem",
                        "Fisioterapia",
                        "Fonoaudiologia",
                        "Medicina",
                        "Nutrição",
                        "Odontologia",
                        "Psicologia",
                    ]}
                />
                <LinkButton to={''} text={'Inscreva-se'} />
            </div>
        </section>
    );
}