import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';
import ImagemTriangulos from '../../assets/imagens/placeholder_triangulos.svg';
import SelectBox from '../SelectBox';
import './style.scss';
import { Title } from '../FeatureCard/styles';

export default function SecaoAssinarNewsletter() {

    return (
        <section className="assinar-newsletter">

            <Title>Assine nossa newsletter</Title>

            <div className="conteudo-assinar-newsletter">
                <input placeholder="Digite seu e-mail" type="text" className="item-assinar-newsletter input-assinar-newsletter" />
                <SelectBox
                    className="item-assinar-newsletter select-assinar-newsletter"
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
                <LinkButton to={''} text={'Inscreva-se'} className="item-assinar-newsletter button-assinar-newsletter" />

            </div>
        </section>
    );
}